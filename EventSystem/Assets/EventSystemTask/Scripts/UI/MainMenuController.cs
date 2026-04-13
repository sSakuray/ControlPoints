using deVoid.Utils;
using UnityEngine;

public class MainMenuController : UIController
{
    private MainMenuView _view;
    private GameEventSO _onResetEvent;

    public MainMenuController(MainMenuView view, UISwitcher switcher, GameEventSO onResetEvent)
    {
        _view = view;
        _switcher = switcher;
        _onResetEvent = onResetEvent;

        _view.Initialize(switcher.ResourcePool);

        Signals.Get<ResetResourcesSignal>().AddListener(OnResetSignal);
    }

    private void OnResetSignal()
    {
        _switcher.ResourcePool.Reset();

        if (_onResetEvent != null)
        {
            _onResetEvent.Notify();
        }

        _view.UpdateResourceDisplay();
    }

    public override void Enter()
    {
        _view.Show();
        _view.UpdateResourceDisplay();
    }

    public override void Exit()
    {
        _view.Hide();
    }

    public void Cleanup()
    {
        Signals.Get<ResetResourcesSignal>().RemoveListener(OnResetSignal);
    }
}
