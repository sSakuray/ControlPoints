using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeButton2 : MonoBehaviour
{
    [SerializeField] private GameObject Wall;
    private Renderer __renderer;
    private Color baseColor = Color.yellow;
    private Color triggeredColor = Color.blue;

    private void Start()
    {
        __renderer = GetComponent<Renderer>();
        __renderer.material.color = baseColor;
        Wall.SetActive(true);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player") || other.CompareTag("SpecialBox"))
        {   
            __renderer.material.color = triggeredColor;
            Wall.SetActive(false);
        }
    }
    

    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("Player") || other.CompareTag("SpecialBox"))
        {   
            __renderer.material.color = baseColor;
            Wall.SetActive(true);
        }
    }
}
