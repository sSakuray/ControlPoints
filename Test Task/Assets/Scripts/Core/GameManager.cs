using System;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace FlappyComet.Core
{
    public enum GameState
    {
        Ready,
        Playing,
        GameOver
    }

    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance { get; private set; }

        public GameState CurrentState { get; private set; } = GameState.Ready;
        public int CurrentScore { get; private set; } = 0;
        public int BestScore => GamePushProgress.Instance.BestScore;

        public event Action<GameState> OnStateChanged;
        public event Action<int, int> OnScoreChanged;

        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }

            Instance = this;
            GamePushProgress.Instance.OnProgressChanged += UpdateBestScore;
        }

        private void OnDestroy()
        {
            if (GamePushProgress.Instance != null)
            {
                GamePushProgress.Instance.OnProgressChanged -= UpdateBestScore;
            }
        }

        private void Start()
        {
            SetState(GameState.Ready);
            OnScoreChanged?.Invoke(CurrentScore, BestScore);
        }

        public void SetState(GameState newState)
        {
            CurrentState = newState;
            OnStateChanged?.Invoke(newState);
        }

        public void StartGame()
        {
            if (CurrentState == GameState.Ready)
            {
                CurrentScore = 0;
                SetState(GameState.Playing);
                OnScoreChanged?.Invoke(CurrentScore, BestScore);
            }
        }

        public void AddScore(int amount = 1)
        {
            if (CurrentState != GameState.Playing)
            {
                return;
            }

            CurrentScore += amount;
            GamePushProgress.Instance.RecordScore(CurrentScore);

            OnScoreChanged?.Invoke(CurrentScore, BestScore);
        }

        public void GameOver()
        {
            if (CurrentState != GameState.Playing)
            {
                return;
            }

            SetState(GameState.GameOver);
        }

        public void RestartGame()
        {
            Time.timeScale = 1f;
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }

        private void UpdateBestScore()
        {
            OnScoreChanged?.Invoke(CurrentScore, BestScore);
        }
    }
}
