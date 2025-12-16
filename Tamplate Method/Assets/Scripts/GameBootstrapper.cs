using UnityEngine;

public class GameBootstrapper : MonoBehaviour
{
    [SerializeField] private IntegratedAttackPerformer attackPerformer;
    [SerializeField] private EnemyManager enemyManager;

    private void Awake()
    {
        InitializeSystems();
    }

    private void InitializeSystems()
    {
        enemyManager = FindObjectOfType<EnemyManager>();
        attackPerformer = FindObjectOfType<IntegratedAttackPerformer>();
    }

    public void OnAttackTypeChanged(int attackType)
    {
        enemyManager.OnPlayerAttackTypeChanged(attackType);
    }
}
