using UnityEngine;

public class Hit3Strategy : IAttackStrategy
{
    public string AttackName => "Hit3";

    public void Execute(Animator animator)
    {
        animator.Play("Hit3", 0, 0f);
    }
}
