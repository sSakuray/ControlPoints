using Unity.Entities;
using UnityEngine;

namespace _Source
{
    public class SpawnerAuthoring : MonoBehaviour
    {
        [SerializeField] private GameObject _prefab;
        [SerializeField] private int _count = 50000;
        [SerializeField] private int _columns = 250;
        [SerializeField] private float _spacing = 3f;
        [SerializeField] private bool _useJobs = true;

        private class Baker : Baker<SpawnerAuthoring>
        {
            public override void Bake(SpawnerAuthoring authoring)
            {
                if (authoring._prefab == null)
                {
                    return;
                }

                Entity entity = GetEntity(TransformUsageFlags.None);
                AddComponent(entity, new Spawner
                {
                    Prefab = GetEntity(authoring._prefab, TransformUsageFlags.Dynamic),
                    Count = authoring._count,
                    Columns = authoring._columns,
                    Spacing = authoring._spacing,
                    UseJobs = authoring._useJobs
                });
            }
        }
    }
}
