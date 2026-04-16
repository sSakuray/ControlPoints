using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "Catapult", menuName = "Gwint/Cards/Catapult")]
    public class Catapult : Card, ISiegeWeapon, IWithStrength
    {
        [SerializeField] private int _strengthPoints;
        public int StrengthPoints
        {
            get
            {
                return _strengthPoints;
            }
        }

        public void ApplyStrength()
        {
            Debug.Log($"Применение очков силы: {StrengthPoints}");
        }

        public override void ApplyCardAction()
        {
            ApplyStrength();
        }
    }
}
