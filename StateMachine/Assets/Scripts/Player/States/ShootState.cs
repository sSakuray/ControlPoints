using UnityEngine;

public class ShootState : PlayerState
{
    public ShootState(PlayerController player) : base(player) { }

    public override void Enter()
    {
        Player.HUD.SetStateText("State: Shooting");
    }

    public override void Exit()
    {
    }

    public override void Update()
    {
        if (Player.Input != null && Player.Input.IsAttackPressed)
        {
            Player.Shoot();
        }
    }
}
