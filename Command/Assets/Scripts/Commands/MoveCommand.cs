using UnityEngine;

public class MoveCommand : ICommand
{
    private readonly PlayerMover _mover;
    private readonly Vector2 _targetPosition;
    private Vector2 _previousPosition;

    public MoveCommand(PlayerMover mover)
    {
        _mover = mover;
        _targetPosition = InputListener.Instance.LastClickPosition;
    }

    public void Execute()
    {
        _previousPosition = _mover.MoveTo(_targetPosition);
    }

    public void Undo()
    {
        _mover.SetPosition(_previousPosition);
    }
}
