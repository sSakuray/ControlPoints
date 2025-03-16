using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeButton : MonoBehaviour
{
    public GameObject panel;
    private Renderer renderer;
    private Color baseColor = Color.red;
    private Color triggeredColor = Color.green;

    private void Start()
    {
        renderer = GetComponent<Renderer>();
        renderer.material.color = baseColor;
        panel.SetActive(false);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            renderer.material.color = triggeredColor;
            panel.SetActive(true);
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            renderer.material.color = baseColor;
            panel.SetActive(false);
        }
    }
}
