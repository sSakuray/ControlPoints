using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class PlayerMovement : MonoBehaviour
{
    [SerializeField] private float speed = 5f;
    private PlayerInputHandler _input;
    private Rigidbody2D _rb;
    private bool _canMove = true;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
    }

    public void Initialize(PlayerInputHandler input)
    {
        _input = input;
    }

    public void SetCanMove(bool canMove)
    {
        _canMove = canMove;
        if (!_canMove && _rb != null)
        {
            _rb.linearVelocity = Vector2.zero;
        }
    }

    private void FixedUpdate()
    {
        if (_input == null || !_canMove)
        {
            return;
        }

        Vector2 moveDir = _input.MoveInput;
        _rb.linearVelocity = moveDir * speed;
    }
}
