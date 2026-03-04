using UnityEngine;

public class SunController : MonoBehaviour, ITimeObserver
{
    [SerializeField] private DayCycleManager dayCycleManager;

    [SerializeField] private Vector2 arcCenter = new Vector2(0f, -3f);

    [SerializeField] private float arcRadius = 7f;

    [SerializeField] private float sunriseAngle = 180f;

    [SerializeField] private float zenithAngle = 90f;

    [SerializeField] private float sunsetAngle = 0f;

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
        float angle;

        if (normalizedTime <= 0.75f)
        {
            float time = normalizedTime / 0.75f;
            angle = Mathf.Lerp(sunriseAngle, sunsetAngle, time);

            SetAlpha(1f);
        }
        else
        {
            float time = (normalizedTime - 0.75f) / 0.25f;
            angle = Mathf.Lerp(sunsetAngle, sunriseAngle - 360f, time);
            SetAlpha(0f);
        }

        float rad = angle * Mathf.Deg2Rad;
        Vector2 pos = arcCenter + new Vector2(Mathf.Cos(rad), Mathf.Sin(rad)) * arcRadius;
        transform.position = new Vector3(pos.x, pos.y, transform.position.z);
    }

    private void SetAlpha(float alpha)
    {
        if (_spriteRenderer != null)
        {
            Color color = _spriteRenderer.color;
            color.a = alpha;
            _spriteRenderer.color = color;
        }
    }
}
