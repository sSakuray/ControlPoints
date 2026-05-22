using System;

public class MainScreenController : IUIState
{
    private readonly MainScreenView _view;
    private readonly Action _onOpenPanelRequested;

    public MainScreenController(MainScreenView view, Action onOpenPanelRequested)
    {
        _view = view;
        _onOpenPanelRequested = onOpenPanelRequested;
    }

    public void Enter()
    {
        _view.Show();
        _view.SetInteractable(true);
        _view.Subscribe(OnOpenClicked);
    }

    public void Exit()
    {
        _view.Unsubscribe(OnOpenClicked);
        _view.SetInteractable(false);
    }

    private void OnOpenClicked()
    {
        _onOpenPanelRequested?.Invoke();
    }
}
