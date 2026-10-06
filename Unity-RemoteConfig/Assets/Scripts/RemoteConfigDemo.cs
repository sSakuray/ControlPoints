using UnityEngine;

// Makes the assignment demonstrable in any scene without manual setup.
public static class RemoteConfigDemo
{
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
    private static void CreateDemo()
    {
        if (UnityEngine.Object.FindFirstObjectByType<RemoteConfigLoader>() != null)
        {
            return;
        }
        var demo = new GameObject("Remote Config Demo");
        demo.AddComponent<Weapon>();
        demo.AddComponent<RemoteConfigLoader>();
    }
}


