using UnityEngine;
using UnityEngine.UI;

#if UNITY_EDITOR
using UnityEditor;

public class SceneAutoSetup : MonoBehaviour
{
    [MenuItem("TMA/Auto Setup")]
    public static void Setup()
    {
        Canvas canvas = FindObjectOfType<Canvas>();
        if (!canvas) 
        {
            GameObject cObj = new GameObject("TMA_Canvas", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            canvas = cObj.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        }

        if (!FindObjectOfType<UnityEngine.EventSystems.EventSystem>())
            new GameObject("EventSystem", typeof(UnityEngine.EventSystems.EventSystem), typeof(UnityEngine.EventSystems.StandaloneInputModule));

        GameObject auth = GetOrCreate("AuthPanel", canvas.transform);
        GameObject game = GetOrCreate("GamePanel", canvas.transform);
        
        GameObject app = GameObject.Find("AppManager") ?? new GameObject("AppManager");
        var am = app.GetComponent<AuthManager>() ?? app.AddComponent<AuthManager>();
        var cg = app.GetComponent<ClickerGame>() ?? app.AddComponent<ClickerGame>();

        am.loginSubPanel = GetOrCreate("LoginPanel", auth.transform);
        am.registerSubPanel = GetOrCreate("RegisterPanel", auth.transform);
        am.gamePanel = game;

        auth.SetActive(true);
        game.SetActive(false);
        Selection.activeGameObject = app;
    }

    static GameObject GetOrCreate(string name, Transform parent)
    {
        GameObject obj = GameObject.Find(name) ?? new GameObject(name, typeof(RectTransform));
        obj.transform.SetParent(parent, false);
        return obj;
    }
}
#endif
