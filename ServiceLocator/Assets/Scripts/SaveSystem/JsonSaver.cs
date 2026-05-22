using System;
using System.IO;
using UnityEngine;

[Serializable]
public class ScoreData
{
    public int score;
}

public class JsonSaver : ISaver
{
    private readonly Score _score;
    private readonly string _path;

    public JsonSaver(Score score, string customPath = null)
    {
        _score = score;
        _path = string.IsNullOrEmpty(customPath) 
            ? Path.Combine(Application.persistentDataPath, "score.json") 
            : customPath;
    }

    public void SaveScore(string path = null)
    {
        string p = string.IsNullOrEmpty(path) ? _path : path;
        ScoreData data = new ScoreData { score = _score.CurrentScore };
        string json = JsonUtility.ToJson(data, true);
        File.WriteAllText(p, json);
    }

    public int LoadScore(string path = null)
    {
        string p = string.IsNullOrEmpty(path) ? _path : path;
        if (File.Exists(p))
        {
            string json = File.ReadAllText(p);
            ScoreData data = JsonUtility.FromJson<ScoreData>(json);
            return data.score;
        }
        return 0;
    }
}
