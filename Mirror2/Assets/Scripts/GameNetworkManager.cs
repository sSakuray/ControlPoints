using System.Collections;
using System.Collections.Generic;
using Mirror;
using UnityEngine;

public enum MatchState : byte
{
    WaitingForPlayers,
    RoundActive,
    RoundEnd,
    MatchEnd
}

public struct MatchStateMessage : NetworkMessage
{
    public int teamAScore;
    public int teamBScore;
    public int currentRound;
    public MatchState matchState;
    public int winnerTeam;
    public int playerCount;
}

public class GameNetworkManager : NetworkManager
{
    public Transform[] teamASpawnPoints;
    public Transform[] teamBSpawnPoints;

    public const int RoundsToWin = 12;

    private int _teamAScore;
    private int _teamBScore;
    private int _currentRound;
    private MatchState _matchState = MatchState.WaitingForPlayers;
    private int _roundWinnerTeam = -1;
    private int _matchWinnerTeam = -1;

    private readonly List<PlayerController> _players = new List<PlayerController>();
    private int _nextTeam;

    public static GameNetworkManager Instance { get; private set; }

    public override void Awake()
    {
        base.Awake();
        Instance = this;
    }

    public override void OnStartServer()
    {
        base.OnStartServer();
        _teamAScore = 0;
        _teamBScore = 0;
        _currentRound = 0;
        _matchState = MatchState.WaitingForPlayers;
        _players.Clear();
        _nextTeam = 0;
    }

    public override void OnStartClient()
    {
        base.OnStartClient();
        NetworkClient.RegisterHandler<MatchStateMessage>(OnMatchStateReceived);
    }

    public override void OnServerAddPlayer(NetworkConnectionToClient conn)
    {
        int team = _nextTeam;
        _nextTeam = 1 - _nextTeam;

        Transform[] spawns = team == 0 ? teamASpawnPoints : teamBSpawnPoints;
        int teamIdx = CountTeamPlayers(team);
        Vector3 pos = Vector3.zero;

        if (spawns != null && spawns.Length > 0)
        {
            pos = spawns[teamIdx % spawns.Length].position;
        }

        GameObject player = Instantiate(playerPrefab, pos, Quaternion.identity);
        player.SetActive(true);

        PlayerController pc = player.GetComponent<PlayerController>();
        if (pc != null)
        {
            pc.team = team;
        }

        NetworkServer.AddPlayerForConnection(conn, player);

        if (pc != null)
        {
            _players.Add(pc);
        }

        BroadcastMatchState();

        if (_matchState == MatchState.WaitingForPlayers)
        {
            if (CountTeamPlayers(0) >= 1 && CountTeamPlayers(1) >= 1)
            {
                StartNewRound();
            }
        }
    }

    public override void OnServerDisconnect(NetworkConnectionToClient conn)
    {
        if (conn.identity != null)
        {
            PlayerController pc = conn.identity.GetComponent<PlayerController>();
            if (pc != null)
            {
                _players.Remove(pc);
            }
        }
        base.OnServerDisconnect(conn);
        BroadcastMatchState();
    }

    [Server]
    private void StartNewRound()
    {
        _currentRound++;
        _matchState = MatchState.RoundActive;
        _roundWinnerTeam = -1;

        _players.RemoveAll(p => p == null);

        foreach (PlayerController pc in _players)
        {
            PlayerHealth h = pc.GetComponent<PlayerHealth>();
            if (h != null)
            {
                h.Respawn();
            }

            Transform[] spawns = pc.team == 0 ? teamASpawnPoints : teamBSpawnPoints;
            if (spawns != null && spawns.Length > 0)
            {
                int idx = GetTeamIndex(pc);
                Vector3 pos = spawns[idx % spawns.Length].position;
                pc.transform.position = pos;
                pc.RpcTeleport(pos);
            }
        }

        PlayerController.IsGameActive = true;
        foreach (PlayerController pc in _players)
        {
            pc.RpcSetGameActive(true);
        }

        BroadcastMatchState();
    }

    [Server]
    public void OnPlayerDied()
    {
        if (_matchState != MatchState.RoundActive)
        {
            return;
        }

        _players.RemoveAll(p => p == null);

        int teamAAlive = 0;
        int teamBAlive = 0;
        foreach (PlayerController pc in _players)
        {
            PlayerHealth h = pc.GetComponent<PlayerHealth>();
            if (h == null || h.isDead)
            {
                continue;
            }
            if (pc.team == 0)
            {
                teamAAlive++;
            }
            else
            {
                teamBAlive++;
            }
        }

        if (teamAAlive == 0 && teamBAlive > 0)
        {
            EndRound(1);
        }
        else if (teamBAlive == 0 && teamAAlive > 0)
        {
            EndRound(0);
        }
    }

    [Server]
    private void EndRound(int winner)
    {
        _roundWinnerTeam = winner;
        if (winner == 0)
        {
            _teamAScore++;
        }
        else
        {
            _teamBScore++;
        }

        PlayerController.IsGameActive = false;
        foreach (PlayerController pc in _players)
        {
            if (pc != null)
            {
                pc.RpcSetGameActive(false);
            }
        }

        if (_teamAScore >= RoundsToWin)
        {
            _matchState = MatchState.MatchEnd;
            _matchWinnerTeam = 0;
            BroadcastMatchState();
        }
        else if (_teamBScore >= RoundsToWin)
        {
            _matchState = MatchState.MatchEnd;
            _matchWinnerTeam = 1;
            BroadcastMatchState();
        }
        else
        {
            _matchState = MatchState.RoundEnd;
            BroadcastMatchState();
            StartCoroutine(RoundEndDelay());
        }
    }

    private IEnumerator RoundEndDelay()
    {
        yield return new WaitForSeconds(3f);
        StartNewRound();
    }

    [Server]
    private void BroadcastMatchState()
    {
        _players.RemoveAll(p => p == null);
        NetworkServer.SendToAll(new MatchStateMessage
        {
            teamAScore = _teamAScore,
            teamBScore = _teamBScore,
            currentRound = _currentRound,
            matchState = _matchState,
            winnerTeam = _matchState == MatchState.MatchEnd ? _matchWinnerTeam : _roundWinnerTeam,
            playerCount = _players.Count
        });
    }

    private int CountTeamPlayers(int team)
    {
        int c = 0;
        foreach (PlayerController p in _players)
        {
            if (p != null && p.team == team)
            {
                c++;
            }
        }
        return c;
    }

    private int GetTeamIndex(PlayerController target)
    {
        int idx = 0;
        foreach (PlayerController p in _players)
        {
            if (p == target)
            {
                return idx;
            }
            if (p != null && p.team == target.team)
            {
                idx++;
            }
        }
        return 0;
    }

    private static void OnMatchStateReceived(MatchStateMessage msg)
    {
        PlayerController.IsGameActive = msg.matchState == MatchState.RoundActive;
        GameHUD.OnMatchStateUpdated?.Invoke(msg);
        LobbyUI.OnMatchStateChanged?.Invoke(msg);
    }
}
