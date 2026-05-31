using Fusion;
using UnityEngine;

public class PlayerController : NetworkBehaviour
{
    [SerializeField] private float _speed = 5f;
    [SerializeField] private SpriteRenderer _spriteRenderer;
    [SerializeField] private Color _hostColor = Color.cyan;
    [SerializeField] private Color _clientColor = Color.green;

    public override void Spawned()
    {
        if (_spriteRenderer == null)
        {
            _spriteRenderer = GetComponent<SpriteRenderer>();
        }

        if (HasInputAuthority && Object.HasStateAuthority)
        {
            _spriteRenderer.color = _hostColor;
        }
        else if (HasInputAuthority)
        {
            _spriteRenderer.color = _clientColor;
        }
    }

    public override void FixedUpdateNetwork()
    {
        if (GetInput(out NetworkInputData input))
        {
            transform.position += (Vector3)(input.Direction * _speed * Runner.DeltaTime);
        }
    }
}
