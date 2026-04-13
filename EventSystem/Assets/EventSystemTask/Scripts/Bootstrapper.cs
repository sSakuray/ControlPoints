using deVoid.Utils;
using UnityEngine;
using UnityEngine.UI;

public class Bootstrapper : MonoBehaviour
{
    [SerializeField] private Button _mainMenuButton;
    [SerializeField] private Button _addMenuButton;
    [SerializeField] private Button _removeMenuButton;
    [SerializeField] private MainMenuView _mainMenuView;
    [SerializeField] private AddMenuView _addMenuView;
    [SerializeField] private RemoveMenuView _removeMenuView;
    [SerializeField] private GameEventSO _onResetEvent;
    [SerializeField] private GameEventSO _onAddEvent;
    [SerializeField] private GameEventSO _onRemoveEvent;

    private StateMachine _stateMachine;
    private ResourcePool _resourcePool;
    private UISwitcher _uiSwitcher;
    private MainMenuController _mainMenuController;
    private AddMenuController _addMenuController;
    private RemoveMenuController _removeMenuController;

    private void Awake()
    {
        _resourcePool = new ResourcePool();
        _stateMachine = new StateMachine();
        _uiSwitcher = new UISwitcher(_stateMachine, _resourcePool);

        _mainMenuController = new MainMenuController(_mainMenuView, _uiSwitcher, _onResetEvent);
        _addMenuController = new AddMenuController(_addMenuView, _uiSwitcher, _onAddEvent);
        _removeMenuController = new RemoveMenuController(_removeMenuView, _uiSwitcher, _onRemoveEvent);

        _stateMachine.RegisterController(States.MainMenu, _mainMenuController);
        _stateMachine.RegisterController(States.AddMenu, _addMenuController);
        _stateMachine.RegisterController(States.RemoveMenu, _removeMenuController);

        _mainMenuButton.onClick.AddListener(OnMainMenuButtonClick);
        _addMenuButton.onClick.AddListener(OnAddMenuButtonClick);
        _removeMenuButton.onClick.AddListener(OnRemoveMenuButtonClick);

        Signals.Get<MainMenuButtonSignal>().AddListener(OnMainMenuSignal);
        Signals.Get<AddMenuButtonSignal>().AddListener(OnAddMenuSignal);
        Signals.Get<RemoveMenuButtonSignal>().AddListener(OnRemoveMenuSignal);

        _mainMenuView.ResetButton.onClick.AddListener(OnResetButtonClick);
        _addMenuView.AddButton.onClick.AddListener(OnAddButtonClick);
        _removeMenuView.RemoveButton.onClick.AddListener(OnRemoveButtonClick);

        _mainMenuView.Hide();
        _addMenuView.Hide();
        _removeMenuView.Hide();
    }

    private void OnMainMenuButtonClick()
    {
        Signals.Get<MainMenuButtonSignal>().Dispatch();
    }

    private void OnAddMenuButtonClick()
    {
        Signals.Get<AddMenuButtonSignal>().Dispatch();
    }

    private void OnRemoveMenuButtonClick()
    {
        Signals.Get<RemoveMenuButtonSignal>().Dispatch();
    }

    private void OnMainMenuSignal()
    {
        _uiSwitcher.SwitchTo(States.MainMenu);
    }

    private void OnAddMenuSignal()
    {
        _uiSwitcher.SwitchTo(States.AddMenu);
    }

    private void OnRemoveMenuSignal()
    {
        _uiSwitcher.SwitchTo(States.RemoveMenu);
    }

    private void OnResetButtonClick()
    {
        Signals.Get<ResetResourcesSignal>().Dispatch();
    }

    private void OnAddButtonClick()
    {
        ResourceType type = _addMenuView.GetSelectedResourceType();
        int amount = _addMenuView.GetAmount();
        Signals.Get<AddResourceSignal>().Dispatch(type, amount);
    }

    private void OnRemoveButtonClick()
    {
        ResourceType type = _removeMenuView.GetSelectedResourceType();
        int amount = _removeMenuView.GetAmount();
        Signals.Get<RemoveResourceSignal>().Dispatch(type, amount);
    }

    private void OnDestroy()
    {
        Signals.Get<MainMenuButtonSignal>().RemoveListener(OnMainMenuSignal);
        Signals.Get<AddMenuButtonSignal>().RemoveListener(OnAddMenuSignal);
        Signals.Get<RemoveMenuButtonSignal>().RemoveListener(OnRemoveMenuSignal);

        _mainMenuController?.Cleanup();
        _addMenuController?.Cleanup();
        _removeMenuController?.Cleanup();
    }
}
