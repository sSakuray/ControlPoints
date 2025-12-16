public class PlayerController
{
    private readonly PlayerModel _model;
    private readonly PlayerView _view;

    public PlayerModel Model => _model;
    public PlayerView View => _view;

    public PlayerController(PlayerModel model, PlayerView view)
    {
        _model = model;
        _view = view;

        Initialize();
    }

    private void Initialize()
    {
        _model.OnHealthChanged += HandleHealthChanged;
        _model.OnPlayerDeath += HandlePlayerDeath;

        _view.UpdateHealthText(_model.CurrentHealth, _model.MaxHealth);
        _view.UpdatePlayerAppearance(_model.CurrentHealth, _model.MaxHealth);
    }

    private void HandleHealthChanged(int currentHealth, int maxHealth)
    {
        _view.UpdateHealthText(currentHealth, maxHealth);
        _view.UpdatePlayerAppearance(currentHealth, maxHealth);
    }

    private void HandlePlayerDeath()
    {
        _view.ShowDeathEffect();
    }

    public void ApplyDamage(int damage)
    {
        _model.TakeDamage(damage);
    }

    public void ApplyHeal(int amount)
    {
        _model.Heal(amount);
    }

    public void Dispose()
    {
        _model.OnHealthChanged -= HandleHealthChanged;
        _model.OnPlayerDeath -= HandlePlayerDeath;
    }
}
