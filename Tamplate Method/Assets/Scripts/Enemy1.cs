using UnityEngine;

public class Enemy1 : EnemyBehavior
{
    private bool hasAttacked = false;

    protected override void OnSpawn()
    {
        SetLabel("Враг 1");
        animator.Play("Hit1", 0, 0f);
        hasAttacked = true;
    }

    protected override void UpdateBehavior()
    {
        if (hasAttacked)
        {
            PlayIdleAnimation();
        }
    }

    protected override void OnActivate()
    {
        hasAttacked = false;
    }

    protected override void OnDeactivate()
    {
        hasAttacked = false;
    }
}
