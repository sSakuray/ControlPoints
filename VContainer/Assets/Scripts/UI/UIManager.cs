using DG.Tweening;
using FlappyComet.Core;
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.UI;
using VContainer;

namespace FlappyComet.UI
{
    public class UIManager : MonoBehaviour
    {
        [SerializeField] private TMP_Text currentScoreText;
        [SerializeField] private GameObject headerBar;
        [SerializeField] private GameObject readyPanel;
        [SerializeField] private TMP_Text readyPromptText;
        [SerializeField] private GameObject gameOverPanel;
        [SerializeField] private CanvasGroup gameOverCanvasGroup;
        [SerializeField] private TMP_Text finalScoreText;
        [SerializeField] private TMP_Text bestScoreText;
        [SerializeField] private Button restartButton;
        [SerializeField] private float restartInputDelay = 0.5f;

        private IGameManager gameManager;
        private float gameOverTimer = 0f;
        private bool canRestart = false;

        [Inject]
        public void Construct(IGameManager gm)
        {
            gameManager = gm;
        }

        private void Start()
        {
            if (restartButton != null)
            {
                restartButton.onClick.AddListener(OnRestartClicked);
            }

            if (gameOverCanvasGroup == null && gameOverPanel != null)
            {
                gameOverCanvasGroup = gameOverPanel.GetComponent<CanvasGroup>();
                if (gameOverCanvasGroup == null)
                {
                    gameOverCanvasGroup = gameOverPanel.AddComponent<CanvasGroup>();
                }
            }

            if (gameManager != null)
            {
                gameManager.OnStateChanged += HandleStateChanged;
                gameManager.OnScoreChanged += UpdateScoreDisplay;

                UpdateScoreDisplay(gameManager.CurrentScore, gameManager.BestScore);
                HandleStateChanged(gameManager.CurrentState);
            }
        }

        private void OnDestroy()
        {
            if (gameManager != null)
            {
                gameManager.OnStateChanged -= HandleStateChanged;
                gameManager.OnScoreChanged -= UpdateScoreDisplay;
            }
        }

        private void Update()
        {
            if (canRestart)
            {
                gameOverTimer += Time.unscaledDeltaTime;
                if (gameOverTimer >= restartInputDelay)
                {
                    if (CheckRestartInput())
                    {
                        OnRestartClicked();
                    }
                }
            }
        }

        private void HandleStateChanged(GameState state)
        {
            switch (state)
            {
                case GameState.Ready:
                    readyPanel.SetActive(true);
                    gameOverPanel.SetActive(false);
                    headerBar.SetActive(true);

                    readyPromptText.transform.DOKill();
                    readyPromptText.transform.localScale = Vector3.one;
                    readyPromptText.transform.DOScale(1.08f, 0.6f).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine);

                    canRestart = false;
                    break;

                case GameState.Playing:
                    readyPromptText.transform.DOKill();
                    readyPanel.SetActive(false);
                    gameOverPanel.SetActive(false);
                    headerBar.SetActive(true);

                    canRestart = false;
                    break;

                case GameState.GameOver:
                    readyPromptText.transform.DOKill();
                    readyPanel.SetActive(false);
                    gameOverPanel.SetActive(true);

                    gameOverCanvasGroup.alpha = 0f;
                    gameOverCanvasGroup.DOKill();
                    gameOverCanvasGroup.DOFade(1f, 0.35f).SetUpdate(true);

                    finalScoreText.transform.DOKill();
                    finalScoreText.transform.localScale = Vector3.zero;
                    finalScoreText.transform.DOScale(Vector3.one, 0.45f).SetEase(Ease.OutBack).SetUpdate(true);

                    gameOverTimer = 0f;
                    canRestart = true;
                    break;
            }
        }

        private void UpdateScoreDisplay(int current, int best)
        {
            if (currentScoreText != null)
            {
                currentScoreText.text = current.ToString();
                if (current > 0)
                {
                    currentScoreText.transform.DOKill();
                    currentScoreText.transform.localScale = Vector3.one;
                    currentScoreText.transform.DOPunchScale(Vector3.one * 0.4f, 0.22f, 8, 1f);
                }
            }

            if (finalScoreText != null)
            {
                finalScoreText.text = $"SCORE: {current}";
            }

            if (bestScoreText != null)
            {
                bestScoreText.text = $"BEST: {best}";
            }
        }

        private void OnRestartClicked()
        {
            if (gameManager != null)
            {
                gameManager.RestartGame();
            }
        }

        private bool CheckRestartInput()
        {
            if (Keyboard.current != null && Keyboard.current.spaceKey.wasPressedThisFrame)
            {
                return true;
            }

            if (Mouse.current != null && Mouse.current.leftButton.wasPressedThisFrame)
            {
                return true;
            }

            return false;
        }
    }
}