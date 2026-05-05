using System;
using System.Collections.Concurrent;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using UnityEngine;

/// <summary>
/// UDP-синглтон. Получает пакеты в фоновом потоке, доставляет через очередь
/// в главный поток Unity (Update). Никаких Unity-вызовов из фонового потока.
/// </summary>
public class NetworkManager : MonoBehaviour
{
    public static NetworkManager Instance { get; private set; }

    public string PlayerId    { get; private set; }
    public bool   IsConnected { get; private set; }

    /// <summary>Вызывается на главном потоке при каждом входящем JSON-сообщении.</summary>
    public event Action<string> OnMessage;

    private UdpClient  _udp;
    private Thread     _thread;
    private volatile bool _running;
    private readonly ConcurrentQueue<string> _inbox = new ConcurrentQueue<string>();

    void Awake()
    {
        if (Instance != null && Instance != this) { Destroy(gameObject); return; }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    void Update()
    {
        while (_inbox.TryDequeue(out string msg))
            OnMessage?.Invoke(msg);
    }

    void OnDestroy()
    {
        _running = false;
        _udp?.Close();
        _thread?.Join(400);
    }

    // ─── Подключение к серверу ────────────────────────────────────────────

    public void Connect(string playerId, string ip, int port = 7777)
    {
        PlayerId = playerId;
        var ep = new IPEndPoint(IPAddress.Parse(ip), port);
        _udp = new UdpClient();
        _udp.Connect(ep);
        _running = true;
        _thread  = new Thread(ReceiveLoop) { IsBackground = true, Name = "NetRecv" };
        _thread.Start();
        IsConnected = true;
        Raw($"{{\"type\":\"join\",\"id\":\"{playerId}\"}}");
        Debug.Log($"[Net] Подключён как «{playerId}» → {ip}:{port}");
    }

    // ─── Фоновый приём ───────────────────────────────────────────────────

    private void ReceiveLoop()
    {
        var ep = new IPEndPoint(IPAddress.Any, 0);
        while (_running)
        {
            try   { _inbox.Enqueue(Encoding.UTF8.GetString(_udp.Receive(ref ep))); }
            catch (SocketException) { }
            catch (Exception e)     { if (_running) Debug.LogWarning("[Net] " + e.Message); }
        }
    }

    // ─── Отправка ────────────────────────────────────────────────────────

    public void Raw(string json)
    {
        if (!IsConnected) return;
        try { byte[] b = Encoding.UTF8.GetBytes(json); _udp.Send(b, b.Length); }
        catch (Exception e) { Debug.LogWarning("[Net] Send: " + e.Message); }
    }

    public void SendInput(float ix, float iy, float facing) =>
        Raw($"{{\"type\":\"input\",\"id\":\"{PlayerId}\"," +
            $"\"inputX\":{ix.ToString("F3",System.Globalization.CultureInfo.InvariantCulture)}," +
            $"\"inputY\":{iy.ToString("F3",System.Globalization.CultureInfo.InvariantCulture)}," +
            $"\"facing\":{(int)facing}}}");

    public void SendShoot(float angle) =>
        Raw($"{{\"type\":\"shoot\",\"id\":\"{PlayerId}\"," +
            $"\"angle\":{angle.ToString("F4",System.Globalization.CultureInfo.InvariantCulture)}}}");

    public void SendRestart() =>
        Raw($"{{\"type\":\"restart\",\"id\":\"{PlayerId}\"}}");
}
