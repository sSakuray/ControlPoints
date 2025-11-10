using UnityEngine;
using System.Collections.Generic;

[CreateAssetMenu(fileName = "NewAudioData", menuName = "Audio Data SO")]
public class AudioDataSO : ScriptableObject
{
    [Tooltip("Unique ID for this ScriptableObject")]
    public string uniqueID;

    [Space(10)]
    public AudioContentType contentType;

    [Space(10)]
    public List<AudioClipData> dangerousList = new List<AudioClipData>();
    public List<AudioClipData> friendlyList = new List<AudioClipData>();
    public List<AudioClipData> neutralList = new List<AudioClipData>();

    [Space(10)]
    [TextArea(5, 10)]
    public string panelText;
}
