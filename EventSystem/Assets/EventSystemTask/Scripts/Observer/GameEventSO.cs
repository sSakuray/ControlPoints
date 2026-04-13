using System.Collections.Generic;
using UnityEngine;

public interface IGameEventListener
{
    void OnEventRaised();
}

[CreateAssetMenu(fileName = "GameEvent", menuName = "Events/GameEvent")]
public class GameEventSO : ScriptableObject
{
    private List<IGameEventListener> _listeners = new List<IGameEventListener>();

    public void RegisterObserver(IGameEventListener listener)
    {
        if (!_listeners.Contains(listener))
        {
            _listeners.Add(listener);
        }
    }

    public void RemoveObserver(IGameEventListener listener)
    {
        if (_listeners.Contains(listener))
        {
            _listeners.Remove(listener);
        }
    }

    public void Notify()
    {
        for (int i = _listeners.Count - 1; i >= 0; i--)
        {
            _listeners[i].OnEventRaised();
        }
    }
}
