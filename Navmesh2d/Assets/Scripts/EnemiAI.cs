using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class EnemiAI : MonoBehaviour
{
    private NavMeshAgent agent;
    private Transform player;

    public void Start()
    {
        player = GameObject.FindWithTag("Player").transform;
        agent = GetComponent<NavMeshAgent>();
        agent.updateRotation = true;
        agent.updateUpAxis = true;
    }

    public void Update()
    {
        agent.SetDestination(player.position);
    }
}
