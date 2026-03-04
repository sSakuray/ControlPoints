using UnityEngine;

[RequireComponent(typeof(SpriteRenderer))]
public class SkyController : MonoBehaviour, ITimeObserver
{
    [SerializeField] private DayCycleManager dayCycleManager;

    [SerializeField] private Color morningColor = new Color(1f, 0.6f, 0.3f, 1f);

    [SerializeField] private Color dayColor = new Color(0.53f, 0.81f, 0.98f, 1f);

    [SerializeField] private Color eveningColor = new Color(0.9f, 0.45f, 0.2f, 1f);

    [SerializeField] private Color nightColor = new Color(0.05f, 0.05f, 0.2f, 1f);

    private SpriteRenderer _spriteRenderer;

    private void Awake()
    {
        _spriteRenderer = GetComponent<SpriteRenderer>();
    }

    private void OnEnable()
    {
        if (dayCycleManager != null)
        {
            dayCycleManager.Subscribe(this);
        }
    }

    private void OnDisable()
    {
        if (dayCycleManager != null)
        {
            dayCycleManager.Unsubscribe(this);
        }
    }

    public void OnTimeChanged(float normalizedTime)
    {
        Color targetColor;

        if (normalizedTime < 0.25f)
        {
            float time = normalizedTime / 0.25f;
            targetColor = Color.Lerp(nightColor, morningColor, time);
        }
        else if (normalizedTime < 0.50f)
        {
            float time = (normalizedTime - 0.25f) / 0.25f;
            targetColor = Color.Lerp(morningColor, dayColor, time);
        }
        else if (normalizedTime < 0.75f)
        {
            float time = (normalizedTime - 0.50f) / 0.25f;
            targetColor = Color.Lerp(dayColor, eveningColor, time);
        }
        else
        {
            float time = (normalizedTime - 0.75f) / 0.25f;
            targetColor = Color.Lerp(eveningColor, nightColor, time);
        }

        _spriteRenderer.color = targetColor;
    }
}
