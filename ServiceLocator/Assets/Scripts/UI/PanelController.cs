using System;

public class PanelController : IUIState
{
    private readonly PanelView _view;
    private readonly Action _onCloseRequested;
    private readonly Score _score;
    private readonly IFadeService _fadeService;
    private readonly ISoundPlayer _soundPlayer;
    private readonly ISaver _saver;

    public PanelController(
        PanelView view, 
        Action onCloseRequested, 
        Score score,
        IFadeService fadeService,
        ISoundPlayer soundPlayer,
        ISaver saver)
    {
        _view = view;
        _onCloseRequested = onCloseRequested;
        _score = score;
        _fadeService = fadeService;
        _soundPlayer = soundPlayer;
        _saver = saver;
    }

    public void Enter()
    {
        _view.Show();
        _view.SubscribeClose(OnCloseClicked);
        _view.SubscribeCollect(OnCollectClicked);
        _view.SetScoreText(_score.CurrentScore.ToString());

        _soundPlayer.PlayOpenSound();
        _fadeService.FadeIn(_view.PanelImage, 0.5f);
    }

    public void Exit()
    {
        _view.UnsubscribeClose(OnCloseClicked);
        _view.UnsubscribeCollect(OnCollectClicked);

        _saver.SaveScore();
        _soundPlayer.PlayCloseSound();
        _fadeService.FadeOut(_view.PanelImage, 0.5f);
    }

    private void OnCloseClicked()
    {
        _onCloseRequested.Invoke();
    }

    private void OnCollectClicked()
    {
        _score.AddScore(1);
        _view.SetScoreText(_score.CurrentScore.ToString());
    }
}

