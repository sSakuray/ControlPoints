using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.EventSystems;
using TMPro;

public static class FixPlayworksBuild
{
    [MenuItem("Tools/Clicker Playable/Fix Playworks Settings")]
    public static void ApplyFixes()
    {
        if (EditorApplication.isPlayingOrWillChangePlaymode) return;

        GraphicsSettings.defaultRenderPipeline = null;
        QualitySettings.renderPipeline = null;

        TMP_FontAsset font = Resources.Load<TMP_FontAsset>("Fonts & Materials/LiberationSans SDF");
        if (font != null && font.fallbackFontAssetTable != null && font.fallbackFontAssetTable.Count > 0)
        {
            font.fallbackFontAssetTable.Clear();
            EditorUtility.SetDirty(font);
        }

        if (TMP_Settings.fallbackFontAssets != null && TMP_Settings.fallbackFontAssets.Count > 0)
        {
            TMP_Settings.fallbackFontAssets.Clear();
        }

        EventSystem eventSystem = Object.FindAnyObjectByType<EventSystem>();
        if (eventSystem != null)
        {
            BaseInputModule[] modules = eventSystem.GetComponents<BaseInputModule>();
            foreach (var m in modules)
            {
                if (!(m is StandaloneInputModule))
                {
                    Object.DestroyImmediate(m);
                }
            }
            if (eventSystem.GetComponent<StandaloneInputModule>() == null)
            {
                eventSystem.gameObject.AddComponent<StandaloneInputModule>();
            }
            EditorUtility.SetDirty(eventSystem.gameObject);
            
            if (!Application.isPlaying)
            {
                UnityEditor.SceneManagement.EditorSceneManager.MarkSceneDirty(eventSystem.gameObject.scene);
                UnityEditor.SceneManagement.EditorSceneManager.SaveScene(eventSystem.gameObject.scene);
            }
        }

        AssetDatabase.SaveAssets();
        Debug.Log("[FixPlayworksBuild] Successfully set Built-in Pipeline, cleaned TMP fallbacks, and fixed EventSystem!");
    }
}
