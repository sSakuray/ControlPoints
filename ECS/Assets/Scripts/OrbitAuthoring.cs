using Unity.Entities;
using Unity.Mathematics;
using UnityEngine;

namespace _Source
{
    public class OrbitAuthoring : MonoBehaviour
    {
        [SerializeField] private float _speed = 1f;
        [SerializeField] private float _radius = 1f;

        private class Baker : Baker<OrbitAuthoring>
        {
            public override void Bake(OrbitAuthoring authoring)
            {
                Entity entity = GetEntity(TransformUsageFlags.Dynamic);
                AddComponent(entity, new MoveSpeed { Value = authoring._speed });
                AddComponent(entity, new Radius { Value = authoring._radius });
                AddComponent(entity, new OrbitCenter { Value = float3.zero });
            }
        }
    }
}
