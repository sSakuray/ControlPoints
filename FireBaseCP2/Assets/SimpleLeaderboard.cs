using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Firebase;
using Firebase.Database;
using System.Collections.Generic;
using System.Linq;

public class SimpleLeaderboard : MonoBehaviour
{
    public TextMeshProUGUI scoreText;
    public Button clickButton;
    public Button saveButton;
    public Button leaderboardButton;
    public Button closeButton;
    public GameObject leaderboardPanel;
    public Transform leaderboardContent;
    public GameObject leaderboardEntryPrefab;

    private int currentScore = 0;
    private DatabaseReference db;
    private string playerId;

    void Start()
    {
        leaderboardPanel.SetActive(false);

        playerId = PlayerPrefs.GetString("PlayerID", System.Guid.NewGuid().ToString());
        PlayerPrefs.SetString("PlayerID", playerId);

        FirebaseApp.CheckAndFixDependenciesAsync().ContinueWith(task =>
        {
            if (task.Result == DependencyStatus.Available)
            {
                db = FirebaseDatabase.DefaultInstance.RootReference;
            }
        });

        clickButton.onClick.AddListener(() =>
        {
            currentScore++;
            scoreText.text = $"Очки: {currentScore}";
        });

        saveButton.onClick.AddListener(() => SaveScore());
        leaderboardButton.onClick.AddListener(() => ShowLeaderboard());
        closeButton.onClick.AddListener(() => leaderboardPanel.SetActive(false));
    }

    async void SaveScore()
    {
        if (db == null)
        {
            return;
        }

        saveButton.interactable = false;

        string playerName = $"Игрок_{playerId.Substring(0, 5)}";

        try
        {
            await db.Child("leaderboard").Child(playerId).SetRawJsonValueAsync(
                $"{{\"name\":\"{playerName}\",\"score\":{currentScore}}}"
            );
        }
        catch (System.Exception e)
        {
            Debug.LogError(e.Message);
        }

        saveButton.interactable = true;
    }

    async void ShowLeaderboard()
    {
        if (db == null)
        {
            return;
        }

        leaderboardPanel.SetActive(true);

        foreach (Transform child in leaderboardContent)
        {
            Destroy(child.gameObject);
        }

        try
        {
            DataSnapshot snapshot = await db.Child("leaderboard")
                .OrderByChild("score")
                .LimitToLast(10)
                .GetValueAsync();

            List<(string name, int score)> players = new List<(string, int)>();

            foreach (DataSnapshot child in snapshot.Children)
            {
                string name = child.Child("name").Value?.ToString() ?? "Аноним";
                int score = int.Parse(child.Child("score").Value?.ToString() ?? "0");
                players.Add((name, score));
            }

            players = players.OrderByDescending(p => p.score).ToList();

            int rank = 1;
            foreach (var p in players)
            {
                GameObject entry = Instantiate(leaderboardEntryPrefab, leaderboardContent);
                entry.transform.localPosition = Vector3.zero;
                entry.transform.localScale = Vector3.one;

                Text entryText = entry.GetComponentInChildren<Text>();
                if (entryText != null)
                {
                    entryText.text = $"{rank}. {p.name} — {p.score}";
                }

                rank++;
            }
        }
        catch (System.Exception e)
        {
            Debug.LogError(e.Message);
        }
    }
}