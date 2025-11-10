using UnityEngine;
using System.Collections.Generic;

public class AudioManager : MonoBehaviour
{
    [SerializeField] private AudioDataSO audioData;
    [SerializeField] private AudioSource audioSource;

    private void Start()
    {
        if (audioSource == null)
        {
            audioSource = gameObject.AddComponent<AudioSource>();
        }

        PlayRandomFromCurrentType();
    }

    public List<AudioClipData> GetCurrentList()
    {
        switch (audioData.contentType)
        {
            case AudioContentType.Dangerous:
                return audioData.dangerousList;
            case AudioContentType.Friendly:
                return audioData.friendlyList;
            case AudioContentType.Neutral:
                return audioData.neutralList;
            default:
                return new List<AudioClipData>();
        }
    }

    public void PlayAudioByIndex(int index)
    {
        List<AudioClipData> list = GetCurrentList();
        PlayAudioClipData(list[index]);
    }

    public void PlayRandomFromCurrentType()
    {
        List<AudioClipData> list = GetCurrentList();
        int randomIndex = Random.Range(0, list.Count);
        PlayAudioClipData(list[randomIndex]);
    }

    private void PlayAudioClipData(AudioClipData clipData)
    {
        audioSource.clip = clipData.audioClip;
        audioSource.volume = clipData.volume;
        audioSource.Play();
    }

    public List<AudioClipData> GetListByType(AudioContentType type)
    {
        switch (type)
        {
            case AudioContentType.Dangerous:
                return audioData.dangerousList;
            case AudioContentType.Friendly:
                return audioData.friendlyList;
            case AudioContentType.Neutral:
                return audioData.neutralList;
            default:
                return new List<AudioClipData>();
        }
    }

    public void PlayFromType(AudioContentType type, int index)
    {
        List<AudioClipData> list = GetListByType(type);
        PlayAudioClipData(list[index]);
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            PlayRandomFromCurrentType();
        }

        if (Input.GetKeyDown(KeyCode.Alpha1))
        {
            PlayAudioByIndex(0);
        }

        if (Input.GetKeyDown(KeyCode.Alpha2))
        {
            PlayAudioByIndex(1);
        }

        if (Input.GetKeyDown(KeyCode.Alpha3))
        {
            PlayAudioByIndex(2);
        }
    }
}
