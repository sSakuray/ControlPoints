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
        if (hudPanel != null) hudPanel.SetActive(false);
        if (messageText != null) messageText.gameObject.SetActive(false);
        HandleHealthChanged(0);
    }

    private void Update()
    {
        if (_messageTimer > 0)
        {
            _messageTimer -= Time.deltaTime;
            if (_messageTimer <= 0 && messageText != null)
            {
                messageText.gameObject.SetActive(false);
            }
        }
    }

    private void HandleMatchState(MatchStateMessage msg)
    {
        bool showHUD = msg.matchState != MatchState.WaitingForPlayers;
        if (hudPanel != null) hudPanel.SetActive(showHUD);

        if (scoreText != null)
        {
            scoreText.text = $"<color=#3388FF>Blue {msg.teamAScore}</color>  :  <color=#FF5555>{msg.teamBScore} Red</color>";
        }

        if (roundText != null)
        {
            roundText.text = $"Round {msg.currentRound} / {GameNetworkManager.RoundsToWin}";
        }

        if (msg.matchState == MatchState.RoundEnd && msg.winnerTeam >= 0)
        {
            string winner = msg.winnerTeam == 0
                ? "<color=#3388FF>Blue Team</color>"
                : "<color=#FF5555>Red Team</color>";
            ShowMessage($"{winner} wins the round!");
        }
        else if (msg.matchState == MatchState.MatchEnd && msg.winnerTeam >= 0)
        {
            string winner = msg.winnerTeam == 0
                ? "<color=#3388FF>BLUE TEAM</color>"
                : "<color=#FF5555>RED TEAM</color>";
            ShowMessage($"{winner} WINS THE MATCH!", 30f);
        }
    }

    private void HandleHealthChanged(int hits)
    {
        if (healthText == null) return;

        int remaining = PlayerHealth.MaxHits - hits;
        string hp = "";
        for (int i = 0; i < PlayerHealth.MaxHits; i++)
        {
            hp += i < remaining ? "<color=#FF4444>♥</color>" : "<color=#555555>♡</color>";
        }
        healthText.text = hp;
    }

    private void ShowMessage(string text, float duration = 3f)
    {
        if (messageText == null) return;
        messageText.text = text;
        messageText.gameObject.SetActive(true);
        _messageTimer = duration;
    }
}
