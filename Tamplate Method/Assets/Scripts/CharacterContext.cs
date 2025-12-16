using UnityEngine;

public class CharacterContext : MonoBehaviour
{
    private Animator animator;
    private IAttackStrategy currentStrategy;

    private void Awake()
    {
        animator = GetComponent<Animator>();
    }

    public void SetStrategy(IAttackStrategy strategy)
    {
        currentStrategy = strategy;
    }

    public void PerformAttack()
    {
        if (currentStrategy != null)
        {
            currentStrategy.Execute(animator);
        }
    }

    public IAttackStrategy GetCurrentStrategy()
    {
        return currentStrategy;
    }
}
