using System.IO;
using UnityEngine;
using Zenject;

public class JsonSaver : ISaver
{
    private readonly Score _score;
    private readonly string _path;

    [Inject]
    public JsonSaver(Score score, [InjectOptional] string customPath = null)
    {
        _score = score;
        _path = string.IsNullOrEmpty(customPath) ? Path.Combine(Application.persistentDataPath, "score.json") : customPath;
    }

    public void SaveScore(string path = null)
    {
        string p = string.IsNullOrEmpty(path) ? _path : path;
        File.WriteAllText(p, JsonUtility.ToJson(new ScoreData { score = _score.CurrentScore }, true));
    }

    public int LoadScore(string path = null)
    {
        string p = string.IsNullOrEmpty(path) ? _path : path;
        if (File.Exists(p)) return JsonUtility.FromJson<ScoreData>(File.ReadAllText(p)).score;
        return 0;
    }
}

[System.Serializable]
public class ScoreData
{
    public int score;
}
