public class GameStateMachine : StateMachine
{
    public GameStatePlay StatePlay { get; private set; }
    public GameStatePause StatePause { get; private set; }
    public GameStateFinal StateFinal { get; private set; }

    public void Initialize(PlayerController player, PlayerInputHandler input)
    {
        StatePlay = new GameStatePlay(this, input);
        StatePause = new GameStatePause(this, input);
        StateFinal = new GameStateFinal(player);
        base.Initialize(StatePlay);
    }
}
