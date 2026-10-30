#if UNITY_EDITOR
using System;
using System.IO;
using UnityEditor;
using UnityEditor.Build.Reporting;
using UnityEngine;
using FlappyComet.Advertising;

[CustomEditor(typeof(AdsService))]
public class AdsServiceEditor : Editor
{
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();

        var ads = (AdsService)target;

        EditorGUILayout.Space(15);
        EditorGUILayout.LabelField("Тестовое управление рекламой (в Play Mode)", EditorStyles.boldLabel);

        using (new EditorGUI.DisabledScope(!Application.isPlaying))
        {
            if (GUILayout.Button("Показать баннер (внизу по центру)"))
            {
                ads.ShowBanner();
            }

            if (GUILayout.Button("Скрыть баннер"))
            {
                ads.HideBanner();
            }

            EditorGUILayout.Space(5);

            if (GUILayout.Button("Загрузить Rewarded видео"))
            {
                ads.LoadRewarded();
            }

            using (new EditorGUI.DisabledScope(!ads.IsRewardedReady))
            {
                if (GUILayout.Button("Показать Rewarded видео"))
                {
                    ads.ShowRewarded(null);
                }
            }
        }

        if (!Application.isPlaying)
        {
            EditorGUILayout.HelpBox("Кнопки показа рекламы активны во время игры (Play Mode).", MessageType.Info);
        }
    }
}

public static class AdsBuild
{
    [MenuItem("Tools/Build Android APK")]
    public static void BuildAndroid()
    {
        string output = Environment.GetEnvironmentVariable("FLAPPY_APK_PATH");
        if (string.IsNullOrEmpty(output)) output = "Builds/FlappyCometAds.apk";

        Directory.CreateDirectory(Path.GetDirectoryName(Path.GetFullPath(output)));

        var report = BuildPipeline.BuildPlayer(new BuildPlayerOptions
        {
            scenes = new[] { "Assets/Scenes/SampleScene.unity" },
            locationPathName = output,
            target = BuildTarget.Android,
            options = BuildOptions.Development
        });

        Debug.Log($"[Build] Результат: {report.summary.result} | Ошибок: {report.summary.totalErrors}");
        if (report.summary.result != BuildResult.Succeeded)
        {
            throw new Exception("Сборка Android APK завершилась с ошибкой.");
        }
    }
}
#endif
