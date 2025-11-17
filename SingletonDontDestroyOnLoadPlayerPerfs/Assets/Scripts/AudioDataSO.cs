using UnityEngine;
using System.Collections.Generic;
using UnityEditor;


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

[System.Serializable]
public class AudioClipData
{
    public AudioClip audioClip;
    [Range(0f, 1f)]
    public float volume = 1f;
}

public enum AudioContentType
{
    Dangerous,
    Friendly,
    Neutral
}

[CustomEditor(typeof(AudioDataSO))]
public class AudioDataSOEditor : Editor
{
    private bool showList = false;
    private bool showText = false;

    public override void OnInspectorGUI()
    {
        AudioDataSO audioData = (AudioDataSO)target;

        serializedObject.Update();

        EditorGUILayout.LabelField("Unique ID", EditorStyles.boldLabel);
        audioData.uniqueID = EditorGUILayout.TextField(audioData.uniqueID);

        EditorGUILayout.Space(10);

        EditorGUILayout.LabelField("Content Type", EditorStyles.boldLabel);
        audioData.contentType = (AudioContentType)EditorGUILayout.EnumPopup(audioData.contentType);

        EditorGUILayout.Space(15);

        EditorGUILayout.BeginHorizontal();

        if (GUILayout.Button("Show List"))
        {
            showList = true;
            showText = false;
        }

        if (GUILayout.Button("Show Text"))
        {
            showList = false;
            showText = true;
        }

        if (GUILayout.Button("Hide All"))
        {
            showList = false;
            showText = false;
        }

        EditorGUILayout.EndHorizontal();

        EditorGUILayout.Space(10);

        if (showList)
        {
            SerializedProperty listProperty = null;

            switch (audioData.contentType)
            {
                case AudioContentType.Dangerous:
                    listProperty = serializedObject.FindProperty("dangerousList");
                    EditorGUILayout.LabelField("Dangerous Audio Clips", EditorStyles.boldLabel);
                    break;
                case AudioContentType.Friendly:
                    listProperty = serializedObject.FindProperty("friendlyList");
                    EditorGUILayout.LabelField("Friendly Audio Clips", EditorStyles.boldLabel);
                    break;
                case AudioContentType.Neutral:
                    listProperty = serializedObject.FindProperty("neutralList");
                    EditorGUILayout.LabelField("Neutral Audio Clips", EditorStyles.boldLabel);
                    break;
            }

            if (listProperty != null)
            {
                EditorGUILayout.PropertyField(listProperty, true);
            }
        }

        if (showText)
        {
            EditorGUILayout.LabelField("Panel Text", EditorStyles.boldLabel);
            SerializedProperty textProp = serializedObject.FindProperty("panelText");
            EditorGUILayout.PropertyField(textProp, true);
        }

        serializedObject.ApplyModifiedProperties();
        EditorUtility.SetDirty(audioData);
    }
}