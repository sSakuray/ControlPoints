using UnityEngine;

public class TransparentState : PlayerState
{
    private bool _isTransparent;

    public TransparentState(PlayerController player) : base(player) { }

    public override void Enter()
    {
        Player.HUD.SetStateText("State: Transparent");
        _isTransparent = false;
        Player.SetTransparency(_isTransparent);
    }

    public override void Exit()
    {
        _isTransparent = false;
        Player.SetTransparency(_isTransparent);
    }

    public override void Update()
    {
        if (Player.Input != null && Player.Input.IsAttackPressed)
        {
            _isTransparent = !_isTransparent;
            Player.SetTransparency(_isTransparent);
        }
    }
}
