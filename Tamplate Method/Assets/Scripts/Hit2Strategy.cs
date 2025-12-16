using UnityEngine;

public class Hit2Strategy : IAttackStrategy
{
    public string AttackName => "Hit2";

    public void Execute(Animator animator)
    {
        animator.Play("Hit2", 0, 0f);
    }
}
