using UnityEngine;

public class PlayerPrefsSaver : ISaver
{
    private readonly Score _score;
    private const string ScoreKey = "SavedScore";

    public PlayerPrefsSaver(Score score)
    {
        _score = score;
    }

    public void SaveScore(string path = null)
    {
        PlayerPrefs.SetInt(ScoreKey, _score.CurrentScore);
        PlayerPrefs.Save();
    }

    public int LoadScore(string path = null)
    {
        return PlayerPrefs.GetInt(ScoreKey, 0);
    }
}
