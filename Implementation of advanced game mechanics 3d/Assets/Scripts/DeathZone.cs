using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DeathZone : MonoBehaviour
{
    [SerializeField] private GameObject Prefab;
    private Vector3 spawnOffset = new Vector3(0, 10, 0);
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            Vector3 spawnPosition = other.transform.position + spawnOffset;
            Instantiate(Prefab, spawnPosition, Quaternion.identity);
        }
    }
}
