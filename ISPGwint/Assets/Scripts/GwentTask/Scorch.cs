using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "Scorch", menuName = "Gwint/Cards/Scorch")]
    public class Scorch : Card, IExecution
    {
        public SpecialAbilityType AbilityType
        {
            get
            {
                return SpecialAbilityType.Execution;
            }
        }

        public void ApplySpecialAbility()
        {
            Debug.Log($"Применение Казни");
        }

        public override void ApplyCardAction()
        {
            ApplySpecialAbility();
        }
    }
}
