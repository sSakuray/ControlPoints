using Mirror;
using UnityEngine;

public class Bullet : NetworkBehaviour
{
    public float speed = 10f;
    private Vector2 _direction;
    private NetworkIdentity _ownerIdentity;
    private Rigidbody2D _rb;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
        CircleCollider2D col = GetComponent<CircleCollider2D>();
        col.isTrigger = true;
    }

    public void Init(Vector2 direction, NetworkIdentity owner)
    {
        _direction = direction.normalized;
        _ownerIdentity = owner;
    }

    private void FixedUpdate()
    {
        _rb.linearVelocity = _direction * speed;
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!isServer)
        {
            return;
        }

        NetworkIdentity hitIdentity = other.GetComponent<NetworkIdentity>();
        if (hitIdentity != null && hitIdentity == _ownerIdentity)
        {
            return;
        }

        PlayerHealth health = other.GetComponent<PlayerHealth>();
        if (health != null)
        {
            health.TakeHit();
            NetworkServer.Destroy(gameObject);
            return;
        }

        if (other.CompareTag("Wall"))
        {
            NetworkServer.Destroy(gameObject);
        }
    }
}
