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

        hostButton.onClick.AddListener(OnHostClicked);
        joinButton.onClick.AddListener(OnJoinClicked);
        stopButton.onClick.AddListener(OnStopClicked);
    }

    private void OnDisable()
    {
        OnMatchStateChanged -= HandleMatchState;

        hostButton.onClick.RemoveListener(OnHostClicked);
        joinButton.onClick.RemoveListener(OnJoinClicked);
        stopButton.onClick.RemoveListener(OnStopClicked);
    }

    private void Start()
    {
        ShowLobby();
    }

    private void OnHostClicked()
    {
        if (_networkManager == null)
        {
            return;
        }

        _networkManager.StartHost();
        SetStatus("Waiting for opponent...");
        SetLobbyButtonsActive(false);
        stopButton.gameObject.SetActive(true);
    }

    private void OnJoinClicked()
    {
        if (_networkManager == null)
        {
            return;
        }

        string ip = ipInputField.text.Trim();
        if (string.IsNullOrEmpty(ip))
        {
            ip = "localhost";
        }

        _networkManager.networkAddress = ip;
        _networkManager.StartClient();
        SetStatus($"Connecting to {ip}...");
        SetLobbyButtonsActive(false);
        stopButton.gameObject.SetActive(true);
    }

    private void OnStopClicked()
    {
        if (_networkManager == null)
        {
            return;
        }

        if (NetworkServer.active && NetworkClient.isConnected)
        {
            _networkManager.StopHost();
        }
        else if (NetworkServer.active)
        {
            _networkManager.StopServer();
        }
        else
        {
            _networkManager.StopClient();
        }

        ShowLobby();
    }

    private void HandleMatchState(MatchStateMessage msg)
    {
        playerCountText.text = $"Players: {msg.playerCount}";

        if (msg.matchState == MatchState.WaitingForPlayers)
        {
            if (msg.playerCount > 0)
            {
                SetStatus("Waiting for opponent...");
            }
        }
        else
        {
            lobbyPanel.SetActive(false);
        }
    }

    public void ShowLobby()
    {
        PlayerController.IsGameActive = false;

        lobbyPanel.SetActive(true);

        SetLobbyButtonsActive(true);
        stopButton.gameObject.SetActive(false);
        SetStatus("Welcome!");
        playerCountText.text = "Players: 0";
    }

    private void SetStatus(string msg)
    {
        statusText.text = msg;
    }

    private void SetLobbyButtonsActive(bool active)
    {
        hostButton.gameObject.SetActive(active);
        joinButton.gameObject.SetActive(active);
        ipInputField.gameObject.SetActive(active);
    }
}
