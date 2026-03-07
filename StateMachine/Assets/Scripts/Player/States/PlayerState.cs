public abstract class PlayerState : BaseState
{
    protected PlayerController Player;

    public PlayerState(PlayerController player)
    {
        Player = player;
    }
}
