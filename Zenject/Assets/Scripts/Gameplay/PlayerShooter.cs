using UnityEngine;
using Zenject;

public class PlayerShooter : MonoBehaviour
{
    private BulletFactory _bulletFactory;
    private Transform _targetTransform;

    [Inject]
    public void Construct(BulletFactory bulletFactory, Target target)
    {
        _bulletFactory = bulletFactory;
        _targetTransform = target.transform;
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Shoot();
        } 
    }

    private void Shoot()
    {
        Vector3 targetPoint = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        targetPoint.z = transform.position.z;
        Vector2 shootDir = ((Vector2)(targetPoint - transform.position)).normalized;
        var bullet = _bulletFactory.Create(_targetTransform);
        bullet.transform.position = transform.position + (Vector3)shootDir * 0.6f;
        bullet.transform.up = shootDir;
        bullet.SetDirection(shootDir);
    }
}
