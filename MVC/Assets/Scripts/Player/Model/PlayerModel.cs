using System;

public class PlayerModel
{
    public event Action<int, int> OnHealthChanged;
    public event Action OnPlayerDeath;

    public int MaxHealth { get; private set; }
    public int CurrentHealth { get; private set; }

    public PlayerModel(int maxHealth)
    {
        MaxHealth = maxHealth;
        CurrentHealth = maxHealth;
    }

    public void ChangeHealth(int amount)
    {
        int previousHealth = CurrentHealth;
        CurrentHealth = Math.Clamp(CurrentHealth + amount, 0, MaxHealth);

        if (CurrentHealth != previousHealth)
        {
            OnHealthChanged?.Invoke(CurrentHealth, MaxHealth);

            if (CurrentHealth <= 0)
            {
                OnPlayerDeath?.Invoke();
            }
        }
    }

    public void TakeDamage(int damage)
    {
        if (damage > 0)
        {
            ChangeHealth(-damage);
        }
    }

    public void Heal(int amount)
    {
        if (amount > 0)
        {
            ChangeHealth(amount);
        }
    }

    public void ResetHealth()
    {
        CurrentHealth = MaxHealth;
        OnHealthChanged?.Invoke(CurrentHealth, MaxHealth);
    }
}
