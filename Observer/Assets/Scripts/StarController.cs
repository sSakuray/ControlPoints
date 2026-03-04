using UnityEngine;

public class StarController : MonoBehaviour, ITimeObserver
{
    [SerializeField] private DayCycleManager dayCycleManager;

    private SpriteRenderer[] _starRenderers;

    private void Awake()
    {
        _starRenderers = GetComponentsInChildren<SpriteRenderer>();
    }

    private void OnEnable()
    {
        if (dayCycleManager != null)
            dayCycleManager.Subscribe(this);
    }

    private void OnDisable()
    {
        if (dayCycleManager != null)
            dayCycleManager.Unsubscribe(this);
    }

    public void OnTimeChanged(float normalizedTime)
    {
        float alpha;

        if (normalizedTime < 0.25f)
        {
            float time = normalizedTime / 0.25f;
            alpha = Mathf.Lerp(1f, 0f, time);
        }
        else if (normalizedTime < 0.50f)
        {
            alpha = 0f;
        }
        else if (normalizedTime < 0.75f)
        {
            float time = (normalizedTime - 0.50f) / 0.25f;
            alpha = Mathf.Lerp(0f, 1f, time);
        }
        else
        {
            alpha = 1f;
        }

        SetAlpha(alpha);
    }

    private void SetAlpha(float alpha)
    {
        foreach (var starRenderer in _starRenderers)
        {
            Color color = starRenderer.color;
            color.a = alpha;
            starRenderer.color = color;
        }
    }
}
