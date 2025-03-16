using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeButton3 : MonoBehaviour
{
    [SerializeField] private GameObject floor;
    [SerializeField] private GameObject button;
    private Renderer aRenderer;
    private  Color baseColor = Color.red;
    private void Start()
    {
        aRenderer = GetComponent<Renderer>();
        aRenderer.material.color = baseColor;
        floor.SetActive(true);
        button.SetActive(true);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            floor.SetActive(false);
            button.SetActive(false);
        }
    }
}
