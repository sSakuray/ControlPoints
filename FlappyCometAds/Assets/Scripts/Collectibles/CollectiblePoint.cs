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

        public void Initialize(SimpleObjectPool parentPool, float moveSpeed)
        {
            this.pool = parentPool;
            this.speed = moveSpeed;
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
            if (GameManager.Instance != null && GameManager.Instance.CurrentState != GameState.Playing)
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
                if (GameManager.Instance != null)
                {
                    GameManager.Instance.AddScore(1);
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
