using UnityEngine;

public class Enemy3Behavior : EnemyBehavior
{
    protected override void OnSpawn()
    {
        SetLabel("Враг 3");
    }

    protected override void UpdateBehavior()
    {
        if (Input.GetKeyDown(KeyCode.Q))
        {
            animator.Play("Hit3", 0, 0f);
        }
    }

    protected override void OnActivate()
    {
        PlayIdleAnimation();
    }
}
