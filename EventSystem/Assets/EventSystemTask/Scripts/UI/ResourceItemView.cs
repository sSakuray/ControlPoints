using UnityEngine;
using TMPro;

public class ResourceItemView : MonoBehaviour
{
    [SerializeField] private TMP_Text _nameText;
    [SerializeField] private TMP_Text _amountText;

    public void Setup(string resourceName, int amount)
    {
        _nameText.text = resourceName;
        _amountText.text = amount.ToString();
    }

    public void UpdateAmount(int amount)
    {
        _amountText.text = amount.ToString();
    }
}
