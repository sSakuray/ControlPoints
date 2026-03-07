using UnityEngine;

public class StateMachine
{
    private BaseState _currentState;
    public BaseState CurrentState => _currentState;

    public void Initialize(BaseState startingState)
    {
        _currentState = startingState;
        _currentState?.Enter();
    }

    public void ChangeState(BaseState newState)
    {
        _currentState?.Exit();
        _currentState = newState;
        _currentState?.Enter();
    }

    public void Update()
    {
        _currentState?.Update();
    }
}
