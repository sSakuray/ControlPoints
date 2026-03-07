using UnityEngine;
using UnityEngine.UI;

public class HUDController : MonoBehaviour
{
    [SerializeField] private Text _text;

    public void SetStateText(string text)
    {
        _text.text = text;
    }
}
