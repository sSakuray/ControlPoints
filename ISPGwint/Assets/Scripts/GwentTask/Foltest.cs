using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "Foltest", menuName = "Gwint/Cards/Foltest")]
    public class Foltest : Card, IUltimate
    {
        public void ApplyUltimate()
        {
            Debug.Log($"Применение ульты: {CardName}");
        }

        public override void ApplyCardAction()
        {
            ApplyUltimate();
        }
    }
}
