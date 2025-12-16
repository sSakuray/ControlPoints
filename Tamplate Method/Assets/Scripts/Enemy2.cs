using UnityEngine;

public class Enemy2 : EnemyBehavior
{
    [SerializeField] private float attackInterval = 1.0f;
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private Transform firePoint;
    
    private float lastAttackTime = 0f;

    protected override void OnSpawn()
    {
        SetLabel("Враг 2");
    }

    protected override void UpdateBehavior()
    {
        if (Time.time - lastAttackTime >= attackInterval)
        {
            PerformAttackWithShoot();
            lastAttackTime = Time.time;
        }
    }

    private void PerformAttackWithShoot()
    {
        animator.Play("Hit2", 0, 0f);
        
        if (bulletPrefab != null && firePoint != null)
        {
            GameObject bullet = Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);
            
            Rigidbody2D bulletRb = bullet.GetComponent<Rigidbody2D>();
            if (bulletRb != null)
            {
                bulletRb.linearVelocity = firePoint.right * 10f;
            }
            
            Destroy(bullet, 3f);
        }
    }

    protected override void OnActivate()
    {
        lastAttackTime = Time.time;
    }
}
