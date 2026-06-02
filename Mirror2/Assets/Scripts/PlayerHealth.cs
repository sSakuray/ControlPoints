using Mirror;
using UnityEngine;

public class PlayerHealth : NetworkBehaviour
{
    public const int MaxHits = 3;

    [SyncVar(hook = nameof(OnHitsChanged))]
    public int hits;

    [SyncVar(hook = nameof(OnDeadChanged))]
    public bool isDead;

    private PlayerNameLabel _label;

    public void RegisterLabel(PlayerNameLabel label)
    {
        _label = label;
        if (_label != null)
        {
            _label.UpdateHealthUI(hits);
        }
    }

    [Server]
    public void TakeHit()
    {
        if (isDead)
        {
            return;
        }

        hits++;

        if (hits >= MaxHits)
        {
            isDead = true;

            if (GameNetworkManager.Instance != null)
            {
                GameNetworkManager.Instance.OnPlayerDied();
            }
        }
    }

    [Server]
    public void Respawn()
    {
        hits = 0;
        isDead = false;
    }

    private void OnHitsChanged(int oldVal, int newVal)
    {
        if (_label != null)
        {
            _label.UpdateHealthUI(newVal);
        }

        if (isLocalPlayer)
        {
            GameHUD.OnLocalHealthChanged?.Invoke(newVal);
        }
    }

    private void OnDeadChanged(bool oldVal, bool newVal)
    {
        foreach (SpriteRenderer sr in GetComponentsInChildren<SpriteRenderer>())
        {
            Color c = sr.color;
            c.a = newVal ? 0.3f : 1f;
            sr.color = c;
        }
    }
}
