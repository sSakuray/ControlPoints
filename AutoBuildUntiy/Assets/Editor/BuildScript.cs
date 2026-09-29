using UnityEditor;
using UnityEngine;

public class BuildScript
{
    [MenuItem("Build/Build All")]
    public static void BuildAll()
    {
        Debug.Log("Запуск сборки...");
        BuildWindows();
        BuildAndroid();
        Debug.Log("Сборка завершена.");
    }

    [MenuItem("Build/Windows")]
    public static void BuildWindows()
    {
        Debug.Log("Начало сборки под Windows.");
        BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, "Builds/Windows/Game.exe", BuildTarget.StandaloneWindows64, BuildOptions.None);
        Debug.Log("Сборка под Windows завершена: Builds/Windows/Game.exe");
    }

    [MenuItem("Build/Android")]
    public static void BuildAndroid()
    {
        Debug.Log("Начало сборки под Android.");
        EditorUserBuildSettings.buildAppBundle = false;
        BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, "Builds/Android/Game.apk", BuildTarget.Android, BuildOptions.None);
        Debug.Log("Сборка под Android завершена: Builds/Android/Game.apk");
    }

    [MenuItem("Build/WebGL")]
    public static void BuildWebGL()
    {
        Debug.Log("Начало сборки под WebGL...");
        BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, "Builds/WebGL", BuildTarget.WebGL, BuildOptions.None);
        Debug.Log("Сборка под WebGL завершена: Builds/WebGL");
    }
}
