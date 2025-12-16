using UnityEngine;

public class CollisionHandler : MonoBehaviour
{
    [Header("Collision Settings")]
    [SerializeField] private string enemyTag = "Enemy";
    [SerializeField] private int defaultDamage = 10;
    [SerializeField] private float damageCooldown = 1f;

    private PlayerController _playerController;
    private float _lastDamageTime;

    public void Initialize(PlayerController playerController)
    {
        _playerController = playerController;
        _lastDamageTime = -damageCooldown;
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        HandleCollision(collision.gameObject);
    }

    private void OnCollisionStay2D(Collision2D collision)
    {
        HandleCollision(collision.gameObject);
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        HandleCollision(other.gameObject);
    }

    private void OnTriggerStay2D(Collider2D other)
    {
        HandleCollision(other.gameObject);
    }

    private void HandleCollision(GameObject other)
    {
        if (_playerController == null)
        {
            return;
        }

        if (other.CompareTag(enemyTag))
        {
            TryApplyDamage(other);
        }
    }

    private void TryApplyDamage(GameObject enemy)
    {
        if (Time.time - _lastDamageTime < damageCooldown)
        {
            return;
        } 

        int damage = defaultDamage;
        var enemyDamage = enemy.GetComponent<EnemyDamage>();
        if (enemyDamage != null)
        {
            damage = enemyDamage.Damage;
        }

        _playerController.ApplyDamage(damage);
        _lastDamageTime = Time.time;
    }
}
