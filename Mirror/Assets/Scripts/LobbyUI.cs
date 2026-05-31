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
    public GameObject gamePanel;
    public static Action<int> OnPlayerCountChanged;
    private NetworkManager _networkManager;

    private void Awake()
    {
        _networkManager = FindFirstObjectByType<NetworkManager>();
    }

    private void OnEnable()
    {
        OnPlayerCountChanged += HandlePlayerCountChanged;

        if (hostButton != null)
        {
            hostButton.onClick.AddListener(OnHostClicked);
        }
        if (joinButton != null)
        {
            joinButton.onClick.AddListener(OnJoinClicked);
        }
        if (stopButton != null)
        {
            stopButton.onClick.AddListener(OnStopClicked);
        }
    }

    private void OnDisable()
    {
        OnPlayerCountChanged -= HandlePlayerCountChanged;

        if (hostButton != null)
        {
            hostButton.onClick.RemoveListener(OnHostClicked);
        }
        if (joinButton != null)
        {
            joinButton.onClick.RemoveListener(OnJoinClicked);
        }
        if (stopButton != null)
        {
            stopButton.onClick.RemoveListener(OnStopClicked);
        }
    }

    private void Start()
    {
        ShowLobby();
    }

    private void OnHostClicked()
    {
        if (_networkManager != null)
        {
            _networkManager.StartHost();
            SetStatus("Waiting for second player...");
            SetLobbyButtonsActive(false);
            if (stopButton != null)
            {
                stopButton.gameObject.SetActive(true);
            }
        }
    }

    private void OnJoinClicked()
    {
        if (_networkManager != null)
        {
            string ip = ipInputField != null ? ipInputField.text.Trim() : "localhost";
            if (string.IsNullOrEmpty(ip))
            {
                ip = "localhost";
            }
            _networkManager.networkAddress = ip;
            _networkManager.StartClient();
            SetStatus($"Connecting to {ip}...");
            SetLobbyButtonsActive(false);
            if (stopButton != null)
            {
                stopButton.gameObject.SetActive(true);
            }
        }
    }

    private void OnStopClicked()
    {
        if (_networkManager != null)
        {
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
        }
        ShowLobby();
    }

    private void HandlePlayerCountChanged(int count)
    {
        if (playerCountText != null)
        {
            playerCountText.text = $"Players: {count}/2";
        }

        if (count >= 2)
        {
            PlayerController.IsGameActive = true;
            SetStatus("Game started!");
            gameObject.SetActive(false);
        }
        else
        {
            PlayerController.IsGameActive = false;
        }
    }

    public void ShowLobby()
    {
        PlayerController.IsGameActive = false;
        gameObject.SetActive(true);
        if (lobbyPanel != null)
        {
            lobbyPanel.SetActive(true);
        }
        if (gamePanel != null)
        {
            gamePanel.SetActive(false);
        }
        SetLobbyButtonsActive(true);
        if (stopButton != null)
        {
            stopButton.gameObject.SetActive(false);
        }
        SetStatus("Welcome!");
        if (playerCountText != null)
        {
            playerCountText.text = "Players: 0/2";
        }
    }

    private void SetStatus(string msg)
    {
        if (statusText != null)
        {
            statusText.text = msg;
        }
    }

    private void SetLobbyButtonsActive(bool active)
    {
        if (hostButton != null)
        {
            hostButton.gameObject.SetActive(active);
        }
        if (joinButton != null)
        {
            joinButton.gameObject.SetActive(active);
        }
        if (ipInputField != null)
        {
            ipInputField.gameObject.SetActive(active);
        }
    }
}
