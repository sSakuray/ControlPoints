using System;

namespace FlappyComet.Core
{
    public interface IGameManager
    {
        GameState CurrentState { get; }
        int CurrentScore { get; }
        int BestScore { get; }

        event Action<GameState> OnStateChanged;
        event Action<int, int> OnScoreChanged;

        void StartGame();
        void AddScore(int amount = 1);
        void GameOver();
        void RestartGame();
    }
}
