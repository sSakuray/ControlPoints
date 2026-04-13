using System;
using System.Collections.Generic;
using UnityEngine;

public enum ResourceType
{
    Cats,
    Cream,
    Customs
}

public class ResourcePool
{
    private Dictionary<ResourceType, int> _resources = new Dictionary<ResourceType, int>();

    public event Action OnResourcesChanged;

    public ResourcePool()
    {
        foreach (ResourceType type in Enum.GetValues(typeof(ResourceType)))
        {
            _resources[type] = 0;
        }
    }

    public int GetAmount(ResourceType type)
    {
        return _resources[type];
    }

    public void Add(ResourceType type, int amount)
    {
        if (amount < 0)
        {
            return;
        }
        _resources[type] += amount;
        OnResourcesChanged?.Invoke();
    }

    public void Remove(ResourceType type, int amount)
    {
        if (amount < 0)
        {
            return;
        }
        _resources[type] = Mathf.Max(0, _resources[type] - amount);
        OnResourcesChanged?.Invoke();
    }

    public void Reset()
    {
        foreach (ResourceType type in Enum.GetValues(typeof(ResourceType)))
        {
            _resources[type] = 0;
        }
        OnResourcesChanged?.Invoke();
    }

    public Dictionary<ResourceType, int> GetAll()
    {
        return new Dictionary<ResourceType, int>(_resources);
    }
}
