using UnityEngine;
using UnityEngine.EventSystems;
using Zenject;

public class PlayerShooter : MonoBehaviour
{
    private BulletFactory _bulletFactory;

    [Inject]
    public void Construct(BulletFactory bulletFactory)
    {
        _bulletFactory = bulletFactory;
    }

    private void Update()
    {
        if (Time.timeScale == 0f)
        {
            return;
        }

        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject())
        {
            return;
        }

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
        var bullet = _bulletFactory.Create();
        bullet.transform.position = transform.position + (Vector3)shootDir * 0.6f;
        bullet.transform.up = shootDir;
        bullet.SetDirection(shootDir);
    }
}
