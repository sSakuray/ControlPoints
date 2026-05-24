using UnityEngine;
using Zenject;

public class SimplePlayerMovement : MonoBehaviour
{
    public float moveSpeed = 5f;
    private Rigidbody2D _rb;
    private Vector2 _input;

    [Inject]
    public void Construct(Rigidbody2D rb)
    {
        _rb = rb;
        _rb.isKinematic = false;
        _rb.constraints = RigidbodyConstraints2D.FreezeRotation;
    }

    private void Update()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");
        _input = new Vector2(h, v).normalized;
    }

    private void FixedUpdate()
    {
        if (_rb == null)
        {
            return;
        }
        _rb.linearVelocity = new Vector2(_input.x * moveSpeed, _input.y * moveSpeed);
    }
}
