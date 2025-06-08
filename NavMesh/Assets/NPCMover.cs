using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class NPCMover : MonoBehaviour
{
    public Transform[] waypoints;
    private int currentPoint = 0;
    private NavMeshAgent agent;

    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
        MoveToNextPoint();
    }

    void MoveToNextPoint()
    {
        if(waypoints.Length == 0) return;
        
        agent.SetDestination(waypoints[currentPoint].position);
        currentPoint = (currentPoint + 1) % waypoints.Length;
    }

    void Update()
    {
        if(agent.remainingDistance < 0.5f)
        {
            MoveToNextPoint();
        }
    }
}