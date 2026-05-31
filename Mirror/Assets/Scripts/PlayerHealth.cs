using Mirror;
using UnityEngine;

public class PlayerHealth : NetworkBehaviour
{
    public const int MaxHits = 3;
    [SyncVar(hook = nameof(OnHitsChanged))]
    public int hits = 0;
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
        if (!isServer)
        {
            return;
        }

        hits++;

        if (hits >= MaxHits)
        {
            Invoke(nameof(DestroyPlayer), 0.1f);
        }
    }

    [Server]
    private void DestroyPlayer()
    {
        RpcOnDeath();
        NetworkServer.Destroy(gameObject);
    }

    private void OnHitsChanged(int oldVal, int newVal)
    {
        if (_label != null)
        {
            _label.UpdateHealthUI(newVal);
        }
    }

    [ClientRpc]
    private void RpcOnDeath()
    {
    }
}
