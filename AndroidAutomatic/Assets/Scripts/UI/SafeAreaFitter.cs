using UnityEngine;

namespace SafeAreaDemo
{
    public class SafeAreaFitter : MonoBehaviour
    {
        private RectTransform rectTransform;
        private Rect lastSafeArea = Rect.zero;
        private Vector2Int lastScreenSize = Vector2Int.zero;
        private ScreenOrientation lastOrientation = (ScreenOrientation)(-1);

        private void Awake()
        {
            rectTransform = GetComponent<RectTransform>();
        }

        private void Start()
        {
            ApplySafeArea();
        }

        private void Update()
        {
            if (Screen.safeArea != lastSafeArea ||
                Screen.width != lastScreenSize.x ||
                Screen.height != lastScreenSize.y ||
                Screen.orientation != lastOrientation)
            {
                ApplySafeArea();
            }
        }

        private void ApplySafeArea()
        {
            if (rectTransform == null)
            {
                rectTransform = GetComponent<RectTransform>();
            }

            Rect safeArea = Screen.safeArea;
            int screenWidth = Screen.width;
            int screenHeight = Screen.height;

            if (screenWidth <= 0 || screenHeight <= 0) return;

            Vector2 anchorMin = safeArea.position;
            Vector2 anchorMax = safeArea.position + safeArea.size;

            anchorMin.x /= screenWidth;
            anchorMin.y /= screenHeight;
            anchorMax.x /= screenWidth;
            anchorMax.y /= screenHeight;

            rectTransform.anchorMin = anchorMin;
            rectTransform.anchorMax = anchorMax;
            rectTransform.offsetMin = Vector2.zero;
            rectTransform.offsetMax = Vector2.zero;

            lastSafeArea = safeArea;
            lastScreenSize = new Vector2Int(screenWidth, screenHeight);
            lastOrientation = Screen.orientation;
        }
    }
}
