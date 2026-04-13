using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MainMenuView : MonoBehaviour, IGameEventListener
{
    [SerializeField] private Transform _resourceContainer;
    [SerializeField] private ResourceItemView _resourceItemPrefab;
    [SerializeField] private Button _resetButton;
    [SerializeField] private GameEventSO _onResetEvent;
    [SerializeField] private GameEventSO _onAddEvent;

    private Dictionary<ResourceType, ResourceItemView> _resourceItems = new Dictionary<ResourceType, ResourceItemView>();
    private ResourcePool _resourcePool;

    public Button ResetButton => _resetButton;

    public void Initialize(ResourcePool resourcePool)
    {
        _resourcePool = resourcePool;

        foreach (ResourceType type in Enum.GetValues(typeof(ResourceType)))
        {
            ResourceItemView item = Instantiate(_resourceItemPrefab, _resourceContainer);
            item.Setup(type.ToString(), resourcePool.GetAmount(type));
            _resourceItems[type] = item;
        }

        _resourcePool.OnResourcesChanged += UpdateResourceDisplay;

        if (_onResetEvent != null)
        {
            _onResetEvent.RegisterObserver(this);
        }
        
        if (_onAddEvent != null)
        {
            _onAddEvent.RegisterObserver(this);
        }
    }

    public void OnEventRaised()
    {
        UpdateResourceDisplay();
    }

    public void UpdateResourceDisplay()
    {
        if (_resourcePool == null)
        {
            return;
        }

        foreach (var kvp in _resourceItems)
        {
            kvp.Value.UpdateAmount(_resourcePool.GetAmount(kvp.Key));
        }
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
        if (_resourcePool != null)
        {
            _resourcePool.OnResourcesChanged -= UpdateResourceDisplay;
        }

        if (_onResetEvent != null)
        {
            _onResetEvent.RemoveObserver(this);
        }
        
        if (_onAddEvent != null)
        {
            _onAddEvent.RemoveObserver(this);
        }
    }
}
