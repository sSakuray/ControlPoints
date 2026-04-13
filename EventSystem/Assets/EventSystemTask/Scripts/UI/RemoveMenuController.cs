using deVoid.Utils;
using UnityEngine;

public class RemoveMenuController : UIController
{
    private RemoveMenuView _view;
    private GameEventSO _onRemoveEvent;

    public RemoveMenuController(RemoveMenuView view, UISwitcher switcher, GameEventSO onRemoveEvent)
    {
        _view = view;
        _switcher = switcher;
        _onRemoveEvent = onRemoveEvent;

        _view.Initialize();

        Signals.Get<RemoveResourceSignal>().AddListener(OnRemoveResourceSignal);
    }

    private void OnRemoveResourceSignal(ResourceType type, int amount)
    {
        _switcher.ResourcePool.Remove(type, amount);

        if (_onRemoveEvent != null)
        {
            _onRemoveEvent.Notify();
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
        Signals.Get<RemoveResourceSignal>().RemoveListener(OnRemoveResourceSignal);
    }
}
