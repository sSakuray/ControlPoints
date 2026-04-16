using System.Collections.Generic;
using UnityEngine;

namespace GwentTask
{
    public class Bootstrapper : MonoBehaviour
    {
        [SerializeField] private List<Card> _deckConfigs;

        private DeckObjectPool _deckPool;

        private void Start()
        {
            _deckPool = new DeckObjectPool();
            _deckPool.InitializeDeck(_deckConfigs);
        }

    }
}
