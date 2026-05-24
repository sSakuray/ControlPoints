using Zenject;

public class UISwitcher
{
    private IUIState _currentState;

    [Inject]
    public UISwitcher() {}

    public IUIState CurrentState { get { return _currentState; } }

    public void ChangeState(IUIState newState)
    {
        if (_currentState == newState) 
        {
            return;
        }
        if (_currentState != null) 
        {
            _currentState.Exit();
        }
        _currentState = newState;
        if (_currentState != null) 
        {
            _currentState.Enter();
        }
    }
}
