using Unity.Burst;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

namespace _Source
{
    [BurstCompile]
    public partial struct OrbitMoveSystem : ISystem
    {
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            state.RequireForUpdate<Spawner>();
        }

        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            float time = (float)SystemAPI.Time.ElapsedTime;

            if (SystemAPI.GetSingleton<Spawner>().UseJobs)
            {
                state.Dependency = new OrbitMoveJob { Time = time }.ScheduleParallel(state.Dependency);
                return;
            }

            foreach (var (transform, speed, radius, center) in
                     SystemAPI.Query<RefRW<LocalTransform>, RefRO<MoveSpeed>, RefRO<Radius>, RefRO<OrbitCenter>>())
            {
                transform.ValueRW.Position = OrbitMoveJob.GetPosition(time, speed.ValueRO.Value, radius.ValueRO.Value, center.ValueRO.Value);
            }
        }
    }

    [BurstCompile]
    public partial struct OrbitMoveJob : IJobEntity
    {
        public float Time;

        private void Execute(ref LocalTransform transform, in MoveSpeed speed, in Radius radius, in OrbitCenter center)
        {
            transform.Position = GetPosition(Time, speed.Value, radius.Value, center.Value);
        }

        public static float3 GetPosition(float time, float speed, float radius, float3 center)
        {
            float angle = time * speed;
            return center + new float3(math.cos(angle), 0f, math.sin(angle)) * radius;
        }
    }
}
