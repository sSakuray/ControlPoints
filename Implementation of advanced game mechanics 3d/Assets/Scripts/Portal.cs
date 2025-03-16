using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Cinemachine;
public class Portal : MonoBehaviour
{
    [SerializeField] private Transform teleportDestination;
    [SerializeField] private CinemachineVirtualCamera currentCamera;
    [SerializeField] private CinemachineVirtualCamera newCamera;
    [SerializeField] private GameObject ui;
    private int newCameraPriority = 11;
    private Renderer bRenderer;
    private Color baseColor = Color.blue;

    private void Start()
    {
        bRenderer = GetComponent<Renderer>();
        bRenderer.material.color = baseColor;
        newCamera.gameObject.SetActive(false);
        ui.SetActive(false);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player")) 
        {
            TeleportPlayer(other.transform);
        }
    }

    private void TeleportPlayer(Transform player)
    {
        player.position = teleportDestination.position;
        newCamera.gameObject.SetActive(true);
        newCamera.Priority = newCameraPriority;
        ui.SetActive(true);
    }
}
