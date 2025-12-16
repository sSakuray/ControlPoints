using UnityEngine;
using UnityEngine.UI;

public class IntegratedAttackPerformer : MonoBehaviour
{
    [SerializeField] private CharacterContext character;
    [SerializeField] private EnemyManager enemyManager;
    [SerializeField] private Button button1;
    [SerializeField] private Button button2;
    [SerializeField] private Button button3;
    [SerializeField] private Color normalColor = Color.white;
    [SerializeField] private Color accentColor = Color.yellow;

    private IAttackStrategy hit1Strategy;
    private IAttackStrategy hit2Strategy;
    private IAttackStrategy hit3Strategy;
    private int currentAttackType = 1;

    private void Start()
    {
        InitializeStrategies();
        SetupButtons();
        SetAttackType(1);
        UpdateButtonColors();
    }

    private void InitializeStrategies()
    {
        hit1Strategy = new Hit1Strategy();
        hit2Strategy = new Hit2Strategy();
        hit3Strategy = new Hit3Strategy();
    }

    private void SetupButtons()
    {
        button1.onClick.AddListener(() => SetAttackType(1));
        button2.onClick.AddListener(() => SetAttackType(2));
        button3.onClick.AddListener(() => SetAttackType(3));
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Q))
        {
            character.PerformAttack();
        }
    }

    public void SetAttackType(int type)
    {
        currentAttackType = type;

        switch (type)
        {
            case 1:
                character.SetStrategy(hit1Strategy);
                break;
            case 2:
                character.SetStrategy(hit2Strategy);
                break;
            case 3:
                character.SetStrategy(hit3Strategy);
                break;
        }

        enemyManager.OnPlayerAttackTypeChanged(type);
        UpdateButtonColors();
    }

    private void UpdateButtonColors()
    {
        SetButtonColor(button1, currentAttackType == 1);
        SetButtonColor(button2, currentAttackType == 2);
        SetButtonColor(button3, currentAttackType == 3);
    }

    private void SetButtonColor(Button button, bool isActive)
    {
        var colors = button.colors;
        colors.normalColor = isActive ? accentColor : normalColor;
        colors.selectedColor = isActive ? accentColor : normalColor;
        button.colors = colors;
    }

    public int GetCurrentAttackType()
    {
        return currentAttackType;
    }
}
