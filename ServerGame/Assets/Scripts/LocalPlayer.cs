using UnityEngine;

/// <summary>
/// Управляет ЛОКАЛЬНЫМ игроком.
/// Клиентская предикция: двигает персонажа сразу (без ожидания сервера),
/// затем плавно корректирует по авторитетным данным с сервера.
/// </summary>
[RequireComponent(typeof(SpriteRenderer))]
public class LocalPlayer : MonoBehaviour
{
    [Tooltip("Должна совпадать с SPEED на сервере")]
    public float Speed         = 200f;
    public float ShootCooldown = 0.4f;

    public bool IsDead; // устанавливается из GameBootstrap

    private SpriteRenderer _sr;
    private float          _shootTimer;

    void Awake() => _sr = GetComponent<SpriteRenderer>();

    public void Spawn(Vector2 pos)
    {
        transform.position = new Vector3(pos.x, pos.y, 0f);
        IsDead = false;
    }

    /// <summary>Плавная/снэп коррекция по серверной позиции.</summary>
    public void CorrectPosition(Vector2 srv)
    {
        float d = Vector2.Distance(transform.position, srv);
        if      (d > 80f) transform.position = new Vector3(srv.x, srv.y, 0f);
        else if (d >  4f) transform.position = Vector2.Lerp(transform.position, srv, 0.10f);
    }

    void Update()
    {
        if (IsDead || !NetworkManager.Instance.IsConnected) return;

        // Движение
        float ix   = Input.GetAxisRaw("Horizontal");
        float iy   = Input.GetAxisRaw("Vertical");
        var   inp   = new Vector2(ix, iy);
        if (inp.sqrMagnitude > 1f) inp.Normalize();
        transform.position += (Vector3)(inp * Speed * Time.deltaTime);

        // Разворот к мыши
        Vector3 mw     = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        float   facing = mw.x >= transform.position.x ? 1f : -1f;
        _sr.flipX = facing < 0f;

        // Отправляем ввод серверу каждый кадр
        NetworkManager.Instance.SendInput(inp.x, inp.y, facing);

        // Выстрел LMB
        _shootTimer -= Time.deltaTime;
        if (Input.GetMouseButtonDown(0) && _shootTimer <= 0f)
        {
            Vector2 dir = ((Vector2)mw - (Vector2)transform.position).normalized;
            NetworkManager.Instance.SendShoot(Mathf.Atan2(dir.y, dir.x));
            _shootTimer = ShootCooldown;
        }
    }
}
