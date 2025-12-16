using UnityEngine;

public class GameBootstrapper : MonoBehaviour
{
    [SerializeField] private AttackPerformer attackPerformer;
    [SerializeField] private EnemyManager enemyManager;

    private void Awake()
    {
        InitializeSystems();
    }

    private void InitializeSystems()
    {
        enemyManager = FindObjectOfType<EnemyManager>();
        attackPerformer = FindObjectOfType<AttackPerformer>();
    }

    public void OnAttackTypeChanged(int attackType)
    {
        enemyManager.OnPlayerAttackTypeChanged(attackType);
    }
}
