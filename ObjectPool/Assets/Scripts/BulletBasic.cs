using UnityEngine;

public class BulletBasic : MonoBehaviour
{
    [SerializeField] private float speed = 10f;
    [SerializeField] private float lifetime = 5f;
    
    private ObjectPoolBasic pool;
    private float currentLifetime;
    private Vector3 direction;
    
    public void Initialize(ObjectPoolBasic objectPool)
    {
        pool = objectPool;
    }
    
    public void Launch(Vector3 startPosition, Vector3 launchDirection)
    {
        transform.position = startPosition;
        direction = launchDirection.normalized;
        currentLifetime = lifetime;
    }
    
    private void Update()
    {
        transform.Translate(direction * speed * Time.deltaTime, Space.World);
        
        currentLifetime -= Time.deltaTime;
        
        if (currentLifetime <= 0f)
        {
            ReturnToPool();
        }
    }
    private void ReturnToPool()
    {
        if (pool != null)
        {
            pool.ReturnToPool(gameObject);
        }
    }
}
