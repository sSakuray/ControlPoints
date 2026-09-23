using FlappyComet.Core;
using UnityEngine;

namespace FlappyComet.Obstacles
{
    public class PredictiveCubeObstacle : MonoBehaviour
    {
        [SerializeField] private float speed = 13.5f;
        [SerializeField] private float rotationSpeed = 360f;
        [SerializeField] private float despawnX = -14f;
        [SerializeField] private float lockDistance = 6.8f;
        [SerializeField] private float homingTurnSpeed = 1.6f;

        private SimpleObjectPool pool;
        private Transform player;
        private TrailRenderer trailRenderer;
        private Vector3 direction;
        private IGameManager gameManager;

        private void Awake()
        {
            trailRenderer = GetComponent<TrailRenderer>();
        }

        private void OnDisable()
        {
            if (trailRenderer != null)
            {
                trailRenderer.emitting = false;
                trailRenderer.Clear();
            }
        }

        public void Initialize(SimpleObjectPool parentPool, Transform playerTransform, float launchSpeed, IGameManager gm)
        {
            pool = parentPool;
            player = playerTransform;
            speed = launchSpeed;
            gameManager = gm;

            if (trailRenderer != null)
            {
                trailRenderer.Clear();
                trailRenderer.emitting = true;
            }

            if (player != null)
            {
                direction = (player.position - transform.position).normalized;
            }
            else
            {
                direction = Vector3.left;
            }
        }

        private void Update()
        {
            if (gameManager != null && gameManager.CurrentState != GameState.Playing)
            {
                return;
            }

            if (player != null && transform.position.x > player.position.x + lockDistance)
            {
                Vector3 targetDir = (player.position - transform.position).normalized;
                direction = Vector3.RotateTowards(direction, targetDir, homingTurnSpeed * Time.deltaTime, 0f);
            }

            transform.position += direction * (speed * Time.deltaTime);
            transform.Rotate(0f, 0f, rotationSpeed * Time.deltaTime);


            if (transform.position.x < despawnX)
            {
                if (pool != null)
                {
                    pool.ReturnToPool(gameObject);
                }
                else
                {
                    gameObject.SetActive(false);
                }
            }
        }
    }
}
