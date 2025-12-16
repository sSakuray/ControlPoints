using UnityEngine;

public class Hit1Strategy : IAttackStrategy
{
    public string AttackName => "Hit1";

    public void Execute(Animator animator)
    {
        animator.Play("Hit1", 0, 0f);
    }
}
