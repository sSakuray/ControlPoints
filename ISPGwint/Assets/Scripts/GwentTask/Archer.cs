using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "Archer", menuName = "Gwint/Cards/Archer")]
    public class Archer : Card, IArcher, IWithStrength
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
