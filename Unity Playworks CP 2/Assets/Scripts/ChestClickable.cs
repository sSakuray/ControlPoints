using UnityEngine;
using UnityEngine.EventSystems;

public class ChestClickable : MonoBehaviour, IPointerDownHandler
{
    public void OnPointerDown(PointerEventData eventData)
    {
        if (GameManager3D.Instance != null)
        {
            Vector3 hitPos = eventData.pointerCurrentRaycast.worldPosition;
            if (hitPos == Vector3.zero)
            {
                hitPos = transform.position;
            }

            GameManager3D.Instance.OnChestHit(hitPos);
        }
    }

    private void OnMouseDown()
    {
        if (GameManager3D.Instance != null)
        {
            GameManager3D.Instance.OnChestHit(transform.position);
        }
    }
}
