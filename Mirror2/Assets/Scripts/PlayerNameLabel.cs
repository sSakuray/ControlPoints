using Mirror;
using TMPro;
using UnityEngine;

public class PlayerNameLabel : NetworkBehaviour
{
    public TextMeshPro nameText;
    public TextMeshPro healthText;
    
    [SyncVar(hook = nameof(OnNameChanged))]
    private string _playerName = "Player";
    
    private PlayerController _cachedController;

    public override void OnStartServer()
    {
        base.OnStartServer();
        _playerName = $"P{netId}";
    }

    public override void OnStartLocalPlayer()
    {
        base.OnStartLocalPlayer();
        CmdSetName($"Player {netId}");
    }

    [Command]
    private void CmdSetName(string newName)
    {
        _playerName = newName;
    }

    private void OnNameChanged(string oldName, string newName)
    {
        nameText.text = newName;
    }

    public void UpdateHealthUI(int currentHits)
    {
        int remaining = PlayerHealth.MaxHits - currentHits;
        string hp = "";
        for (int i = 0; i < PlayerHealth.MaxHits; i++)
        {
            if (i < remaining)
            {
                hp += "♥";
            }
            else
            {
                hp += "♡";
            }
        }
        healthText.text = hp;
    }

    private void Start()
    {
        UpdateHealthUI(0);
        nameText.text = _playerName;

        _cachedController = GetComponentInParent<PlayerController>();
        PlayerHealth health = _cachedController.GetComponent<PlayerHealth>();
        health.RegisterLabel(this);

        transform.SetParent(null);
    }

    private void LateUpdate()
    {
        if (_cachedController != null)
        {
            transform.position = _cachedController.transform.position + Vector3.up * 0.7f;
        }
    }
}
