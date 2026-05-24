using Zenject;

public class MainScreenController : IUIState
{
    private readonly MainScreenView _view;
    private readonly UISwitcher _uiSwitcher;
    private readonly LazyInject<PanelController> _panelController;

    [Inject]
    public MainScreenController(MainScreenView view, UISwitcher uiSwitcher, LazyInject<PanelController> panelController)
    {
        _view = view;
        _uiSwitcher = uiSwitcher;
        _panelController = panelController;
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
        _uiSwitcher.ChangeState(_panelController.Value);
    }
}
