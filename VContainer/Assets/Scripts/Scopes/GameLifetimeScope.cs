using FlappyComet.Core;
using FlappyComet.Player;
using FlappyComet.UI;
using UnityEngine;
using VContainer;
using VContainer.Unity;

namespace FlappyComet.Scopes
{
    public class GameLifetimeScope : LifetimeScope
    {
        [SerializeField] private GameManager gameManager;
        [SerializeField] private UIManager uiManager;
        [SerializeField] private CometController playerController;
        [SerializeField] private GameSpawner gameSpawner;

        protected override void Configure(IContainerBuilder builder)
        {
            builder.RegisterComponent(gameManager).As<IGameManager>();
            builder.RegisterComponent(uiManager);
            builder.RegisterComponent(playerController);
            builder.RegisterComponent(gameSpawner);
        }
    }
}
