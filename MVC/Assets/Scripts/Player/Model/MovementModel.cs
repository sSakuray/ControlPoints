using System;
using UnityEngine;

public class MovementModel
{
    public event Action<Vector2> OnPositionChanged;
    public event Action<Vector2> OnDirectionChanged;

    public Vector2 Position { get; private set; }
    public Vector2 Direction { get; private set; }
    public float MoveSpeed { get; private set; }

    public MovementModel(Vector2 startPosition, float moveSpeed)
    {
        Position = startPosition;
        MoveSpeed = moveSpeed;
        Direction = Vector2.zero;
    }

    public void SetDirection(Vector2 direction)
    {
        if (Direction != direction)
        {
            Direction = direction.normalized;
            OnDirectionChanged?.Invoke(Direction);
        }
    }

    public void UpdatePosition(float deltaTime)
    {
        if (Direction.sqrMagnitude > 0.01f)
        {
            Vector2 newPosition = Position + Direction * MoveSpeed * deltaTime;
            SetPosition(newPosition);
        }
    }

    public void SetPosition(Vector2 newPosition)
    {
        if (Position != newPosition)
        {
            Position = newPosition;
            OnPositionChanged?.Invoke(Position);
        }
    }

    public void SetMoveSpeed(float speed)
    {
        MoveSpeed = Mathf.Max(0f, speed);
    }
}
