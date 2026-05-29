using Zenject;

public class UIInitializer : IInitializable
{
    private readonly UISwitcher _uiSwitcher;
    private readonly MainScreenController _mainScreenController;
    private readonly ISaver _saver;
    private readonly Score _score;

    [Inject]
    public UIInitializer(UISwitcher uiSwitcher, MainScreenController mainScreenController, ISaver saver, Score score)
    {
        _uiSwitcher = uiSwitcher;
        _mainScreenController = mainScreenController;
        _saver = saver;
        _score = score;
    }

    public void Initialize()
    {
        _score.SetScore(_saver.LoadScore());
        _uiSwitcher.ChangeState(_mainScreenController);
    }
}
