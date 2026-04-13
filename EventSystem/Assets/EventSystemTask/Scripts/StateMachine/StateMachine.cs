using System;
using System.Collections.Generic;
using UnityEngine;

public enum States
{
    MainMenu,
    AddMenu,
    RemoveMenu
}

public class StateMachine
{
    private Dictionary<States, UIController> _controllers = new Dictionary<States, UIController>();
    private UIController _currentController;
    private States _currentState;

    public States CurrentState => _currentState;
    public event Action<States> OnStateChanged;

    public void RegisterController(States state, UIController controller)
    {
        _controllers[state] = controller;
    }

    public void ChangeState(States newState)
    {
        if (_currentController != null)
        {
            _currentController.Exit();
        }

        if (_controllers.TryGetValue(newState, out UIController controller))
        {
            _currentState = newState;
            _currentController = controller;
            _currentController.Enter();
            OnStateChanged?.Invoke(newState);
        }
    }
}
