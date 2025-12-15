using UnityEngine;

namespace Task1
{
    public class Gun : MonoBehaviour
    {
        [SerializeField] private Bullet _bulletPrefab;
        [SerializeField] private int _poolSize = 10;
        [SerializeField] private Transform _firePoint;
        [SerializeField] private KeyCode _fireKey = KeyCode.Space;

        private ObjectPool<Bullet> _pool;

        private void Awake()
        {
            _pool = new ObjectPool<Bullet>(_bulletPrefab, _poolSize, transform);
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
            Bullet bullet = _pool.Get();
            bullet.transform.position = _firePoint ? _firePoint.position : transform.position;
            bullet.transform.rotation = _firePoint ? _firePoint.rotation : transform.rotation;
            bullet.Initialize(_pool);
        }
    }
}
