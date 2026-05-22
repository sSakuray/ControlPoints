using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;

public class MainScreenView : MonoBehaviour
{
    [SerializeField] private Button openButton;

    public void Subscribe(UnityAction action)
    {
        openButton.onClick.AddListener(action);
    }

    public void Unsubscribe(UnityAction action)
    {
        openButton.onClick.RemoveListener(action);
    }

    public void SetInteractable(bool interactable)
    {
        openButton.interactable = interactable;
    }

    public void Show()
    {
        gameObject.SetActive(true);
    }

    public void Hide()
    {
        gameObject.SetActive(false);
    }
}
