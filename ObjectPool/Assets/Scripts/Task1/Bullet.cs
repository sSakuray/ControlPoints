using UnityEngine;

namespace Task1
{
    public class Bullet : MonoBehaviour
    {
        [SerializeField] private float _speed = 10f;
        [SerializeField] private float _lifeTime = 2f;

        private float _timer;
        private ObjectPool<Bullet> _pool;

        public void Initialize(ObjectPool<Bullet> pool)
        {
            _pool = pool;
        }

        private void OnEnable()
        {
            _timer = _lifeTime;
        }

        private void Update()
        {
            transform.Translate(Vector3.right * _speed * Time.deltaTime);

            _timer -= Time.deltaTime;
            if (_timer <= 0)
            {
                ReturnToPool();
            }
        }

        private void ReturnToPool()
        {
            if (_pool != null)
            {
                _pool.Return(this);
            }
            else
            {
                Destroy(gameObject);
            }
        }
    }
}
