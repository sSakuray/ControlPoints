using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using System.Collections;
using TMPro;

public class ClickerGame : MonoBehaviour
{
    [Header("UI")]
    public TextMeshProUGUI scoreText;
    public TextMeshProUGUI recordText;
    public Button clickButton;
    public Button manualSaveButton;

    [Header("Server")]
    public string serverUrl = "http://localhost:3000";
    private int score = 0;
    private string userUid = "";

    void Start()
    {
        if (clickButton) 
        {
            clickButton.onClick.AddListener(OnClickButton);
        }
        if (manualSaveButton) 
        {
            manualSaveButton.onClick.AddListener(ManualSave);
        }
        
        string savedUid = PlayerPrefs.GetString("userUID", "");
        if (!string.IsNullOrEmpty(savedUid)) 
        {
            InitWithUser(savedUid);
        }
        UpdateScoreUI();
    }

    public void InitWithUser(string uid)
    {
        userUid = uid;
        score = 0;
        UpdateScoreUI();
        if (!string.IsNullOrEmpty(userUid)) 
        {
            StartCoroutine(LoadScore());
        }
    }

    public void OnClickButton()
    {
        score++;
        UpdateScoreUI();
        if (score % 10 == 0) 
        {
            StartCoroutine(SaveScore());
        }
    }

    void UpdateScoreUI()
    {
        if (scoreText) 
        {
            scoreText.text = "Счёт: " + score;
        }
    }

    IEnumerator LoadScore()
    {
        using (UnityWebRequest req = UnityWebRequest.Get(serverUrl + "/getscore?uid=" + userUid))
        {
            yield return req.SendWebRequest();
            if (req.result == UnityWebRequest.Result.Success)
            {
                ScoreResponse data = JsonUtility.FromJson<ScoreResponse>(req.downloadHandler.text);
                if (recordText) 
                {
                    recordText.text = "Рекорд: " + data.score;
                }
            }
        }
    }

    IEnumerator SaveScore()
    {
        if (string.IsNullOrEmpty(userUid)) 
        {
            yield break;
        }
        string json = "{\"uid\":\"" + userUid + "\",\"score\":" + score + "}";
        using (UnityWebRequest req = new UnityWebRequest(serverUrl + "/save", "POST"))
        {
            req.uploadHandler = new UploadHandlerRaw(System.Text.Encoding.UTF8.GetBytes(json));
            req.downloadHandler = new DownloadHandlerBuffer();
            req.SetRequestHeader("Content-Type", "application/json");
            yield return req.SendWebRequest();
        }
    }

    public void ManualSave() { StartCoroutine(SaveScore()); }

    [System.Serializable] class ScoreResponse { public int score; }
}
