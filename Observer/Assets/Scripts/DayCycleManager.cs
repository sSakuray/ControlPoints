using System.Collections.Generic;
using UnityEngine;

public class DayCycleManager : MonoBehaviour
{
    [SerializeField] private float dayDurationSeconds = 60f;

    [SerializeField, Range(0f, 1f)] private float startPhase = 0f;

    public float NormalizedTime { get; private set; }

    private readonly List<ITimeObserver> _observers = new List<ITimeObserver>();
    public void Subscribe(ITimeObserver observer)
    {
        if (!_observers.Contains(observer))
        {
            _observers.Add(observer);
        }
    }

    public void Unsubscribe(ITimeObserver observer)
    {
        _observers.Remove(observer);
    }

    private void Start()
    {
        NormalizedTime = startPhase;
        NotifyObservers();
    }

    private void Update()
    {
        NormalizedTime += Time.deltaTime / dayDurationSeconds;

        if (NormalizedTime >= 1f)
            NormalizedTime -= 1f;

        NotifyObservers();
    }

    private void NotifyObservers()
    {
        for (int i = 0; i < _observers.Count; i++)
        {
            _observers[i].OnTimeChanged(NormalizedTime);
        }
    }
}
