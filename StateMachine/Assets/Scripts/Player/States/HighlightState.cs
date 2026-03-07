using UnityEngine;

public class HighlightState : PlayerState
{
    private bool _isHighlighted;

    public HighlightState(PlayerController player) : base(player) { }

    public override void Enter()
    {
        Player.HUD.SetStateText("State: Highlight");
        _isHighlighted = false;
        Player.SetHighlight(_isHighlighted);
    }

    public override void Exit()
    {
        _isHighlighted = false;
        Player.SetHighlight(_isHighlighted);
    }

    public override void Update()
    {
        if (Player.Input != null && Player.Input.IsAttackPressed)
        {
            _isHighlighted = !_isHighlighted;
            Player.SetHighlight(_isHighlighted);
        }
    }
}
