using UnityEngine;

public class GameStatePause : BaseState
{
    private PlayerInputHandler _input;
    private GameStateMachine _stateMachine;

    public GameStatePause(GameStateMachine stateMachine, PlayerInputHandler input)
    {
        _stateMachine = stateMachine;
        _input = input;
    }

    public override void Enter()
    {
        Time.timeScale = 0f;
    }

    public override void Exit()
    {
        Time.timeScale = 1f;
    }

    public override void Update()
    {
        if (_input.IsPausePressed)
        {
            _stateMachine.ChangeState(_stateMachine.StatePlay);
        }
    }
}
