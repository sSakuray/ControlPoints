using UnityEngine;

namespace GwentTask
{
    [CreateAssetMenu(fileName = "ImpenetrableFog", menuName = "Gwint/Cards/ImpenetrableFog")]
    public class ImpenetrableFog : Card, IWeatherCard
    {
        public void ApplyWeatherEffect()
        {
            Debug.Log($"Применение погодного эффекта: {CardName}");
        }

        public override void ApplyCardAction()
        {
            ApplyWeatherEffect();
        }
    }
}
