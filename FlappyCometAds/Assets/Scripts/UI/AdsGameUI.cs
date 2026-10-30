using FlappyComet.Advertising;
using FlappyComet.Core;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace FlappyComet.UI
{
    public sealed class AdsGameUI : MonoBehaviour
    {
        [Header("UI элементы")]
        [SerializeField] private GameObject endControls;
        [SerializeField] private Button rewardButton;
        [SerializeField] private TMP_Text rewardLabel;
        [SerializeField] private TMP_Text resultLabel;

        public static bool InputBlocked => AdsService.Instance != null && AdsService.Instance.IsShowingRewarded;

        private void Start()
        {
            if (GameManager.Instance != null)
                GameManager.Instance.OnStateChanged += OnStateChanged;

            if (AdsService.Instance != null)
                AdsService.Instance.Changed += Refresh;

            if (GameManager.Instance != null)
                OnStateChanged(GameManager.Instance.CurrentState);
        }

        private void OnDestroy()
        {
            if (GameManager.Instance != null)
                GameManager.Instance.OnStateChanged -= OnStateChanged;

            if (AdsService.Instance != null)
                AdsService.Instance.Changed -= Refresh;
        }

        public void RestartGame()
        {
            if (!InputBlocked && GameManager.Instance != null)
                GameManager.Instance.RestartGame();
        }

        public void WatchRewarded()
        {
            var game = GameManager.Instance;
            if (InputBlocked || game == null || game.RewardedBonusClaimed) return;

            AdsService.Instance.ShowRewarded(outcome =>
            {
                if (outcome == RewardedResult.Completed)
                {
                    game.TryClaimRewardedBonus();
                    if (resultLabel != null) resultLabel.text = "+5 ОЧКОВ ПОЛУЧЕНО!";
                }
                else if (outcome == RewardedResult.Skipped)
                {
                    if (resultLabel != null) resultLabel.text = "Видео пропущено";
                }
                Refresh();
            });
        }

        private void OnStateChanged(GameState state)
        {
            if (AdsService.Instance != null)
            {
                // Скрываем баннер во время полёта, показываем в меню и при GameOver
                if (state == GameState.Playing)
                    AdsService.Instance.HideBanner();
                else
                    AdsService.Instance.ShowBanner();
            }

            Refresh();
        }

        private void Refresh()
        {
            var game = GameManager.Instance;
            var ads = AdsService.Instance;
            if (game == null) return;

            bool isGameOver = game.CurrentState == GameState.GameOver;
            if (endControls != null)
                endControls.SetActive(isGameOver && !InputBlocked);

            if (rewardButton != null && ads != null)
            {
                bool canWatch = ads.IsRewardedReady && !game.RewardedBonusClaimed;
                rewardButton.interactable = canWatch;

                if (rewardLabel != null)
                {
                    rewardLabel.text = game.RewardedBonusClaimed ? "НАГРАДА ПОЛУЧЕНА"
                        : ads.IsRewardedReady ? "СМОТРЕТЬ (+5 ОЧКОВ)" : ads.Status;
                }
            }
        }
    }
}
