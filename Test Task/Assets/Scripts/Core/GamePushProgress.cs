using System;
using GamePush;
using UnityEngine;

namespace FlappyComet.Core
{
    public class GamePushProgress : MonoBehaviour
    {
        private const string BestScoreKey = "FlappyComet_BestScore";
        private const string PlayerIdKey = "FlappyComet_PlayerId";
        private const float RetryDelay = 12f;

        private enum Request
        {
            None,
            Load,
            Save,
            Login
        }

        public static GamePushProgress Instance { get; private set; }
        public int PlayerId { get; private set; }
        public int BestScore { get; private set; }
        public bool HasProfile { get; private set; }
        public bool IsLoggedIn { get; private set; }
        public bool CanLogin => HasProfile && !IsLoggedIn && request == Request.None;
        public string Status { get; private set; } = "Connecting to GamePush";

        public event Action OnProgressChanged;
        public event Action OnProfileChanged;

        private bool sdkReady;
        private bool cloudLoaded;
        private int cloudScore;
        private float nextRequestTime;
        private Request request;

        private string ScoreKey => GetScoreKey(PlayerId);

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void Create()
        {
            Instance = new GameObject("GamePush Progress").AddComponent<GamePushProgress>();
            DontDestroyOnLoad(Instance.gameObject);
        }

        private void Awake()
        {
            PlayerId = PlayerPrefs.GetInt(PlayerIdKey);
            BestScore = PlayerPrefs.GetInt(ScoreKey);
        }

        private void OnEnable()
        {
            GP_Init.OnReady += OnSdkReady;
            GP_Init.OnError += OnSdkError;
            GP_Player.OnPlayerChange += OnPlayerChanged;
            GP_Player.OnLoadComplete += OnCloudLoaded;
            GP_Player.OnLoadError += OnCloudLoadError;
            GP_Player.OnSyncComplete += OnCloudSaved;
            GP_Player.OnSyncError += OnCloudSaveError;
            GP_Player.OnLoginComplete += OnLoginComplete;
            GP_Player.OnLoginError += OnLoginError;
        }

        private void Start()
        {
            if (GP_Init.isReady)
            {
                OnSdkReady();
            }
        }

        private void OnDisable()
        {
            GP_Init.OnReady -= OnSdkReady;
            GP_Init.OnError -= OnSdkError;
            GP_Player.OnPlayerChange -= OnPlayerChanged;
            GP_Player.OnLoadComplete -= OnCloudLoaded;
            GP_Player.OnLoadError -= OnCloudLoadError;
            GP_Player.OnSyncComplete -= OnCloudSaved;
            GP_Player.OnSyncError -= OnCloudSaveError;
            GP_Player.OnLoginComplete -= OnLoginComplete;
            GP_Player.OnLoginError -= OnLoginError;
        }

        private void Update()
        {
            if (!sdkReady || request != Request.None || Time.unscaledTime < nextRequestTime)
            {
                return;
            }

            if (!cloudLoaded)
            {
                request = Request.Load;
                SetStatus("Loading cloud record");
                GP_Player.Load();
            }
            else if (BestScore > cloudScore)
            {
                request = Request.Save;
                SetStatus("Saving cloud record");
                GP_Player.SetScore(BestScore);
                GP_Player.Sync(SyncStorageType.cloud);
            }
        }

        public void RecordScore(int score)
        {
            if (score > BestScore)
            {
                SaveLocal(score);
                if (cloudLoaded && request == Request.None)
                {
                    SetStatus("Local record queued");
                }
            }
        }

        public void Login()
        {
            if (!CanLogin)
            {
                return;
            }

            request = Request.Login;
            SetStatus("Waiting for sign-in");
            GP_Player.Login();
        }

        private void OnSdkReady()
        {
            if (sdkReady)
            {
                return;
            }

#if UNITY_WEBGL && !UNITY_EDITOR
            sdkReady = true;
            GP_Game.GameReady();
            BindPlayer();
#else
            SetStatus("Local save");
#endif
        }

        private void OnSdkError()
        {
            SetStatus("GamePush unavailable - local save");
        }

        private void OnPlayerChanged()
        {
            if (sdkReady && request == Request.None)
            {
                BindPlayer();
            }
        }

        private void OnLoginComplete()
        {
            if (request != Request.Login)
            {
                return;
            }

            request = Request.None;
            BindPlayer(BestScore);
            cloudLoaded = false;
            nextRequestTime = 0f;
            SetStatus("Loading cloud record");
        }

        private void OnLoginError()
        {
            if (request == Request.Login)
            {
                request = Request.None;
                SetStatus("Sign-in unavailable - try again");
            }
        }

        private void OnCloudLoaded()
        {
            if (request != Request.Load)
            {
                return;
            }

            request = Request.None;
            BindPlayer();
            if (!HasProfile)
            {
                RetryLater();
                return;
            }

            cloudLoaded = true;
            ApplyCloudScore();
        }

        private void OnCloudSaved()
        {
            if (request != Request.Save)
            {
                return;
            }

            request = Request.None;
            nextRequestTime = Time.unscaledTime + RetryDelay;
            BindPlayer();
            if (cloudLoaded)
            {
                ApplyCloudScore();
            }
        }

        private void ApplyCloudScore()
        {
            cloudScore = Mathf.FloorToInt(GP_Player.GetScore());
            if (cloudScore > BestScore)
            {
                SaveLocal(cloudScore);
                OnProgressChanged?.Invoke();
            }

            SetStatus(BestScore > cloudScore ? "Local record queued" : "Cloud saved");
        }

        private void OnCloudLoadError()
        {
            if (request == Request.Load)
            {
                RetryLater();
            }
        }

        private void OnCloudSaveError()
        {
            if (request == Request.Save)
            {
                RetryLater();
            }
        }

        private void RetryLater()
        {
            request = Request.None;
            cloudLoaded = false;
            nextRequestTime = Time.unscaledTime + RetryDelay;
            SetStatus("Local save - cloud retry pending");
        }

        private void BindPlayer(int guestScore = 0)
        {
            int id = GP_Player.GetID();
            if (id <= 0)
            {
                if (HasProfile)
                {
                    HasProfile = false;
                    IsLoggedIn = false;
                    OnProfileChanged?.Invoke();
                }
                cloudLoaded = false;
                return;
            }

            bool loggedIn = GP_Player.IsLoggedIn();
            if (id != PlayerId)
            {
                bool firstProfile = PlayerId == 0;
                int localScore = firstProfile ? BestScore : guestScore;
                PlayerId = id;
                PlayerPrefs.SetInt(PlayerIdKey, id);
                if (firstProfile)
                {
                    PlayerPrefs.DeleteKey(BestScoreKey);
                }
                SaveLocal(Mathf.Max(localScore, PlayerPrefs.GetInt(ScoreKey)));
                OnProgressChanged?.Invoke();
                cloudLoaded = false;
                nextRequestTime = 0f;
            }

            HasProfile = true;
            IsLoggedIn = loggedIn;
            OnProfileChanged?.Invoke();
        }

        private void SaveLocal(int score)
        {
            BestScore = score;
            PlayerPrefs.SetInt(ScoreKey, score);
            PlayerPrefs.Save();
        }

        private static string GetScoreKey(int id)
        {
            return id == 0 ? BestScoreKey : $"{BestScoreKey}_{id}";
        }

        private void SetStatus(string status)
        {
            Status = status;
            OnProfileChanged?.Invoke();
        }
    }
}
