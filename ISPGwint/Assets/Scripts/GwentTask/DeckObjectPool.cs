using System.Collections.Generic;
using UnityEngine;
using System.Text;

namespace GwentTask
{
    public class DeckObjectPool
    {
        private readonly Queue<Card> _pool = new Queue<Card>();

        public void InitializeDeck(IEnumerable<Card> cardConfigs)
        {
            foreach (var config in cardConfigs)
            {
                if (config == null)
                {
                    continue;
                }

                var cardInstance = Object.Instantiate(config);
                
                if (!string.IsNullOrEmpty(config.CardName))
                {
                    cardInstance.name = config.CardName;
                }
                else
                {
                    cardInstance.name = config.name;
                }

                _pool.Enqueue(cardInstance);

                LogCardInfo(cardInstance);
            }
        }

        public Card GetCard()
        {
            if (_pool.Count > 0)
            {
                return _pool.Dequeue();
            }
            else
            {
                return null;
            }
        }

        public void ReturnCard(Card card)
        {
            _pool.Enqueue(card);
        }

        private void LogCardInfo(Card card)
        {
            var sb = new StringBuilder();
            sb.Append($"Создана карта {card.CardName}");

            if (!string.IsNullOrEmpty(card.Description))
            {
                sb.Append($"; описание: {card.Description}");
            }

            string placement = GetPlacement(card);
            
            if (!string.IsNullOrEmpty(placement))
            {
                sb.Append($"; тип размещения: {placement}");
            }

            if (card is IHasSpecialAbility abilityCard)
            {
                sb.Append($"; специальная способность: {GetAbilityName(abilityCard.AbilityType)}");
            }

            if (card is IWithStrength strengthCard)
            {
                sb.Append($"; очки силы: {strengthCard.StrengthPoints}");
            }

            if (card is IWeatherCard)
            {
                sb.Append($"; погодный эффект");
            }

            if (card is IUltimate)
            {
                sb.Append($"; карта лидера (ульта)");
            }

            if (card is IRareCard)
            {
                sb.Append($"; редкая карта");
            }

            Debug.Log(sb.ToString());
        }

        private string GetPlacement(Card card)
        {
            if (card is IArcher)
            {
                return "дальний бой";
            }
            else if (card is IMeleeFighter)
            {
                return "ближний бой";
            }
            else if (card is ISiegeWeapon)
            {
                return "осадное орудие";
            }
            else
            {
                return string.Empty;
            }
        }

        private string GetAbilityName(SpecialAbilityType type)
        {
            switch (type)
            {
                case SpecialAbilityType.Spy:
                    return "Шпион";
                case SpecialAbilityType.Medic:
                    return "Медик";
                case SpecialAbilityType.Execution:
                    return "Казнь";
                case SpecialAbilityType.CommandersHorn:
                    return "Командный рог";
                case SpecialAbilityType.StrengthSurge:
                    return "Прилив сил";
                case SpecialAbilityType.Connection:
                    return "Прочная связь";
                case SpecialAbilityType.Pretence:
                    return "Чучело";
                case SpecialAbilityType.Twin:
                    return "Двойник";
                case SpecialAbilityType.Berserk:
                    return "Берсерк";
                case SpecialAbilityType.Mardrem:
                    return "Мардрём";
                case SpecialAbilityType.AvengerCall:
                    return "Призыв мстителя";
                case SpecialAbilityType.None:
                    return "Нет";
                default:
                    return type.ToString();
            }
        }
    }
}
