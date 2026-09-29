using System;
using Mirror;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LobbyUI : MonoBehaviour
{
    public GameObject lobbyPanel;
    public Button hostButton;
    public Button joinButton;
    public Button stopButton;
    public TMP_InputField ipInputField;
    public TextMeshProUGUI statusText;
    public TextMeshProUGUI playerCountText;

    public static Action<MatchStateMessage> OnMatchStateChanged;

    private NetworkManager _networkManager;

    private void Awake()
    {
        _networkManager = FindFirstObjectByType<NetworkManager>();
    }

    private void OnEnable()
    {
        OnMatchStateChanged += HandleMatchState;

        if (hostButton != null) hostButton.onClick.AddListener(OnHostClicked);
        if (joinButton != null) joinButton.onClick.AddListener(OnJoinClicked);
        if (stopButton != null) stopButton.onClick.AddListener(OnStopClicked);
    }

    private void OnDisable()
    {
        OnMatchStateChanged -= HandleMatchState;

        if (hostButton != null) hostButton.onClick.RemoveListener(OnHostClicked);
        if (joinButton != null) joinButton.onClick.RemoveListener(OnJoinClicked);
        if (stopButton != null) stopButton.onClick.RemoveListener(OnStopClicked);
    }

    private void Start()
    {
        ShowLobby();
    }

    private void OnHostClicked()
    {
        if (_networkManager == null) return;

        _networkManager.StartHost();
        SetStatus("Waiting for opponent...");
        SetLobbyButtonsActive(false);
        if (stopButton != null) stopButton.gameObject.SetActive(true);
    }

    private void OnJoinClicked()
    {
        if (_networkManager == null) return;

        string ip = ipInputField != null ? ipInputField.text.Trim() : "localhost";
        if (string.IsNullOrEmpty(ip)) ip = "localhost";

        _networkManager.networkAddress = ip;
        _networkManager.StartClient();
        SetStatus($"Connecting to {ip}...");
        SetLobbyButtonsActive(false);
        if (stopButton != null) stopButton.gameObject.SetActive(true);
    }

    private void OnStopClicked()
    {
        if (_networkManager == null) return;

        if (NetworkServer.active && NetworkClient.isConnected)
            _networkManager.StopHost();
        else if (NetworkServer.active)
            _networkManager.StopServer();
        else
            _networkManager.StopClient();

        ShowLobby();
    }

    private void HandleMatchState(MatchStateMessage msg)
    {
        if (playerCountText != null)
        {
            playerCountText.text = $"Players: {msg.playerCount}";
        }

        if (msg.matchState == MatchState.WaitingForPlayers)
        {
            if (msg.playerCount > 0)
            {
                SetStatus("Waiting for opponent...");
            }
        }
        else
        {
            // Игра идёт — прячем лобби
            if (lobbyPanel != null) lobbyPanel.SetActive(false);
        }
    }

    public void ShowLobby()
    {
        PlayerController.IsGameActive = false;

        if (lobbyPanel != null) lobbyPanel.SetActive(true);

        SetLobbyButtonsActive(true);
        if (stopButton != null) stopButton.gameObject.SetActive(false);
        SetStatus("Welcome!");
        if (playerCountText != null) playerCountText.text = "Players: 0";
    }

    private void SetStatus(string msg)
    {
        if (statusText != null) statusText.text = msg;
    }

    private void SetLobbyButtonsActive(bool active)
    {
        if (hostButton != null) hostButton.gameObject.SetActive(active);
        if (joinButton != null) joinButton.gameObject.SetActive(active);
        if (ipInputField != null) ipInputField.gameObject.SetActive(active);
    }
}
