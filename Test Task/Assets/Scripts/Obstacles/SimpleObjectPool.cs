using UnityEngine;
using UnityEngine.Pool;

namespace FlappyComet.Obstacles
{
    public class SimpleObjectPool : MonoBehaviour
    {
        [SerializeField] private GameObject prefab;
        [SerializeField] private int initialPoolSize = 6;

        private ObjectPool<GameObject> pool;

        private void Awake()
        {
            pool = new ObjectPool<GameObject>(
                createFunc: () => Instantiate(prefab, transform),
                actionOnGet: obj => obj.SetActive(true),
                actionOnRelease: obj => obj.SetActive(false),
                actionOnDestroy: Destroy,
                defaultCapacity: initialPoolSize
            );
        }

        public GameObject Get()
        {
            return pool.Get();
        }

        public void ReturnToPool(GameObject item)
        {
            pool.Release(item);
        }
    }
}
