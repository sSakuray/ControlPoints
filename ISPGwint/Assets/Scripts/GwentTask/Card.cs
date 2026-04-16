using UnityEngine;

namespace GwentTask
{
    public abstract class Card : ScriptableObject
    {
        [SerializeField] private string _cardName;
        [SerializeField] private Sprite _icon;
        [SerializeField, TextArea] private string _description;

        public string CardName
        {
            get
            {
                return _cardName;
            }
        }

        public Sprite Icon
        {
            get
            {
                return _icon;
            }
        }

        public string Description
        {
            get
            {
                return _description;
            }
        }

        public abstract void ApplyCardAction();
    }
}
