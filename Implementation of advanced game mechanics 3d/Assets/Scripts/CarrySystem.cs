using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarrySystem : MonoBehaviour
{
    public float pickupDistance;
    public float dragSpeed; 

    private GameObject carriedBox; 

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.E))
        {
            if (carriedBox == null)
            {
                TryPickupBox();
            }
            else
            {
                DropBox();
            }
        }

        if (carriedBox != null)
        {
            MoveBox();
        }
    }

    void TryPickupBox()
    {
        RaycastHit hit;
        if (Physics.Raycast(transform.position, transform.forward, out hit, pickupDistance))
        {
            if (hit.collider.CompareTag("Box") || hit.collider.CompareTag("SpecialBox"))
            {
                carriedBox = hit.collider.gameObject;
                carriedBox.GetComponent<Rigidbody>().isKinematic = true; 
            }
        }
    }

    void MoveBox()
    {
        Vector3 newPosition = transform.position + transform.forward * pickupDistance;
        carriedBox.transform.position = Vector3.Lerp(carriedBox.transform.position, newPosition, dragSpeed * Time.deltaTime);
    }

    void DropBox()
    {
        if (carriedBox != null)
        {
            carriedBox.GetComponent<Rigidbody>().isKinematic = false; 
            carriedBox = null;
        }
    }
}
