using DG.Tweening;
using FlappyComet.Core;
using FlappyComet.Obstacles;
using UnityEngine;

namespace FlappyComet.Collectibles
{
    public class CollectiblePoint : MonoBehaviour
    {
        [SerializeField] private float speed = 4.2f;
        [SerializeField] private float despawnX = -12f;
        [SerializeField] private float rotationSpeed = 120f;

        private SimpleObjectPool pool;
        private Vector3 initialScale;
        private IGameManager gameManager;

        public void Initialize(SimpleObjectPool parentPool, float moveSpeed, IGameManager gm)
        {
            pool = parentPool;
            speed = moveSpeed;
            gameManager = gm;
        }

        private void Start()
        {
            initialScale = transform.localScale;
            transform.DOScale(initialScale * 1.25f, 0.45f)
                .SetLoops(-1, LoopType.Yoyo)
                .SetEase(Ease.InOutSine);
        }

        private void OnDestroy()
        {
            transform.DOKill();
        }

        private void Update()
        {
            if (gameManager != null && gameManager.CurrentState != GameState.Playing)
            {
                return;
            }

            transform.Translate(Vector3.left * (speed * Time.deltaTime), Space.World);
            transform.Rotate(0f, 0f, rotationSpeed * Time.deltaTime);

            if (transform.position.x < despawnX)
            {
                Recycle();
            }
        }

        private void OnTriggerEnter2D(Collider2D other)
        {
            if (other.CompareTag("Player"))
            {
                if (gameManager != null)
                {
                    gameManager.AddScore(1);
                }

                Recycle();
            }
        }

        private void Recycle()
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