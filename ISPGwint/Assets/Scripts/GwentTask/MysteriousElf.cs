using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "MysteriousElf", menuName = "Gwint/Cards/MysteriousElf")]
    public class MysteriousElf : Card, IMeleeFighter, IWithStrength, ISpy
    {
        [SerializeField] private int _strengthPoints;
        public int StrengthPoints
        {
            get
            {
                return _strengthPoints;
            }
        }

        public SpecialAbilityType AbilityType
        {
            get
            {
                return SpecialAbilityType.Spy;
            }
        }

        public void ApplySpecialAbility()
        {
            Debug.Log($"Применение спец. способности: Шпион");
        }

        public void ApplyStrength()
        {
            Debug.Log($"Применение очков силы: {StrengthPoints}");
        }

        public override void ApplyCardAction()
        {
            ApplySpecialAbility();
            ApplyStrength();
        }
    }
}
