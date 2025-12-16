using UnityEngine;
using System.Collections.Generic;

public class EnemyManager : MonoBehaviour
{
    [SerializeField] private List<EnemyBehavior> enemyPrefabs = new List<EnemyBehavior>();
    [SerializeField] private Transform enemySpawnPoint;

    private List<EnemyBehavior> enemyPool = new List<EnemyBehavior>();
    private EnemyBehavior currentActiveEnemy;
    private int currentEnemyIndex = 0;

    private void Start()
    {
        InitializeEnemyPool();
        SwitchToEnemy(0);
    }

    private void Update()
    {
        if (currentActiveEnemy != null)
        {
            currentActiveEnemy.ExecuteBehavior();
        }
    }

    private void InitializeEnemyPool()
    {
        foreach (var enemyPrefab in enemyPrefabs)
        {
            EnemyBehavior enemy = Instantiate(enemyPrefab, enemySpawnPoint.position, Quaternion.identity);
            enemy.transform.SetParent(transform);
            enemy.Deactivate();
            enemyPool.Add(enemy);
        }
    }


    public void SwitchToEnemy(int enemyIndex)
    {
        if (enemyIndex < 0 || enemyIndex >= enemyPool.Count) 
        {
            return;
        }
        if (currentActiveEnemy != null)
        {
            currentActiveEnemy.Deactivate();
        }

        currentEnemyIndex = enemyIndex;
        currentActiveEnemy = enemyPool[currentEnemyIndex];
        currentActiveEnemy.transform.position = enemySpawnPoint.position;
        currentActiveEnemy.Activate();
    }

    public void OnPlayerAttackTypeChanged(int attackType)
    {
        int enemyIndex = (attackType - 1) % enemyPool.Count;
        SwitchToEnemy(enemyIndex);
    }

    public EnemyBehavior GetCurrentEnemy()
    {
        return currentActiveEnemy;
    }
}
