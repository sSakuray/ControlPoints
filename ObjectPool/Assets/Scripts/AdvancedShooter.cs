using UnityEngine;

public class AdvancedShooter : MonoBehaviour
{
    [SerializeField] private ObjectPoolAdvanced bulletPool;
    [SerializeField] private Transform firePoint;
    [SerializeField] private float fireRate;
    
    private float nextFireTime = 0f;
    
    private void Update()
    {
        if (Input.GetButton("Fire1") && Time.time >= nextFireTime)
        {
            Shoot();
            nextFireTime = Time.time + fireRate;
        }
    }
    
    private void Shoot()
    {
        GameObject bullet;
        if (bulletPool.TryGetFromPool(out bullet))
        {
            Vector3 shootPosition = firePoint != null ? firePoint.position : transform.position;
            Vector3 shootDirection = Vector3.right;
            BulletAdvanced bulletScript = bullet.GetComponent<BulletAdvanced>();
            if (bulletScript != null)
            {
                bulletScript.Launch(shootPosition, shootDirection);
            }
        }
    }
}
