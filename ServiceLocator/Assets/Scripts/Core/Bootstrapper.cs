using UnityEngine;

public class Bootstrapper : MonoBehaviour
{
    [SerializeField] private MainScreenView mainScreenView;
    [SerializeField] private PanelView panelView;
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private AudioClip openClip;
    [SerializeField] private AudioClip closeClip;
    [SerializeField] private bool useJsonSaver = true;

    private ServiceLocator _serviceLocator;
    private UISwitcher _uiSwitcher;
    private Score _score;
    private IUIState _mainScreenState;
    private IUIState _panelState;

    private void Start()
    {
        Initialize();
    }

    private void Initialize()
    {
        _score = new Score();

        _serviceLocator = new ServiceLocator(audioSource, openClip, closeClip, _score, useJsonSaver, null);

        ISaver activeSaver = _serviceLocator.GetService<ISaver>();
        int loadedScore = activeSaver.LoadScore();
        _score.SetScore(loadedScore);

        mainScreenView.Show();
        mainScreenView.SetInteractable(true);
        panelView.Hide();

        _uiSwitcher = new UISwitcher();

        _mainScreenState = new MainScreenController(mainScreenView,onOpenPanelRequested: () => _uiSwitcher.ChangeState(_panelState));

        _panelState = new PanelController(
            panelView,
            onCloseRequested: () => _uiSwitcher.ChangeState(_mainScreenState),
            _score,
            _serviceLocator.GetService<IFadeService>(),
            _serviceLocator.GetService<ISoundPlayer>(),
            _serviceLocator.GetService<ISaver>()
        );

        _uiSwitcher.ChangeState(_mainScreenState);
    }
}
