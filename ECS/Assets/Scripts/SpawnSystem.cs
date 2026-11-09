using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;

namespace _Source
{
    [BurstCompile]
    [UpdateBefore(typeof(OrbitMoveSystem))]
    public partial struct SpawnSystem : ISystem
    {
        [BurstCompile]
        public void OnCreate(ref SystemState state)
        {
            state.RequireForUpdate<Spawner>();
        }

        [BurstCompile]
        public void OnUpdate(ref SystemState state)
        {
            state.Enabled = false;

            Spawner spawner = SystemAPI.GetSingleton<Spawner>();
            if (spawner.Columns <= 0)
            {
                return;
            }

            NativeArray<Entity> entities = state.EntityManager.Instantiate(spawner.Prefab, spawner.Count, Allocator.Temp);

            for (int i = 0; i < entities.Length; i++)
            {
                float3 center = new float3(i % spawner.Columns, 0f, i / spawner.Columns) * spawner.Spacing;
                SystemAPI.SetComponent(entities[i], new OrbitCenter { Value = center });
            }

            entities.Dispose();
        }
    }
}
