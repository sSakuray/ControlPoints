using System;
using UnityEngine;
using UnityEngine.Advertisements;

namespace FlappyComet.Advertising
{
    public enum RewardedResult { Completed, Skipped, Failed }

    public sealed class AdsService : MonoBehaviour, IUnityAdsInitializationListener, IUnityAdsLoadListener, IUnityAdsShowListener
    {
        public static AdsService Instance { get; private set; }

        [Header("Game IDs")]
        [SerializeField] private string androidGameId = "800416753";
        [SerializeField] private string iosGameId = "800416765";
        [SerializeField] private bool testMode = true;

        [Header("Placement IDs")]
        [SerializeField] private string androidBannerId = "BP_Banner_Android";
        [SerializeField] private string iosBannerId = "BP_Banner_iOS";
        [SerializeField] private string androidRewardedId = "BP_Rewarded_Android";
        [SerializeField] private string iosRewardedId = "BP_Rewarded_iOS";

        public bool Initialized { get; private set; }
        public bool IsRewardedReady { get; private set; }
        public bool IsShowingRewarded { get; private set; }
        public string Status { get; private set; } = "Инициализация...";
        public event Action Changed;

        private string gameId;
        private string bannerId;
        private string rewardedId;
        private Action<RewardedResult> onRewardedResult;
        private bool bannerWanted;

        private void Awake()
        {
            if (Instance != null && Instance != this) { Destroy(gameObject); return; }
            Instance = this;
            DontDestroyOnLoad(gameObject);

            // Пункт 5: автоматическое определение платформы
#if UNITY_IOS
            gameId = !string.IsNullOrEmpty(iosGameId) ? iosGameId : "800416765";
            bannerId = !string.IsNullOrEmpty(iosBannerId) ? iosBannerId : "BP_Banner_iOS";
            rewardedId = !string.IsNullOrEmpty(iosRewardedId) ? iosRewardedId : "BP_Rewarded_iOS";
#else
            gameId = !string.IsNullOrEmpty(androidGameId) ? androidGameId : "800416753";
            bannerId = !string.IsNullOrEmpty(androidBannerId) ? androidBannerId : "BP_Banner_Android";
            rewardedId = !string.IsNullOrEmpty(androidRewardedId) ? androidRewardedId : "BP_Rewarded_Android";
#endif
            Initialize();
        }

        public void Initialize()
        {
            if (Advertisement.isInitialized)
            {
                OnInitializationComplete();
                return;
            }

            if (Advertisement.isSupported)
            {
                Status = "Подключение к Unity Ads...";
                Changed?.Invoke();

                // GDPR & Privacy Consent (как в методичке для Европы/VPN)
                var gdpr = new MetaData("gdpr");
                gdpr.Set("consent", "true");
                Advertisement.SetMetaData(gdpr);

                var privacy = new MetaData("privacy");
                privacy.Set("consent", "true");
                Advertisement.SetMetaData(privacy);

                Advertisement.Initialize(gameId, testMode, this);
            }
        }

        public void OnInitializationComplete()
        {
            Initialized = true;
            Status = "Загрузка рекламы...";
            LoadBanner();
            LoadRewarded();
            Changed?.Invoke();
        }

        public void OnInitializationFailed(UnityAdsInitializationError error, string message)
        {
            Initialized = false;
            Status = $"Ошибка сети ({error})";
            Changed?.Invoke();
            CancelInvoke(nameof(Initialize));
            Invoke(nameof(Initialize), 5f);
        }

        // ==================== БАННЕР ====================

        public void LoadBanner()
        {
            if (!Advertisement.isInitialized) return;
            Advertisement.Banner.SetPosition(BannerPosition.BOTTOM_CENTER);
            Advertisement.Banner.Load(bannerId, new BannerLoadOptions
            {
                loadCallback = () =>
                {
                    if (bannerWanted) ShowBanner();
                },
                errorCallback = msg =>
                {
                    // Если placement с префиксом BP не найден, пробуем стандартный Banner_Android
                    if (bannerId.StartsWith("BP_"))
                    {
                        bannerId = bannerId.Substring(3);
                        LoadBanner();
                    }
                }
            });
        }

        public void ShowBanner()
        {
            bannerWanted = true;
            if (!Advertisement.isInitialized) return;
            // Пункт 6: баннер внизу экрана по центру
            Advertisement.Banner.SetPosition(BannerPosition.BOTTOM_CENTER);
            Advertisement.Banner.Show(bannerId);
        }

        public void HideBanner()
        {
            bannerWanted = false;
            if (Advertisement.isInitialized)
            {
                Advertisement.Banner.Hide();
            }
        }

        // ==================== REWARDED ====================

        public void LoadRewarded()
        {
            if (!Advertisement.isInitialized) return;
            Advertisement.Load(rewardedId, this);
        }

        public void ShowRewarded(Action<RewardedResult> onResult)
        {
            if (!IsRewardedReady)
            {
                onResult?.Invoke(RewardedResult.Failed);
                return;
            }

            IsShowingRewarded = true;
            onRewardedResult = onResult;
            Changed?.Invoke();

            Advertisement.Show(rewardedId, this);
        }

        public void OnUnityAdsAdLoaded(string placementId)
        {
            if (placementId == rewardedId)
            {
                IsRewardedReady = true;
                Status = "Готово";
                Changed?.Invoke();
            }
        }

        public void OnUnityAdsFailedToLoad(string placementId, UnityAdsLoadError error, string message)
        {
            if (placementId == rewardedId)
            {
                // Если placement с префиксом BP_ не найден в дашборде, пробуем стандартный Rewarded_Android
                if (rewardedId.StartsWith("BP_"))
                {
                    rewardedId = rewardedId.Substring(3);
                    LoadRewarded();
                    return;
                }

                IsRewardedReady = false;
                Status = $"Ошибка видео: {error}";
                Changed?.Invoke();
                CancelInvoke(nameof(LoadRewarded));
                Invoke(nameof(LoadRewarded), 5f);
            }
        }

        public void OnUnityAdsShowComplete(string placementId, UnityAdsShowCompletionState showCompletionState)
        {
            IsShowingRewarded = false;
            IsRewardedReady = false;

            if (placementId == rewardedId)
            {
                var result = showCompletionState == UnityAdsShowCompletionState.COMPLETED
                    ? RewardedResult.Completed
                    : RewardedResult.Skipped;

                onRewardedResult?.Invoke(result);
                onRewardedResult = null;

                LoadRewarded();
            }

            Changed?.Invoke();
        }

        public void OnUnityAdsShowFailure(string placementId, UnityAdsShowError error, string message)
        {
            IsShowingRewarded = false;
            IsRewardedReady = false;

            onRewardedResult?.Invoke(RewardedResult.Failed);
            onRewardedResult = null;

            LoadRewarded();
            Changed?.Invoke();
        }

        public void OnUnityAdsShowStart(string placementId) { }
        public void OnUnityAdsShowClick(string placementId) { }
    }
}
