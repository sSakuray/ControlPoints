using UnityEngine;
using TMPro;

public class PlayerView : MonoBehaviour
{
    [Header("Sprite Settings")]
    [SerializeField] private SpriteRenderer spriteRenderer;
    
    private TMP_Text healthText;
    
    [Header("Health Colors")]
    [SerializeField] private Color fullHealthColor = Color.green;
    [SerializeField] private Color midHealthColor = Color.yellow;
    [SerializeField] private Color lowHealthColor = Color.red;
    [SerializeField] private Color deadColor = Color.gray;

    [Header("Live Sprites")]
    [SerializeField] private Sprite fullHealthSprite;
    [SerializeField] private Sprite midHealthSprite;
    [SerializeField] private Sprite lowHealthSprite;
    [SerializeField] private Sprite deadSprite;

    private void Awake()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    public void SetHealthText(TMP_Text text)
    {
        healthText = text;
    }

    public void UpdateHealthText(int currentHealth, int maxHealth)
    {
        healthText.text = $"HP: {currentHealth}/{maxHealth}";
    }

    public void UpdatePlayerAppearance(int currentHealth, int maxHealth)
    {
        float healthPercent = (float)currentHealth / maxHealth;

        UpdateSpriteColor(healthPercent);
        UpdateSprite(healthPercent);
    }

    private void UpdateSpriteColor(float healthPercent)
    {
        if (healthPercent <= 0f)
        {
            spriteRenderer.color = deadColor;
        }
        else if (healthPercent <= 0.25f)
        {
            spriteRenderer.color = lowHealthColor;
        }
        else if (healthPercent <= 0.5f)
        {
            spriteRenderer.color = midHealthColor;
        }
        else
        {
            spriteRenderer.color = fullHealthColor;
        }
    }

    private void UpdateSprite(float healthPercent)
    {
        Sprite targetSprite = null;

        if (healthPercent <= 0f && deadSprite != null)
        {
            targetSprite = deadSprite;
        }
        else if (healthPercent <= 0.25f && lowHealthSprite != null)
        {
            targetSprite = lowHealthSprite;
        }
        else if (healthPercent <= 0.5f && midHealthSprite != null)
        {
            targetSprite = midHealthSprite;
        }
        else if (fullHealthSprite != null)
        {
            targetSprite = fullHealthSprite;
        }

        if (targetSprite != null)
        {
            spriteRenderer.sprite = targetSprite;
        }
    }

    public void ShowDeathEffect()
    {
        spriteRenderer.color = deadColor;
        if (deadSprite != null)
        {
            spriteRenderer.sprite = deadSprite;
        }

        healthText.text = "DEAD";
        healthText.color = Color.red;
    }

    public void UpdatePosition(Vector2 position)
    {
        transform.position = new Vector3(position.x, position.y, transform.position.z);
    }
}
