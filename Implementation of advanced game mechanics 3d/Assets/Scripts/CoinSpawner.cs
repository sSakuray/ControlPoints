using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CoinSpawner : MonoBehaviour
{
    public GameObject coinPrefab;
    public int numberOfCoins = 30; 
    public GameObject spawnAreaObject; 

    private void Start()
    {
        SpawnCoins();
    }

    private void SpawnCoins()
    {
        Collider areaCollider = spawnAreaObject.GetComponent<Collider>();
        for (int i = 0; i < numberOfCoins; i++)
        {
            Vector3 spawnPosition = GetRandomPositionInArea(areaCollider.bounds);
            Instantiate(coinPrefab, spawnPosition, Quaternion.identity);
        }
    }

    private Vector3 GetRandomPositionInArea(Bounds bounds)
    {
        return new Vector3(
            Random.Range(bounds.min.x, bounds.max.x),
            bounds.center.y,
            Random.Range(bounds.min.z, bounds.max.z)
        );
    }
}
