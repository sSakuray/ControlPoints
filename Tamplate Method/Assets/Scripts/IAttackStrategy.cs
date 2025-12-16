using UnityEngine;

public interface IAttackStrategy
{
    string AttackName { get; }
    void Execute(Animator animator);
}
