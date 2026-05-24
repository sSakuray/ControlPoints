using UnityEngine;
using Zenject;

public class Bullet : MonoBehaviour, IPoolable<Transform, IMemoryPool>, System.IDisposable
{
    public float flySpeed = 10f;
    public float checkRadius = 5f;
    public float lifeTime = 3f;

    private Transform _targetTransform;
    private IMemoryPool _pool;
    private float _timer;
    private bool _hasTarget;
    private Vector2 _direction;
    private ISoundPlayer _soundPlayer;
    private Rigidbody2D _rb;

    [Inject]
    public void Construct(ISoundPlayer soundPlayer)
    {
        _soundPlayer = soundPlayer;
    }

    private void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
        _rb.isKinematic = false;
        _rb.gravityScale = 0f;
        _rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
    }

    public void OnSpawned(Transform targetTransform, IMemoryPool pool)
    {
        _targetTransform = targetTransform;
        _pool = pool;
        _timer = 0f;
        _hasTarget = false;
        _direction = Vector2.up;
        _rb.isKinematic = false;
        _rb.gravityScale = 0f;
        _rb.linearVelocity = Vector2.zero;
        _soundPlayer.PlayShootSound();
    }

    public void SetDirection(Vector2 direction)
    {
        _direction = direction;
        Collider2D[] colliders = Physics2D.OverlapCircleAll(transform.position, checkRadius);
        _hasTarget = _targetTransform != null;
        foreach (var col in colliders)
        {
            if (col.GetComponent<DestructibleObstacle>() != null)
            {
                _hasTarget = false;
                break;
            }
        }
    }

    public void OnDespawned()
    {
        _pool = null;
        _targetTransform = null;
    }

    public void Dispose()
    {
        if (_pool != null)
        {
            _pool.Despawn(this);   
        }
    }

    private void FixedUpdate()
    {
        _timer += Time.fixedDeltaTime;
        if (_timer >= lifeTime)
        {
            Dispose();
            return;
        }
        if (_hasTarget && _targetTransform != null)
        {
            Vector2 dir = ((Vector2)_targetTransform.position - (Vector2)transform.position).normalized;
            _rb.linearVelocity = dir * flySpeed;
            transform.up = (Vector3)dir;
        }
        else
        {
            _rb.linearVelocity = _direction * flySpeed;
        }
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.GetComponentInParent<SimplePlayerMovement>() != null) 
        {
            return;
        }
        if (other.isTrigger && other.GetComponent<DestructibleObstacle>() == null)
        {
            return;
        }
        DestructibleObstacle obstacle = other.GetComponent<DestructibleObstacle>();
        if (obstacle != null)
        {
            _soundPlayer.PlayHitSound();
            obstacle.DestroyObstacle();
        }
        Dispose();
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.collider.GetComponentInParent<SimplePlayerMovement>() != null)
        {
            return;   
        }
        DestructibleObstacle obstacle = collision.gameObject.GetComponent<DestructibleObstacle>();
        if (obstacle != null)
        {
            _soundPlayer.PlayHitSound();
            obstacle.DestroyObstacle();
        }
        Dispose();
    }
}
