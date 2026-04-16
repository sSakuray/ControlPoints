using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "Emhyr", menuName = "Gwint/Cards/Emhyr")]
    public class Emhyr : Card, IUltimate
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
