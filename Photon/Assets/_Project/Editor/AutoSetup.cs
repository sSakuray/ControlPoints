using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using System.IO;
using System.Reflection;

public class AutoSetup : EditorWindow
{
    private string _appId = "";

    [MenuItem("Tools/Auto Setup Multiplayer")]
    public static void ShowWindow()
    {
        GetWindow<AutoSetup>("Multiplayer Setup");
    }

    private void OnGUI()
    {
        GUILayout.Space(10);
        GUIStyle titleStyle = new(EditorStyles.boldLabel) { fontSize = 14 };
        GUILayout.Label("Photon Fusion Auto Setup", titleStyle);
        GUILayout.Space(10);

        if (!IsFusionInstalled())
        {
            EditorGUILayout.HelpBox(
                "Photon Fusion SDK not found!\n\n" +
                "1. Download: Open Download Page below\n" +
                "2. Import .unitypackage in Unity (Assets \u2192 Import Package \u2192 Custom Package)\n" +
                "3. Open this window again (Tools \u2192 Auto Setup Multiplayer)",
                MessageType.Error
            );

            if (GUILayout.Button("Open Download Page", GUILayout.Height(30)))
                Application.OpenURL("https://doc.photonengine.com/fusion/current/getting-started/sdk-download");

            if (GUILayout.Button("Open Asset Store", GUILayout.Height(30)))
                Application.OpenURL("https://assetstore.unity.com/packages/tools/network/photon-fusion-267958");

            return;
        }

        EditorGUILayout.HelpBox("Fusion SDK detected! Ready to setup.", MessageType.Info);
        GUILayout.Space(10);

        GUILayout.Label("Photon App ID (from dashboard.photonengine.com):");
        _appId = EditorGUILayout.TextField("App ID", _appId);

        GUILayout.Space(10);

        if (GUILayout.Button("1. Create Player Prefab", GUILayout.Height(25)))
            CreatePlayerPrefab();

        if (GUILayout.Button("2. Setup Scene", GUILayout.Height(25)))
            SetupScene();

        GUILayout.Space(5);

        if (GUILayout.Button("3. Setup ALL (recommended)", GUILayout.Height(40)))
        {
            CreatePlayerPrefab();
            SetupScene();
        }
    }

    private static bool IsFusionInstalled()
    {
        string[] checks = {
            "Photon/Fusion/Assemblies/Fusion.Runtime.dll",
            "Photon/Fusion/Runtime/Fusion.Runtime.dll",
            "Photon/Fusion/Fusion.Runtime.dll",
            "Photon/Fusion/Editor/Fusion.Unity.dll",
        };
        foreach (var path in checks)
        {
            string full = Path.Combine(Application.dataPath, path);
            if (File.Exists(full) || File.Exists(full + ".meta"))
                return true;
        }
        return false;
    }

    private static System.Type FindType(string typeName, string assemblyName)
    {
        foreach (var asm in System.AppDomain.CurrentDomain.GetAssemblies())
        {
            if (asm.GetName().Name == assemblyName)
                return asm.GetType(typeName);
        }
        return null;
    }

    private void CreatePlayerPrefab()
    {
        string folder = "Assets/_Project/Prefabs";
        if (!AssetDatabase.IsValidFolder(folder))
        {
            if (!AssetDatabase.IsValidFolder("Assets/_Project"))
                AssetDatabase.CreateFolder("Assets", "_Project");
            AssetDatabase.CreateFolder("Assets/_Project", "Prefabs");
        }

        string path = "Assets/_Project/Prefabs/Player.prefab";
        if (AssetDatabase.LoadAssetAtPath<GameObject>(path) != null)
        {
            EditorUtility.DisplayDialog("Already exists", "Player prefab already exists at:\n" + path, "OK");
            return;
        }

        GameObject obj = new("Player", typeof(SpriteRenderer));

        System.Type[] types = {
            FindType("Fusion.NetworkObject", "Fusion.Runtime"),
            FindType("Fusion.NetworkTransform", "Fusion.Runtime"),
            FindType("PlayerController", "Assembly-CSharp")
        };

        foreach (var t in types)
        {
            if (t != null) obj.AddComponent(t);
        }

        GameObject prefab = PrefabUtility.SaveAsPrefabAsset(obj, path);
        DestroyImmediate(obj);

        Selection.activeObject = prefab;
        EditorUtility.DisplayDialog("Created", "Player prefab created:\n" + path, "OK");
    }

    private void SetupScene()
    {
        Scene scene = SceneManager.GetActiveScene();
        if (string.IsNullOrEmpty(scene.name))
        {
            EditorUtility.DisplayDialog("Error", "Save the scene first!", "OK");
            return;
        }

        int group = Undo.GetCurrentGroup();
        Undo.SetCurrentGroupName("Setup Multiplayer Scene");

        GameObject gm = GameObject.Find("GameManager");
        if (gm == null)
        {
            gm = new GameObject("GameManager");
            Undo.RegisterCreatedObjectUndo(gm, "Create GameManager");
        }

        var gmType = FindType("GameManager", "Assembly-CSharp");
        if (gmType != null && gm.GetComponent(gmType) == null)
            gm.AddComponent(gmType);

        string prefabPath = "Assets/_Project/Prefabs/Player.prefab";
        GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath);

        if (prefab != null && gmType != null)
        {
            var gmComp = gm.GetComponent(gmType);
            if (gmComp != null)
            {
                var so = new SerializedObject(gmComp);
                so.Update();

                var prop = so.FindProperty("_playerPrefab");
                if (prop != null)
                {
                    prop.objectReferenceValue = prefab;
                    so.ApplyModifiedProperties();
                }
            }
        }

        AddSceneToBuildSettings(scene.path);

        if (!string.IsNullOrEmpty(_appId))
            TrySetAppId(_appId);

        EditorSceneManager.MarkSceneDirty(scene);
        EditorSceneManager.SaveScene(scene);

        Undo.CollapseUndoOperations(group);

        EditorUtility.DisplayDialog("Complete",
            "Scene setup complete!\n\n" +
            "Next steps:\n" +
            "1. Open Fusion \u2192 Realtime Settings\n" +
            "2. Verify App ID is set\n" +
            "3. Build: File \u2192 Build And Run\n" +
            "4. Run Editor (host) + build (client)", "OK");
    }

    private static void TrySetAppId(string appId)
    {
        var settingsType = FindType("Fusion.Photon.PhotonAppSettings", "Fusion.Runtime")
                        ?? FindType("Fusion.PhotonAppSettings", "Fusion.Runtime");

        if (settingsType == null)
        {
            var so = FindAppSettingsAsset();
            if (so != null)
            {
                SetAppIdOnSerializedObject(so, appId);
            }
            return;
        }

        var instanceProp = settingsType.GetProperty("Instance",
            BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic);
        if (instanceProp == null)
        {
            var so = FindAppSettingsAsset();
            if (so != null) SetAppIdOnSerializedObject(so, appId);
            return;
        }

        var instance = instanceProp.GetValue(null);
        if (instance == null)
        {
            var so = FindAppSettingsAsset();
            if (so != null) SetAppIdOnSerializedObject(so, appId);
            return;
        }

        var serialized = new SerializedObject((UnityEngine.Object)instance);
        SetAppIdOnSerializedObject(serialized, appId);
    }

    private static SerializedObject FindAppSettingsAsset()
    {
        string[] guids = AssetDatabase.FindAssets("PhotonAppSettings t:ScriptableObject");
        if (guids.Length == 0) return null;

        string path = AssetDatabase.GUIDToAssetPath(guids[0]);
        var asset = AssetDatabase.LoadAssetAtPath<ScriptableObject>(path);
        return asset != null ? new SerializedObject(asset) : null;
    }

    private static void SetAppIdOnSerializedObject(SerializedObject so, string appId)
    {
        so.Update();
        var prop = so.FindProperty("_appSettings._appIdFusion")
                ?? so.FindProperty("AppSettings._appIdFusion")
                ?? so.FindProperty("appSettings._appIdFusion")
                ?? so.FindProperty("_appIdFusion")
                ?? so.FindProperty("AppIdFusion")
                ?? so.FindProperty("appIdFusion");

        if (prop != null && prop.propertyType == SerializedPropertyType.String)
        {
            prop.stringValue = appId;
            so.ApplyModifiedProperties();
            AssetDatabase.SaveAssets();
            Debug.Log("Fusion App ID set: " + appId);
        }
    }

    private static void AddSceneToBuildSettings(string scenePath)
    {
        var scenes = EditorBuildSettings.scenes;
        foreach (var s in scenes)
            if (s.path == scenePath) return;

        var list = new System.Collections.Generic.List<EditorBuildSettingsScene>(scenes)
        {
            new(scenePath, true)
        };
        EditorBuildSettings.scenes = list.ToArray();
    }
}
