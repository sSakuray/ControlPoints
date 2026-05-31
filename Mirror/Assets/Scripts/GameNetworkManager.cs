using Mirror;
using UnityEngine;

public struct PlayerCountMessage : NetworkMessage
{
    public int count;
}

public class GameNetworkManager : NetworkManager
{
    public Transform spawnPoint1;
    public Transform spawnPoint2;
    private int _playerCount = 0;

    public override void OnStartServer()
    {
        base.OnStartServer();
        _playerCount = 0;
    }

    public override void OnStartClient()
    {
        base.OnStartClient();
        NetworkClient.RegisterHandler<PlayerCountMessage>(OnPlayerCountReceived);
    }

    public override void OnServerAddPlayer(NetworkConnectionToClient conn)
    {
        Transform startPos = _playerCount == 0 ? spawnPoint1 : spawnPoint2;
        _playerCount++;

        GameObject player = Instantiate(playerPrefab, startPos != null ? startPos.position : Vector3.zero, Quaternion.identity);
        NetworkServer.AddPlayerForConnection(conn, player);

        SendPlayerCount(_playerCount);
    }

    public override void OnServerDisconnect(NetworkConnectionToClient conn)
    {
        _playerCount = Mathf.Max(0, _playerCount - 1);
        base.OnServerDisconnect(conn);
        SendPlayerCount(_playerCount);
    }

    [Server]
    private void SendPlayerCount(int count)
    {
        NetworkServer.SendToAll(new PlayerCountMessage { count = count });
    }

    private static void OnPlayerCountReceived(PlayerCountMessage msg)
    {
        LobbyUI.OnPlayerCountChanged?.Invoke(msg.count);
    }
}
