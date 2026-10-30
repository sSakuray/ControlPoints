#if UNITY_EDITOR
using System.IO;
using TMPro;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.InputSystem.UI;
using UnityEngine.UI;
using SafeAreaDemo;

namespace SafeAreaDemo.Editor
{
    [InitializeOnLoad]
    public static class SafeAreaSceneBuilder
    {
        private const string DemoScenePath = "Assets/Scenes/SafeAreaDemo.unity";

        static SafeAreaSceneBuilder()
        {
            EditorApplication.delayCall += AutoEnsureScene;
        }

        private static void AutoEnsureScene()
        {
            if (!File.Exists(DemoScenePath))
            {
                CreateDemoScene();
            }
        }

        [MenuItem("Tools/Safe Area/1. Сгенерировать демо-сцену (SafeAreaDemo)")]
        public static void CreateDemoScene()
        {
            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);

            // 1. Camera
            var cameraObj = new GameObject("Main Camera");
            var camera = cameraObj.AddComponent<Camera>();
            camera.clearFlags = CameraClearFlags.SolidColor;
            camera.backgroundColor = new Color(0.08f, 0.10f, 0.16f, 1f);
            camera.orthographic = true;
            camera.orthographicSize = 5f;
            cameraObj.AddComponent<AudioListener>();

            // 2. Чистая иерархия по ТЗ
            BuildHierarchy();

            // 3. Сохранение сцены
            Directory.CreateDirectory(Path.GetDirectoryName(DemoScenePath));
            EditorSceneManager.SaveScene(scene, DemoScenePath);
            Debug.Log($"[SafeAreaSceneBuilder] Демо-сцена успешно создана: {DemoScenePath}");

            AddSceneToBuildSettings(DemoScenePath);
            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
        }

        [MenuItem("Tools/Safe Area/2. Добавить Safe Area UI в текущую открытую сцену")]
        public static void SetupInActiveScene()
        {
            BuildHierarchy();
            EditorSceneManager.MarkSceneDirty(EditorSceneManager.GetActiveScene());
            Debug.Log($"[SafeAreaSceneBuilder] Safe Area UI добавлен в сцену: {EditorSceneManager.GetActiveScene().name}");
        }

        [MenuItem("Tools/Safe Area/3. Открыть демо-сцену (SafeAreaDemo)")]
        public static void OpenDemoScene()
        {
            if (File.Exists(DemoScenePath))
            {
                EditorSceneManager.OpenScene(DemoScenePath);
            }
            else
            {
                CreateDemoScene();
            }
        }

        /// <summary>
        /// Создает строго требуемые компоненты:
        /// - Canvas с CanvasScaler (Scale With Screen Size, 1080x1920)
        /// - Background (вне SafeAreaPanel, на весь экран)
        /// - SafeAreaPanel с SafeAreaFitter
        /// - TopBar с логотипом/текстом (вверху)
        /// - Кнопка LeftAction (нижний левый угол)
        /// - Кнопка RightAction (нижний правый угол)
        /// </summary>
        private static void BuildHierarchy()
        {
            // 1. EventSystem
            var existingEventSystem = Object.FindFirstObjectByType<EventSystem>();
            if (existingEventSystem == null)
            {
                var eventSystemObj = new GameObject("EventSystem");
                eventSystemObj.AddComponent<EventSystem>();
                eventSystemObj.AddComponent<InputSystemUIInputModule>();
            }

            // 2. Canvas
            var existingCanvas = GameObject.Find("Canvas");
            if (existingCanvas != null)
            {
                Object.DestroyImmediate(existingCanvas);
            }

            var canvasObj = new GameObject("Canvas");
            var canvas = canvasObj.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;

            var scaler = canvasObj.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1080, 1920); // Вертикальное Full HD
            scaler.screenMatchMode = CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
            scaler.matchWidthOrHeight = 0.5f;

            canvasObj.AddComponent<GraphicRaycaster>();

            // 3. Чистый фон (Background) — ВНЕ SafeAreaPanel, на весь экран (заходит под вырез)
            var bgObj = new GameObject("Background");
            bgObj.transform.SetParent(canvasObj.transform, false);
            var bgRect = bgObj.AddComponent<RectTransform>();
            bgRect.anchorMin = Vector2.zero;
            bgRect.anchorMax = Vector2.one;
            bgRect.offsetMin = Vector2.zero;
            bgRect.offsetMax = Vector2.zero;

            var bgImage = bgObj.AddComponent<Image>();
            bgImage.color = new Color(0.09f, 0.12f, 0.18f, 1f); // Спокойный тёмный фон игры без лишних надписей

            // 4. SafeAreaPanel — чистый прозрачный контейнер с компонентом SafeAreaFitter
            var safeAreaObj = new GameObject("SafeAreaPanel");
            safeAreaObj.transform.SetParent(canvasObj.transform, false);
            var safeAreaRect = safeAreaObj.AddComponent<RectTransform>();
            safeAreaRect.anchorMin = Vector2.zero;
            safeAreaRect.anchorMax = Vector2.one;
            safeAreaRect.offsetMin = Vector2.zero;
            safeAreaRect.offsetMax = Vector2.zero;

            safeAreaObj.AddComponent<SafeAreaFitter>();
            var hud = safeAreaObj.AddComponent<SafeAreaDemoHUD>();

            // 5. TopBar с логотипом/текстом (в верхней части внутри SafeAreaPanel)
            var topBarObj = new GameObject("TopBar");
            topBarObj.transform.SetParent(safeAreaObj.transform, false);
            var topBarRect = topBarObj.AddComponent<RectTransform>();
            topBarRect.anchorMin = new Vector2(0f, 1f);
            topBarRect.anchorMax = new Vector2(1f, 1f);
            topBarRect.pivot = new Vector2(0.5f, 1f);
            topBarRect.anchoredPosition = Vector2.zero;
            topBarRect.sizeDelta = new Vector2(0f, 140f);

            var topBarImage = topBarObj.AddComponent<Image>();
            topBarImage.color = new Color(0.13f, 0.17f, 0.25f, 0.95f);

            var titleObj = CreateTMPText("TitleText", topBarObj.transform, "TOP BAR", 36, FontStyles.Bold, TextAlignmentOptions.Center, Color.white);
            var titleRect = titleObj.GetComponent<RectTransform>();
            titleRect.anchorMin = Vector2.zero;
            titleRect.anchorMax = Vector2.one;
            titleRect.offsetMin = Vector2.zero;
            titleRect.offsetMax = Vector2.zero;

            // 6. Кнопка LeftAction (нижний левый угол)
            var leftBtnObj = CreateButton(
                "LeftAction",
                safeAreaObj.transform,
                "LeftAction",
                new Color(0.18f, 0.48f, 0.85f),
                anchor: new Vector2(0f, 0f),
                size: new Vector2(340f, 120f),
                pivot: new Vector2(0f, 0f),
                offset: new Vector2(30f, 30f)
            );

            // 7. Кнопка RightAction (нижний правый угол)
            var rightBtnObj = CreateButton(
                "RightAction",
                safeAreaObj.transform,
                "RightAction",
                new Color(0.85f, 0.35f, 0.25f),
                anchor: new Vector2(1f, 0f),
                size: new Vector2(340f, 120f),
                pivot: new Vector2(1f, 0f),
                offset: new Vector2(-30f, 30f)
            );

            // 8. Привязка кнопок к скрипту HUD
            var hudSo = new SerializedObject(hud);
            hudSo.FindProperty("leftActionButton").objectReferenceValue = leftBtnObj.GetComponent<Button>();
            hudSo.FindProperty("rightActionButton").objectReferenceValue = rightBtnObj.GetComponent<Button>();
            hudSo.ApplyModifiedProperties();
        }

        private static GameObject CreateTMPText(string name, Transform parent, string content, float fontSize, FontStyles style, TextAlignmentOptions align, Color color)
        {
            var obj = new GameObject(name);
            obj.transform.SetParent(parent, false);
            var tmp = obj.AddComponent<TextMeshProUGUI>();
            tmp.text = content;
            tmp.fontSize = fontSize;
            tmp.fontStyle = style;
            tmp.alignment = align;
            tmp.color = color;
            return obj;
        }

        private static GameObject CreateButton(string name, Transform parent, string text, Color color, Vector2 anchor, Vector2 size, Vector2? pivot = null, Vector2? offset = null)
        {
            var btnObj = new GameObject(name);
            btnObj.transform.SetParent(parent, false);
            var rect = btnObj.AddComponent<RectTransform>();
            rect.anchorMin = anchor;
            rect.anchorMax = anchor;
            rect.pivot = pivot ?? new Vector2(0.5f, 0.5f);
            rect.sizeDelta = size;
            rect.anchoredPosition = offset ?? Vector2.zero;

            var img = btnObj.AddComponent<Image>();
            img.color = color;

            var btn = btnObj.AddComponent<Button>();
            var colors = btn.colors;
            colors.highlightedColor = color * 1.15f;
            colors.pressedColor = color * 0.85f;
            btn.colors = colors;

            var labelObj = CreateTMPText("Text", btnObj.transform, text, 26, FontStyles.Bold, TextAlignmentOptions.Center, Color.white);
            var labelRect = labelObj.GetComponent<RectTransform>();
            labelRect.anchorMin = Vector2.zero;
            labelRect.anchorMax = Vector2.one;
            labelRect.offsetMin = Vector2.zero;
            labelRect.offsetMax = Vector2.zero;

            return btnObj;
        }

        private static void AddSceneToBuildSettings(string path)
        {
            var scenes = EditorBuildSettings.scenes;
            foreach (var s in scenes)
            {
                if (s.path == path) return;
            }

            var newScenes = new EditorBuildSettingsScene[scenes.Length + 1];
            for (int i = 0; i < scenes.Length; i++)
                newScenes[i] = scenes[i];

            newScenes[scenes.Length] = new EditorBuildSettingsScene(path, true);
            EditorBuildSettings.scenes = newScenes;
        }
    }
}
#endif
