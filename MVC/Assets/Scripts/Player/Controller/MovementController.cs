using UnityEngine;

public class MovementController
{
    private readonly MovementModel _model;
    private readonly PlayerView _view;
    private readonly InputListener _inputListener;

    public MovementModel Model => _model;

    public MovementController(MovementModel model, PlayerView view, InputListener inputListener)
    {
        _model = model;
        _view = view;
        _inputListener = inputListener;

        Initialize();
    }

    private void Initialize()
    {
        _inputListener.OnMovementInput += HandleMovementInput;
        _model.OnPositionChanged += HandlePositionChanged;

        _view.UpdatePosition(_model.Position);
    }

    private void HandleMovementInput(Vector2 input)
    {
        _model.SetDirection(input);
    }

    private void HandlePositionChanged(Vector2 newPosition)
    {
        _view.UpdatePosition(newPosition);
    }

    public void Update(float deltaTime)
    {
        _model.UpdatePosition(deltaTime);
    }


    public void Dispose()
    {
        if (_inputListener != null)
        {
            _inputListener.OnMovementInput -= HandleMovementInput;
        }
        _model.OnPositionChanged -= HandlePositionChanged;
    }
}
