using UnityEngine;

public class GameStateFinal : BaseState
{
    private PlayerController _player;

    public GameStateFinal(PlayerController player)
    {
        _player = player;
    }

    public override void Enter()
    {
        Time.timeScale = 1f;
        _player.SetFinalState();
    }

    public override void Exit() { }

    public override void Update() { }
}
