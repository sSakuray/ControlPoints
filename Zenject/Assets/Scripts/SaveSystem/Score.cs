using Zenject;

public class Score
{
    public int CurrentScore { get; private set; }

    [Inject]
    public Score(int initialScore = 0) { CurrentScore = initialScore; }

    public void AddScore(int amount) { CurrentScore += amount; }
    public void SetScore(int score) { CurrentScore = score; }
}
