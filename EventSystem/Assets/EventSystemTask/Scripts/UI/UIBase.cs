using UnityEngine;

public abstract class UIController
{
    protected UISwitcher _switcher;

    public UISwitcher Switcher
    {
        get => _switcher;
        set => _switcher = value;
    }

    public abstract void Enter();
    public abstract void Exit();
}

public class UISwitcher
{
    private StateMachine _stateMachine;
    private ResourcePool _resourcePool;

    public StateMachine StateMachine => _stateMachine;
    public ResourcePool ResourcePool => _resourcePool;

    public UISwitcher(StateMachine stateMachine, ResourcePool resourcePool)
    {
        _stateMachine = stateMachine;
        _resourcePool = resourcePool;
    }

    public void SwitchTo(States state)
    {
        _stateMachine.ChangeState(state);
    }
}
