using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "CommanderHorn", menuName = "Gwint/Cards/CommanderHorn")]
    public class CommanderHorn : Card, ICommandersHorn
    {
        public SpecialAbilityType AbilityType
        {
            get
            {
                return SpecialAbilityType.CommandersHorn;
            }
        }

        public void ApplySpecialAbility()
        {
            Debug.Log($"Применение способности: Командный рог");
        }

        public override void ApplyCardAction()
        {
            ApplySpecialAbility();
        }
    }
}
