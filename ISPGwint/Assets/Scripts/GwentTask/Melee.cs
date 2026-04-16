using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "Melee", menuName = "Gwint/Cards/Melee")]
    public class Melee : Card, IMeleeFighter, IWithStrength
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
