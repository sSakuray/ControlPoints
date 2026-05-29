using UnityEngine;
using Zenject;

public struct SoundConfig 
{
    public AudioClip Open;
    public AudioClip Close;
    public AudioClip Shoot;
    public AudioClip Hit;
}

public class SoundPlayer : ISoundPlayer 
{
    private readonly AudioSource _audioSource;
    private readonly SoundConfig _config;

    [Inject]
    public SoundPlayer(AudioSource audioSource, SoundConfig config) 
    {
        _audioSource = audioSource;
        _config = config;
    }

    public void PlayOpenSound() 
    { 
        _audioSource.PlayOneShot(_config.Open); 
    }
    
    public void PlayCloseSound() 
    { 
        _audioSource.PlayOneShot(_config.Close); 
    }
    
    public void PlayShootSound() 
    { 
        if (_config.Shoot != null) 
        {
            _audioSource.PlayOneShot(_config.Shoot);
        }
    }
    
    public void PlayHitSound() 
    { 
        if (_config.Hit != null)
        {
            _audioSource.PlayOneShot(_config.Hit);    
        }
    }
}
