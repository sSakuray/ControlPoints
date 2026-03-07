using UnityEngine;

public class GameStatePlay : BaseState
{
    private PlayerInputHandler _input;
    private GameStateMachine _stateMachine;

    public GameStatePlay(GameStateMachine stateMachine, PlayerInputHandler input)
    {
        _stateMachine = stateMachine;
        _input = input;
    }

    public override void Enter()
    {
        _input.EnablePlayerInput();
        Time.timeScale = 1f;
    }

    public override void Exit()
    {
        _input.DisablePlayerInput();
    }

    public override void Update()
    {
        if (_input.IsPausePressed)
        {
            _stateMachine.ChangeState(_stateMachine.StatePause);
        }
        else if (_input.IsFinalPressed)
        {
            _stateMachine.ChangeState(_stateMachine.StateFinal);
        }
    }
}
