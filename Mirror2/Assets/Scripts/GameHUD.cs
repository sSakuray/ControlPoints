using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameHUD : MonoBehaviour
{
    public TextMeshProUGUI healthText;
    public TextMeshProUGUI scoreText;
    public TextMeshProUGUI roundText;
    public TextMeshProUGUI messageText;
    public GameObject hudPanel;

    public static Action<MatchStateMessage> OnMatchStateUpdated;
    public static Action<int> OnLocalHealthChanged;

    private float _messageTimer;

    private void OnEnable()
    {
        OnMatchStateUpdated += HandleMatchState;
        OnLocalHealthChanged += HandleHealthChanged;
    }

    private void OnDisable()
    {
        OnMatchStateUpdated -= HandleMatchState;
        OnLocalHealthChanged -= HandleHealthChanged;
    }

    private void Start()
    {
        hudPanel.SetActive(false);
        messageText.gameObject.SetActive(false);
        HandleHealthChanged(0);
    }

    private void Update()
    {
        if (_messageTimer > 0)
        {
            _messageTimer -= Time.deltaTime;
            if (_messageTimer <= 0)
            {
                messageText.gameObject.SetActive(false);
            }
        }
    }

    private void HandleMatchState(MatchStateMessage msg)
    {
        bool showHUD = msg.matchState != MatchState.WaitingForPlayers;
        hudPanel.SetActive(showHUD);

        scoreText.text = $"Blue {msg.teamAScore}  :  {msg.teamBScore} Red";
        roundText.text = $"Round {msg.currentRound} / {GameNetworkManager.RoundsToWin}";

        if (msg.matchState == MatchState.RoundEnd)
        {
            if (msg.winnerTeam >= 0)
            {
                string winner = msg.winnerTeam == 0 ? "Blue Team" : "Red Team";
                ShowMessage($"{winner} wins the round!");
            }
        }
        else if (msg.matchState == MatchState.MatchEnd)
        {
            if (msg.winnerTeam >= 0)
            {
                string winner = msg.winnerTeam == 0 ? "BLUE TEAM" : "RED TEAM";
                ShowMessage($"{winner} WINS THE MATCH!", 30f);
            }
        }
    }

    private void HandleHealthChanged(int hits)
    {
        int remaining = PlayerHealth.MaxHits - hits;
        string hp = "";
        for (int i = 0; i < PlayerHealth.MaxHits; i++)
        {
            if (i < remaining)
            {
                hp += "♥";
            }
            else
            {
                hp += "♡";
            }
        }
        healthText.text = hp;
    }

    private void ShowMessage(string text, float duration = 3f)
    {
        messageText.text = text;
        messageText.gameObject.SetActive(true);
        _messageTimer = duration;
    }
}
