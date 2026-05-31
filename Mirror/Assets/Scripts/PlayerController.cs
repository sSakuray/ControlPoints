using Mirror;
using UnityEngine;

public class PlayerController : NetworkBehaviour
{
    public float moveSpeed = 5f;
    public GameObject bulletPrefab;
    public Transform firePoint;
    public float shootCooldown = 0.3f;
    public SpriteRenderer bodySprite;
    public static bool IsGameActive = false;
    private static readonly Color HostColor = new Color(0.2f, 0.5f, 1f);
    private static readonly Color ClientColor = new Color(1f, 0.3f, 0.3f);
    private Rigidbody2D _rb;
    private Camera _cam;
    private float _lastShotTime;

    [SyncVar(hook = nameof(OnColorChanged))]
    private Color _playerColor;

    public override void OnStartServer()
    {
        base.OnStartServer();
        _playerColor = NetworkServer.connections.Count <= 1 ? HostColor : ClientColor;
    }

    public override void OnStartLocalPlayer()
    {
        base.OnStartLocalPlayer();
        _cam = Camera.main;

        CameraFollow camFollow = _cam?.GetComponent<CameraFollow>();
        if (camFollow != null)
        {
            camFollow.target = transform;
        }
    }

    private void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
        _rb.freezeRotation = true;
    }

    private void Start()
    {
        if (bodySprite != null)
        {
            bodySprite.color = _playerColor;
        }

        if (!isLocalPlayer)
        {
            _rb.bodyType = RigidbodyType2D.Kinematic;
            _rb.linearVelocity = Vector2.zero;
        }
    }

    private void Update()
    {
        if (!isLocalPlayer)
        {
            return;
        }

        if (!IsGameActive)
        {
            _rb.linearVelocity = Vector2.zero;
            return;
        }

        HandleMovement();
        HandleShooting();
        HandleFlip();
    }

    private void HandleMovement()
    {
        float h = Input.GetAxisRaw("Horizontal");
        float v = Input.GetAxisRaw("Vertical");
        Vector2 dir = new Vector2(h, v).normalized;
        _rb.linearVelocity = dir * moveSpeed;
    }

    private void HandleFlip()
    {
        if (_cam == null)
        {
            return;
        }
        Vector3 mouseWorld = _cam.ScreenToWorldPoint(Input.mousePosition);
        Vector2 diff = (mouseWorld - transform.position);
        float angle = Mathf.Atan2(diff.y, diff.x) * Mathf.Rad2Deg;
        transform.rotation = Quaternion.Euler(0, 0, angle - 90f);
    }

    private void HandleShooting()
    {
        if (!Input.GetMouseButton(0))
        {
            return;
        }
        if (Time.time - _lastShotTime < shootCooldown)
        {
            return;
        }

        _lastShotTime = Time.time;

        Vector3 mouseWorld = _cam.ScreenToWorldPoint(Input.mousePosition);
        Vector2 shootDir = ((Vector2)(mouseWorld - transform.position)).normalized;

        if (firePoint != null)
        {
            CmdShoot(firePoint.position, shootDir);
        }
    }

    [Command]
    private void CmdShoot(Vector2 spawnPos, Vector2 direction)
    {
        if (bulletPrefab == null)
        {
            return;
        }

        GameObject bullet = Instantiate(bulletPrefab, spawnPos, Quaternion.identity);
        Bullet bulletScript = bullet.GetComponent<Bullet>();
        if (bulletScript != null)
        {
            bulletScript.Init(direction, netIdentity);
        }
        NetworkServer.Spawn(bullet);
        Destroy(bullet, 3f);
    }

    private void OnColorChanged(Color oldColor, Color newColor)
    {
        if (bodySprite != null)
        {
            bodySprite.color = newColor;
        }
    }
}
