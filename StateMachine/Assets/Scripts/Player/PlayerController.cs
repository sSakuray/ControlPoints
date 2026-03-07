using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public PlayerInputHandler Input { get; private set; }
    public HUDController HUD { get; private set; }
    
    [Header("Components")]
    [SerializeField] private PlayerMovement _movement;
    
    [Header("Dependencies")]
    [SerializeField] private GameObject _projectilePrefab;
    [SerializeField] private Transform _shootPoint;
    [SerializeField] private GameObject _highlightSprite;
    [SerializeField] private SpriteRenderer _playerSprite;

    private Color _originalColor;
    private bool _isFinalState = false;

    public void Initialize(PlayerInputHandler input, HUDController hud)
    {
        Input = input;
        HUD = hud;
        
        if (_playerSprite != null)
        {
            _originalColor = _playerSprite.color;
        }
        
        if (_movement != null)
        {
            _movement.Initialize(input);
        }
            
        if (_highlightSprite != null)
        {
            _highlightSprite.SetActive(false);
        }
    }

    public void Shoot()
    {
        if (_isFinalState)
        {
            return;
        }
        Instantiate(_projectilePrefab, _shootPoint.position, _shootPoint.rotation);
    }

    public void SetHighlight(bool active)
    {
        if (_isFinalState)
        {
            return;
        }
        
        if (_highlightSprite != null)
        {
            _highlightSprite.SetActive(active);
        }
    }

    public void SetTransparency(bool transparent)
    {
        if (_isFinalState)
        {
            return;
        }
        
        if (_playerSprite != null)
        {
            Color color = _originalColor;
            color.a = transparent ? 0.3f : 1f;
            _playerSprite.color = color;
        }
    }

    public void SetFinalState()
    {
        _isFinalState = true;
        _playerSprite.color = Color.green;
        Color color = _playerSprite.color;
        color.a = 1f;
        _playerSprite.color = color;
        _highlightSprite.SetActive(false);
        _movement.SetCanMove(false);
    }
}
