using UnityEngine;
using UnityEditor;

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
            EditorGUILayout.LabelField("Audio Clips List", EditorStyles.boldLabel);
            
            SerializedProperty listProperty = null;
            
            switch (audioData.contentType)
            {
                case AudioContentType.Dangerous:
                    listProperty = serializedObject.FindProperty("dangerousList");
                    EditorGUILayout.LabelField("Type: Dangerous", EditorStyles.helpBox);
                    break;
                case AudioContentType.Friendly:
                    listProperty = serializedObject.FindProperty("friendlyList");
                    EditorGUILayout.LabelField("Type: Friendly", EditorStyles.helpBox);
                    break;
                case AudioContentType.Neutral:
                    listProperty = serializedObject.FindProperty("neutralList");
                    EditorGUILayout.LabelField("Type: Neutral", EditorStyles.helpBox);
                    break;
            }

            if (listProperty != null)
            {
                EditorGUILayout.Space(5);
                
                EditorGUILayout.BeginHorizontal();
                if (GUILayout.Button("Add Element"))
                {
                    listProperty.arraySize++;
                }
                if (GUILayout.Button("Remove Last") && listProperty.arraySize > 0)
                {
                    listProperty.arraySize--;
                }
                EditorGUILayout.EndHorizontal();
                
                EditorGUILayout.Space(5);

                for (int i = 0; i < listProperty.arraySize; i++)
                {
                    EditorGUILayout.BeginVertical("box");
                    EditorGUILayout.LabelField($"Element {i}", EditorStyles.boldLabel);
                    
                    SerializedProperty element = listProperty.GetArrayElementAtIndex(i);
                    SerializedProperty audioClipProp = element.FindPropertyRelative("audioClip");
                    SerializedProperty volumeProp = element.FindPropertyRelative("volume");

                    EditorGUILayout.PropertyField(audioClipProp, new GUIContent("AudioClip"));
                    
                    EditorGUILayout.BeginHorizontal();
                    EditorGUILayout.LabelField("Volume", GUILayout.Width(80));
                    volumeProp.floatValue = EditorGUILayout.Slider(volumeProp.floatValue, 0f, 1f);
                    EditorGUILayout.EndHorizontal();
                    
                    EditorGUILayout.EndVertical();
                    EditorGUILayout.Space(5);
                }
            }
        }

        if (showText)
        {
            EditorGUILayout.LabelField("Panel Text", EditorStyles.boldLabel);
            SerializedProperty textProperty = serializedObject.FindProperty("panelText");
            EditorGUILayout.PropertyField(textProperty, GUIContent.none, GUILayout.Height(100));
        }

        serializedObject.ApplyModifiedProperties();

        if (GUI.changed)
        {
            EditorUtility.SetDirty(audioData);
        }
    }
}
