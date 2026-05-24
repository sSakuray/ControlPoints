using UnityEngine;
using Zenject;

public class DestructibleObstacle : MonoBehaviour
{
    public int debrisCount = 5;
    private GameObject _debrisPrefab;
    private Collider2D _playerCollider;

    [Inject]
    public void Construct([Inject(Id = "DebrisPrefab")] GameObject debrisPrefab, [Inject(Id = "PlayerCollider")] Collider2D playerCollider)
    {
        _debrisPrefab = debrisPrefab;
        _playerCollider = playerCollider;
    }

    public void DestroyObstacle()
    {
        for (int i = 0; i < debrisCount; i++)
        {
            GameObject debris = Instantiate(_debrisPrefab, transform.position + (Vector3)Random.insideUnitCircle * 0.5f, Random.rotation);
            Vector2 dir = (debris.transform.position - transform.position).normalized;
            debris.GetComponent<Rigidbody2D>().AddForce((dir == Vector2.zero ? Random.insideUnitCircle.normalized : dir) * 500f);
            Collider2D debrisCol = debris.GetComponent<Collider2D>();
            if (debrisCol != null && _playerCollider != null)
            {
                Physics2D.IgnoreCollision(debrisCol, _playerCollider);
            }
            Destroy(debris, 3f);
        }
        Destroy(gameObject);
    }
}
