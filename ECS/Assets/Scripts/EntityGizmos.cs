using Unity.Collections;
using Unity.Entities;
using Unity.Transforms;
using UnityEngine;

namespace _Source
{
    public class EntityGizmos : MonoBehaviour
    {
        [SerializeField] private bool _isVisible = true;
        [SerializeField] private int _maxMarkers = 1000;
        [SerializeField] private float _markerSize = 0.5f;
        [SerializeField] private Color _color = Color.yellow;

        private EntityQuery _query;

        private void Start()
        {
            _query = World.DefaultGameObjectInjectionWorld.EntityManager.CreateEntityQuery(typeof(LocalTransform), typeof(OrbitCenter));
        }

        private void OnDrawGizmos()
        {
            if (!Application.isPlaying || !_isVisible || World.DefaultGameObjectInjectionWorld == null)
            {
                return;
            }

            _query.CompleteDependency();
            NativeArray<LocalTransform> transforms = _query.ToComponentDataArray<LocalTransform>(Allocator.Temp);
            int count = Mathf.Min(transforms.Length, _maxMarkers);

            Gizmos.color = _color;
            for (int i = 0; i < count; i++)
            {
                Gizmos.DrawWireCube(transforms[i].Position, Vector3.one * _markerSize);
            }

            transforms.Dispose();
        }
    }
}
