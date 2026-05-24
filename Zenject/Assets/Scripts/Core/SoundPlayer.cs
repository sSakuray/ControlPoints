using UnityEngine;
using Zenject;

public class SoundPlayer : ISoundPlayer {
    private readonly AudioSource _audioSource;
    private readonly AudioClip _openClip;
    private readonly AudioClip _closeClip;
    private readonly AudioClip _shootClip;
    private readonly AudioClip _hitClip;

    [Inject]
    public SoundPlayer(AudioSource audioSource, [Inject(Id = "Open")] AudioClip openClip, [Inject(Id = "Close")] AudioClip closeClip, [InjectOptional(Id = "Shoot")] AudioClip shootClip, [InjectOptional(Id = "Hit")] AudioClip hitClip) 
    {
        _audioSource = audioSource;
        _openClip = openClip;
        _closeClip = closeClip;
        _shootClip = shootClip;
        _hitClip = hitClip;
    }

    public void PlayOpenSound() 
    { 
        _audioSource.PlayOneShot(_openClip); 
    }
    public void PlayCloseSound() 
    { 
        _audioSource.PlayOneShot(_closeClip); 
    }
    public void PlayShootSound() 
    { 
        if (_shootClip != null) 
        {
            _audioSource.PlayOneShot(_shootClip);
        }
    }
    public void PlayHitSound() 
    { 
        if (_hitClip != null)
        {
            _audioSource.PlayOneShot(_hitClip);    
        }
    }
}
