using System;
using System.Collections.Generic;
using UnityEngine;

public class ServiceLocator : IService
{
    private readonly Dictionary<Type, object> _services = new Dictionary<Type, object>();

    public ServiceLocator (AudioSource audioSource, AudioClip openClip, AudioClip closeClip, Score score, bool useJsonSaver, string jsonSavePath = null)
    {
        IFadeService fadeService = new FadeService();
        RegisterService<IFadeService>(fadeService);

        ISoundPlayer soundPlayer = new SoundPlayer(audioSource, openClip, closeClip);
        RegisterService<ISoundPlayer>(soundPlayer);

        ISaver saver;
        if (useJsonSaver)
        {
            saver = new JsonSaver(score, jsonSavePath);
        }
        else
        {
            saver = new PlayerPrefsSaver(score);
        }
        RegisterService<ISaver>(saver);

        RegisterService<Score>(score);
    }

    public void RegisterService<T> (T service)
    {
        Type type = typeof(T);
        if (!_services.ContainsKey(type))
        {
            _services.Add(type, service);
        }
        else
        {
            _services[type] = service;
        }
    }

    public T GetService<T> ()
    {
        Type type = typeof(T);
        if (_services.TryGetValue(type, out object service))
        {
            return (T)service;
        }

        return default;
    }
}
