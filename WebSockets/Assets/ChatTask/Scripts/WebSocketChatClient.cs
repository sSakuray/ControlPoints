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
    private ClientWebSocket _webSocket;
    private CancellationTokenSource _cancellationTokenSource;
    private string serverUrl = "ws://localhost:8080";
    private string _messageToSend = "";
    public Text chatHistoryText;
    public InputField messageInput;
    public Button sendButton;
    public ScrollRect scrollRect;

    private List<string> _chatHistory = new List<string>();
    private bool _requiresUiUpdate = false;
    
    async void Start()
    {
        if (sendButton != null)
        {   
            sendButton.onClick.AddListener(SendChatMessage);
        }

        if (messageInput != null)
        {
            messageInput.onSubmit.AddListener(delegate { SendChatMessage(); });
        }

        _webSocket = new ClientWebSocket();
        _cancellationTokenSource = new CancellationTokenSource();

        try
        {
            lock (_chatHistory) { 
                _chatHistory.Add("<i><color=grey>Система: Подключение...</color></i>"); 
                _requiresUiUpdate = true;
            }
            
            await _webSocket.ConnectAsync(new Uri(serverUrl), _cancellationTokenSource.Token);
            lock (_chatHistory) { 
                _chatHistory.Add("<i><color=green>Система: Успешно подключено!</color></i>"); 
                _requiresUiUpdate = true;
            }
            
            _ = ReceiveMessages();
        }
        catch (Exception e)
        {
            Debug.LogError($"Connection error: {e.Message}");
        }
    }

    private async Task ReceiveMessages()
    {
        var buffer = new byte[1024];

        while (_webSocket != null && _webSocket.State == WebSocketState.Open)
        {
            try
            {
                var result = await _webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), _cancellationTokenSource.Token);

                if (result.MessageType == WebSocketMessageType.Close)
                {
                    await _webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, string.Empty, _cancellationTokenSource.Token);
                    lock (_chatHistory) { 
                        _chatHistory.Add("<i><color=red>Система: Соединение закрыто</color></i>"); 
                        _requiresUiUpdate = true;
                    }
                }
                else
                {
                    var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    lock (_chatHistory) 
                    { 
                        _chatHistory.Add($"<b><color=orange>Собеседник:</color></b> {message}");
                        _requiresUiUpdate = true;
                    }
                }
            }
            catch (Exception)
            {
                if (!_cancellationTokenSource.IsCancellationRequested)
                {
                    lock (_chatHistory) { 
                        _chatHistory.Add("<i><color=red>Система: Ошибка соединения</color></i>"); 
                        _requiresUiUpdate = true;
                    }
                }
                break;
            }
        }
    }

    public async void SendChatMessage()
    {
        string textToSend = messageInput != null ? messageInput.text : "";
        if (string.IsNullOrWhiteSpace(textToSend)) 
        {
            return;
        }

        if (_webSocket != null && _webSocket.State == WebSocketState.Open)
        {
            var buffer = Encoding.UTF8.GetBytes(textToSend);
            await _webSocket.SendAsync(new ArraySegment<byte>(buffer), WebSocketMessageType.Text, true, _cancellationTokenSource.Token);
            
            lock (_chatHistory) 
            { 
                _chatHistory.Add($"<b><color=cyan>Вы:</color></b> {textToSend}"); 
                _requiresUiUpdate = true;
            }
            if (messageInput != null) 
            {
                messageInput.text = ""; 
                messageInput.ActivateInputField();
            }
        }
    }

    void Update()
    {
        if (_requiresUiUpdate)
        {
            lock (_chatHistory)
            {
                if (chatHistoryText != null)
                {
                    chatHistoryText.text = string.Join("\n", _chatHistory);
                }
                _requiresUiUpdate = false;
            }

            if (scrollRect != null)
            {
                Canvas.ForceUpdateCanvases();
                scrollRect.verticalNormalizedPosition = 0f;
            }
        }
    }

    private async void OnDestroy()
    {
        if (_cancellationTokenSource != null)
        {
            _cancellationTokenSource.Cancel();
        }

        if (_webSocket != null && _webSocket.State == WebSocketState.Open)
        {
            try
            {
                await _webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing connection", CancellationToken.None);
            }
            catch (Exception) {  }
        }
        
        _webSocket?.Dispose();
    }
    

}
