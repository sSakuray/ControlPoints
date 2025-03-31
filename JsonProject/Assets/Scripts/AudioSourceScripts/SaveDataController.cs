using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using Newtonsoft.Json;

public class SaveDataController : MonoBehaviour
{
    public AudioSource audioSource;
    public Slider volumeSlider;
    private string soundDataPath;

    void Awake()
    {
        soundDataPath = Path.Combine(Application.dataPath, "Resources/SoundData.txt");
    }

    void Start()
    {
        InitializeVolumeControls();
    }

    void InitializeVolumeControls()
    {
        LoadVolume();

        if (volumeSlider != null)
        {
            volumeSlider.value = audioSource.volume;
            
            volumeSlider.onValueChanged.AddListener(HandleVolumeChange);
        }
    }

    void HandleVolumeChange(float newVolume)
    {
        audioSource.volume = newVolume;
        SaveVolume();
    }

    void LoadVolume()
    {
        TextAsset soundFile = Resources.Load<TextAsset>("SoundData");
        if (soundFile != null)
        {
            SoundData data = JsonConvert.DeserializeObject<SoundData>(soundFile.text);
            audioSource.volume = data.volume;
            Debug.Log($"Громкость: {data.volume}");
        }
        else
        {
            SaveVolume(); 
        }
    }

    void SaveVolume()
    {
        SoundData data = new SoundData { volume = audioSource.volume };
        string json = JsonConvert.SerializeObject(data);
        File.WriteAllText(soundDataPath, json);
        
        #if UNITY_EDITOR
        UnityEditor.AssetDatabase.Refresh();
        #endif
    }
}