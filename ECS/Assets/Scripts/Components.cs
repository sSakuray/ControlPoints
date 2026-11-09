using Unity.Entities;
using Unity.Mathematics;

namespace _Source
{
    public struct MoveSpeed : IComponentData
    {
        public float Value;
    }

    public struct Radius : IComponentData
    {
        public float Value;
    }

    public struct OrbitCenter : IComponentData
    {
        public float3 Value;
    }

    public struct Spawner : IComponentData
    {
        public Entity Prefab;
        public int Count;
        public int Columns;
        public float Spacing;
        public bool UseJobs;
    }
}
