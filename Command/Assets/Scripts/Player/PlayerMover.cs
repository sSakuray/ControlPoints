using UnityEngine;

public class PlayerMover : MonoBehaviour
{
    [SerializeField] private float _moveSpeed = 5f;

    private Vector2? _targetPosition;
    private Vector2 _previousPosition;

    public Vector2 MoveTo(Vector2 target)
    {
        _previousPosition = transform.position;
        _targetPosition = target;
        return _previousPosition;
    }

    public void SetPosition(Vector2 position)
    {
        _targetPosition = null;
        transform.position = position;
    }

    private void Update()
    {
        if (_targetPosition.HasValue)
        {
            transform.position = Vector2.MoveTowards(transform.position, _targetPosition.Value, _moveSpeed * Time.deltaTime);

            if (Vector2.Distance(transform.position, _targetPosition.Value) < 0.01f)
            {
                transform.position = _targetPosition.Value;
                _targetPosition = null;
            }
        }
    }
}
