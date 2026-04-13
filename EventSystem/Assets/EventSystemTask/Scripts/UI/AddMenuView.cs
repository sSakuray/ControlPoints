using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class AddMenuView : MonoBehaviour, IGameEventListener
{
    [SerializeField] private TMP_Dropdown _resourceDropdown;
    [SerializeField] private TMP_InputField _amountInput;
    [SerializeField] private Button _addButton;
    [SerializeField] private GameEventSO _onAddEvent;

    public TMP_Dropdown ResourceDropdown => _resourceDropdown;
    public TMP_InputField AmountInput => _amountInput;
    public Button AddButton => _addButton;

    public void Initialize()
    {
        _resourceDropdown.ClearOptions();
        List<string> options = new List<string>();
        foreach (ResourceType type in Enum.GetValues(typeof(ResourceType)))
        {
            options.Add(type.ToString());
        }
        _resourceDropdown.AddOptions(options);

        _amountInput.contentType = TMP_InputField.ContentType.IntegerNumber;

        if (_onAddEvent != null)
        {
            _onAddEvent.RegisterObserver(this);
        }
    }

    public void OnEventRaised()
    {
        ResetFields();
    }

    public ResourceType GetSelectedResourceType()
    {
        return (ResourceType)_resourceDropdown.value;
    }

    public int GetAmount()
    {
        if (int.TryParse(_amountInput.text, out int result))
        {
            return result;
        }
        return 0;
    }

    public void ResetFields()
    {
        _resourceDropdown.value = 0;
        _amountInput.text = "";
    }

    public void Show()
    {
        gameObject.SetActive(true);
    }

    public void Hide()
    {
        gameObject.SetActive(false);
    }

    private void OnDestroy()
    {
        if (_onAddEvent != null)
        {
            _onAddEvent.RemoveObserver(this);
        }
    }
}
