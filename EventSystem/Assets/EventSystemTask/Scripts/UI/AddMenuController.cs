using deVoid.Utils;
using UnityEngine;

public class AddMenuController : UIController
{
    private AddMenuView _view;
    private GameEventSO _onAddEvent;

    public AddMenuController(AddMenuView view, UISwitcher switcher, GameEventSO onAddEvent)
    {
        _view = view;
        _switcher = switcher;
        _onAddEvent = onAddEvent;

        _view.Initialize();

        Signals.Get<AddResourceSignal>().AddListener(OnAddResourceSignal);
    }

    private void OnAddResourceSignal(ResourceType type, int amount)
    {
        _switcher.ResourcePool.Add(type, amount);

        if (_onAddEvent != null)
        {
            _onAddEvent.Notify();
        }

        _view.ResetFields();
    }

    public override void Enter()
    {
        _view.Show();
        _view.ResetFields();
    }

    public override void Exit()
    {
        _view.Hide();
    }

    public void Cleanup()
    {
        Signals.Get<AddResourceSignal>().RemoveListener(OnAddResourceSignal);
    }
}
