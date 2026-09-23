using FlappyComet.Collectibles;
using FlappyComet.Obstacles;
using FlappyComet.Player;
using UnityEngine;
using VContainer;

namespace FlappyComet.Core
{
    public class GameSpawner : MonoBehaviour
    {
        [SerializeField] private SimpleObjectPool cubePool;
        [SerializeField] private SimpleObjectPool collectiblePool;

        [SerializeField] private float cubeSpawnInterval = 1.75f;
        [SerializeField] private float cubeSpeed = 14.5f;
        [SerializeField] private float cubeSpawnX = 11.5f;
        [SerializeField] private float cubeMinY = -2.4f;
        [SerializeField] private float cubeMaxY = 2.4f;

        [SerializeField] private float collectibleSpawnInterval = 1.2f;
        [SerializeField] private float collectibleSpeed = 8.5f;
        [SerializeField] private float collectibleMinY = -2.4f;
        [SerializeField] private float collectibleMaxY = 2.4f;

        private IGameManager gameManager;
        private CometController playerController;
        private float cubeTimer = 0f;
        private float collectibleTimer = 0f;
        private Transform playerTransform;

        [Inject]
        public void Construct(IGameManager gm, CometController player)
        {
            gameManager = gm;
            playerController = player;
            if (player != null)
            {
                playerTransform = player.transform;
            }
        }

        private void Start()
        {
            if (gameManager != null)
            {
                gameManager.OnStateChanged += HandleStateChanged;
            }
        }
        private void OnDestroy()
        {
            if (gameManager != null)
            {
                gameManager.OnStateChanged -= HandleStateChanged;
            }
        }

        private void Update()
        {
            if (gameManager != null && gameManager.CurrentState != GameState.Playing)
            {
                return;
            }

            cubeTimer += Time.deltaTime;
            if (cubeTimer >= cubeSpawnInterval)
            {
                cubeTimer = 0f;
                SpawnCube();
            }

            collectibleTimer += Time.deltaTime;
            if (collectibleTimer >= collectibleSpawnInterval)
            {
                collectibleTimer = 0f;
                SpawnCollectible();
            }
        }

        private void SpawnCube()
        {
            if (cubePool == null)
            {
                return;
            }

            float spawnY = Random.Range(cubeMinY, cubeMaxY);
            Vector3 spawnPos = new Vector3(cubeSpawnX, spawnY, 0f);

            GameObject cubeObj = cubePool.Get();
            cubeObj.transform.position = spawnPos;

            PredictiveCubeObstacle cube = cubeObj.GetComponent<PredictiveCubeObstacle>();
            if (cube != null)
            {
                cube.Initialize(cubePool, playerTransform, cubeSpeed, gameManager);
            }
        }

        private void SpawnCollectible()
        {
            if (collectiblePool == null)
            {
                return;
            }

            GameObject gemObj = collectiblePool.Get();
            float spawnY = Random.Range(collectibleMinY, collectibleMaxY);
            gemObj.transform.position = new Vector3(cubeSpawnX + 0.5f, spawnY, 0f);

            CollectiblePoint gem = gemObj.GetComponent<CollectiblePoint>();
            if (gem != null)
            {
                gem.Initialize(collectiblePool, collectibleSpeed, gameManager);
            }
        }

        private void HandleStateChanged(GameState newState)
        {
            if (newState == GameState.Playing)
            {
                cubeTimer = cubeSpawnInterval * 0.4f;
                collectibleTimer = collectibleSpawnInterval * 0.2f;
            }
        }
    }
}
