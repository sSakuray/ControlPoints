using UnityEngine;
using UnityEngine.UI;

public class GameUI : MonoBehaviour
{
    [Header("HP")]
    public Text hpText;

    [Header("Death Screen")]
    public GameObject deathPanel;
    public Button     restartButton;

    private GameWorld _world;

    void Start()
    {
        _world = FindObjectOfType<GameWorld>();
        if (restartButton != null)
            restartButton.onClick.AddListener(() => _world?.OnRestart());
        HideDeath();
    }

    public void SetHP(int hp)
    {
        if (hpText != null) hpText.text = "❤ " + hp;
    }

    public void ShowDeath()
    {
        if (deathPanel != null) deathPanel.SetActive(true);
    }

    public void HideDeath()
    {
        if (deathPanel != null) deathPanel.SetActive(false);
    }
}
