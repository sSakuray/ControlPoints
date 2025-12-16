using UnityEngine;

public class EnemyDamage : MonoBehaviour
{
    [SerializeField] private int damage = 10;

    public int Damage => damage;

    public void SetDamage(int newDamage)
    {
        damage = Mathf.Max(0, newDamage);
    }
}
