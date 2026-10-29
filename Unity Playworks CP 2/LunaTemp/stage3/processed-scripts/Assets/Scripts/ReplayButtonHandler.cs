using UnityEngine;
using UnityEngine.EventSystems;

public class ReplayButtonHandler : MonoBehaviour, IPointerDownHandler, IPointerClickHandler
{
    public void OnPointerDown(PointerEventData eventData)
    {
        if (GameManager3D.Instance != null)
        {
            GameManager3D.Instance.RestartGame();
        }
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if (GameManager3D.Instance != null)
        {
            GameManager3D.Instance.RestartGame();
        }
    }
}
