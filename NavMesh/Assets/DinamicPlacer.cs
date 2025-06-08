using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using Unity.AI.Navigation;

public class DynamicPlacer : MonoBehaviour
{
    public GameObject obstaclePrefab;
    public NavMeshSurface surface;
    
    
    
    void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            if(Physics.Raycast(ray, out RaycastHit hit))
            {
                GameObject newObstacle = Instantiate(
                    obstaclePrefab, 
                    hit.point, 
                    Quaternion.identity
                );
                surface.BuildNavMesh(); 
            }
        }
    }
}

