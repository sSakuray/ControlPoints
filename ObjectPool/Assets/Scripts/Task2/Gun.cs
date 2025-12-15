using UnityEngine;

namespace Task2
{
    public class Gun : MonoBehaviour
    {
        [SerializeField] private Bullet _bulletPrefab;
        [SerializeField] private int _startPoolSize = 5;
        [SerializeField] private int _maxPoolSize = 10;
        [SerializeField] private Transform _firePoint;
        [SerializeField] private KeyCode _fireKey = KeyCode.Space;

        private ObjectPool<Bullet> _pool;

        private void Awake()
        {
            _pool = new ObjectPool<Bullet>(_bulletPrefab, _startPoolSize, _maxPoolSize, transform);
        }

        private void Update()
        {
            if (Input.GetKeyDown(_fireKey))
            {
                Shoot();
            }
        }

        private void Shoot()
        {
            if (_pool.TryGetFromPool(out Bullet bullet))
            {
                bullet.transform.position = _firePoint ? _firePoint.position : transform.position;
                bullet.transform.rotation = _firePoint ? _firePoint.rotation : transform.rotation;
                bullet.Initialize(_pool);
            }
        }
    }
}
