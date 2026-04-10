using UnityEngine;
using System.Net.WebSockets;
using System.Threading;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using UnityEngine.UI;

public class WebSocketChatClient : MonoBehaviour
{
    public Text chatHistoryText;
    public InputField messageInput;
    public Button sendButton;
    public ScrollRect scrollRect;

    private ClientWebSocket _webSocket;
    private CancellationTokenSource _cancellationTokenSource;
    private List<string> _chatHistory = new List<string>();
    private bool _requiresUiUpdate = false;
    
    async void Start()
    {
        sendButton.onClick.AddListener(SendChatMessage);
        messageInput.onSubmit.AddListener(delegate { SendChatMessage(); });

        _webSocket = new ClientWebSocket();
        _cancellationTokenSource = new CancellationTokenSource();

        try
        {
            LogMessage("Система: Подключение...");
            await _webSocket.ConnectAsync(new Uri("ws://localhost:8080"), _cancellationTokenSource.Token);
            LogMessage("Система: Успешно подключено!");
            
            _ = ReceiveMessages();
        }
        catch (Exception)
        {
            LogMessage("Система: Ошибка подключения");
        }
    }

    private async Task ReceiveMessages()
    {
        var buffer = new byte[1024];

        while (_webSocket.State == WebSocketState.Open)
        {
            try
            {
                var result = await _webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), _cancellationTokenSource.Token);
                if (result.MessageType == WebSocketMessageType.Close)
                {
                    await _webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "", _cancellationTokenSource.Token);
                    LogMessage("Система: Соединение закрыто");
                }
                else
                {
                    LogMessage($"Собеседник: {Encoding.UTF8.GetString(buffer, 0, result.Count)}");
                }
            }
            catch
            {
                if (!_cancellationTokenSource.IsCancellationRequested)
                {
                    LogMessage("Система: Ошибка соединения");
                }
                break;
            }
        }
    }

    public async void SendChatMessage()
    {
        var textToSend = messageInput.text;
        var buffer = Encoding.UTF8.GetBytes(textToSend);
        
        await _webSocket.SendAsync(new ArraySegment<byte>(buffer), WebSocketMessageType.Text, true, _cancellationTokenSource.Token);
        
        LogMessage($"Вы: {textToSend}");
        messageInput.text = ""; 
        messageInput.ActivateInputField();
    }

    private void LogMessage(string message)
    {
        lock (_chatHistory)
        {
            _chatHistory.Add(message);
            _requiresUiUpdate = true;
        }
    }

    void Update()
    {
        lock (_chatHistory)
        {
            chatHistoryText.text = string.Join("\n", _chatHistory);
            _requiresUiUpdate = false;
        }

        Canvas.ForceUpdateCanvases();
    }

    private void OnDestroy()
    {
        _cancellationTokenSource?.Cancel();
        _webSocket?.Dispose();
    }
}
