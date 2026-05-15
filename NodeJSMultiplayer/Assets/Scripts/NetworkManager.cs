using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using UnityEngine;

[Serializable]
public class PlayerState
{
    public string id;
    public float  x;
    public float  y;
    public int    hp;
}

[Serializable]
public class BulletState
{
    public int    id;
    public string ownerId;
    public float  x;
    public float  y;
}

[Serializable]
public class GameState
{
    public PlayerState[] players;
    public BulletState[] bullets;
}

[Serializable]
public class InputPacket
{
    public string id;
    public float  inputX;
    public float  inputY;
    public float  shootDirX;
    public float  shootDirY;
    public bool   shoot;
    public bool   restart;
}

public class NetworkManager : MonoBehaviour
{
    public static NetworkManager Instance { get; private set; }
    public string serverIP   = "127.0.0.1";
    public int serverPort = 7777;

    public string playerId = "Player_1";

    public GameState LatestState { get; private set; }

    private UdpClient  _udp;
    private Thread _recvThread;
    private bool _running;
    private string _pendingJson;
    private readonly object _lock = new object();

    void Awake()
    {
        if (Instance != null)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    void Start()
    {
        _udp = new UdpClient();
        _udp.Connect(serverIP, serverPort);
        _running = true;
        _recvThread = new Thread(ReceiveLoop) { IsBackground = true };
        _recvThread.Start();
    }

    void Update()
    {
        string json = null;
        lock (_lock) { json = _pendingJson; _pendingJson = null; }
        if (json != null)
        {
            try { LatestState = JsonUtility.FromJson<GameState>(json); }
            catch (Exception e) { Debug.LogWarning("[Net] " + e.Message); }
        }
    }

    void OnDestroy()
    {
        _running = false;
        _recvThread?.Abort();
        _udp?.Close();
    }

    public void SendInput(float ix, float iy, float sdx, float sdy, bool shoot, bool restart = false)
    {
        var pkt = new InputPacket
        {
            id = playerId, inputX = ix, inputY = iy,
            shootDirX = sdx, shootDirY = sdy, shoot = shoot, restart = restart
        };
        byte[] data = Encoding.UTF8.GetBytes(JsonUtility.ToJson(pkt));
        try { _udp.Send(data, data.Length); }
        catch (Exception e) { Debug.LogWarning("[Net] " + e.Message); }
    }

    void ReceiveLoop()
    {
        IPEndPoint remote = new IPEndPoint(IPAddress.Any, 0);
        while (_running)
        {
            try
            {
                byte[] data = _udp.Receive(ref remote);
                string json = Encoding.UTF8.GetString(data);
                lock (_lock) { _pendingJson = json; }
            }
            catch { }
        }
    }
}
