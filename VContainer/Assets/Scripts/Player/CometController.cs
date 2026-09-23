using DG.Tweening;
using FlappyComet.Core;
using UnityEngine;
using UnityEngine.InputSystem;
using VContainer;

namespace FlappyComet.Player
{
    public class CometController : MonoBehaviour
    {
        [SerializeField] private float jumpForce = 12.5f;
        [SerializeField] private float gravityScale = 6.0f;
        [SerializeField] private float idleFloatSpeed = 5f;
        [SerializeField] private float idleFloatAmplitude = 0.35f;

        [SerializeField] private float maxUpAngle = 38f;
        [SerializeField] private float maxDownAngle = -85f;
        [SerializeField] private float tiltSpeed = 20f;

        [SerializeField] private CometTail customTail;
        [SerializeField] private ParticleSystem deathParticles;
        [SerializeField] private SpriteRenderer spriteRenderer;

        private IGameManager gameManager;
        private Rigidbody2D rb2d;
        private CircleCollider2D circleCollider;
        private Vector3 startPosition;
        private bool isDead = false;

        [Inject]
        public void Construct(IGameManager gm)
        {
            gameManager = gm;
        }

        private void Awake()
        {
            rb2d = GetComponent<Rigidbody2D>();
            circleCollider = GetComponent<CircleCollider2D>();

            if (spriteRenderer == null)
            {
                spriteRenderer = GetComponent<SpriteRenderer>();
            }

            if (customTail == null)
            {
                customTail = GetComponentInChildren<CometTail>();
            }

            if (deathParticles == null)
            {
                deathParticles = GetComponentInChildren<ParticleSystem>();
            }

            startPosition = transform.position;
        }

        private void Start()
        {
            if (customTail != null && gameManager != null)
            {
                customTail.Initialize(gameManager);
            }

            if (gameManager != null)
            {
                gameManager.OnStateChanged += HandleStateChanged;
            }

            SetupInitialState();
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
            if (isDead)
            {
                return;
            }

            GameState currentState = gameManager != null ? gameManager.CurrentState : GameState.Ready;

            if (currentState == GameState.Ready)
            {
                float newY = startPosition.y + Mathf.Sin(Time.time * idleFloatSpeed) * idleFloatAmplitude;
                transform.position = new Vector3(startPosition.x, newY, startPosition.z);

                if (CheckFlapInput())
                {
                    if (gameManager != null)
                    {
                        gameManager.StartGame();
                    }

                    Flap();
                }
            }
            else if (currentState == GameState.Playing)
            {
                if (CheckFlapInput())
                {
                    Flap();
                }

                UpdateRotation();
            }
        }

        private void Flap()
        {
            if (isDead)
            {
                return;
            }

            SetVerticalVelocity(jumpForce);

            transform.DOKill();
            transform.localScale = new Vector3(0.5f, 0.5f, 1f);
            transform.DOPunchScale(new Vector3(-0.08f, 0.12f, 0f), 0.16f);
        }

        private void UpdateRotation()
        {
            float verticalVelocity = GetVerticalVelocity();
            float targetAngle = verticalVelocity > 0f
                ? Mathf.Lerp(0f, maxUpAngle, verticalVelocity / jumpForce)
                : Mathf.Lerp(0f, maxDownAngle, -verticalVelocity / (jumpForce * 1.5f));

            Quaternion targetRotation = Quaternion.Euler(0f, 0f, targetAngle);
            transform.rotation = Quaternion.Lerp(transform.rotation, targetRotation, Time.deltaTime * tiltSpeed);
        }

        private void HandleStateChanged(GameState newState)
        {
            switch (newState)
            {
                case GameState.Ready:
                    SetupInitialState();
                    break;
                case GameState.Playing:
                    rb2d.bodyType = RigidbodyType2D.Dynamic;
                    rb2d.gravityScale = gravityScale;
                    break;
                case GameState.GameOver:
                    break;
            }
        }

        private void SetupInitialState()
        {
            isDead = false;
            transform.position = startPosition;
            transform.rotation = Quaternion.identity;

            rb2d.bodyType = RigidbodyType2D.Kinematic;
            SetVerticalVelocity(0f);

            if (circleCollider != null)
            {
                circleCollider.enabled = true;
            }

            if (spriteRenderer != null)
            {
                spriteRenderer.enabled = true;
            }

            if (customTail != null)
            {
                customTail.Clear();
            }
        }

        private void OnCollisionEnter2D(Collision2D collision)
        {
            Die();
        }

        private void OnTriggerEnter2D(Collider2D other)
        {
            if (other.CompareTag("Hazard") || other.CompareTag("Obstacle"))
            {
                Die();
            }
        }

        public void Die()
        {
            if (isDead)
            {
                return;
            }

            isDead = true;

            SetVerticalVelocity(0f);
            rb2d.bodyType = RigidbodyType2D.Static;

            if (circleCollider != null)
            {
                circleCollider.enabled = false;
            }

            if (spriteRenderer != null)
            {
                spriteRenderer.enabled = false;
            }

            if (customTail != null)
            {
                customTail.Clear();
            }

            if (deathParticles != null)
            {
                deathParticles.transform.position = transform.position;
                deathParticles.Play();
            }

            if (Camera.main != null)
            {
                Camera.main.DOComplete();
                Camera.main.DOShakePosition(0.28f, 0.35f, 16, 90f);
            }

            if (gameManager != null)
            {
                gameManager.GameOver();
            }
        }

        private void SetVerticalVelocity(float velocityY)
        {
            rb2d.linearVelocity = new Vector2(0f, velocityY);
        }

        private float GetVerticalVelocity()
        {
            return rb2d.linearVelocity.y;
        }

        private bool CheckFlapInput()
        {
            if (Keyboard.current != null && Keyboard.current.spaceKey.wasPressedThisFrame)
            {
                return true;
            }

           if (Mouse.current != null && Mouse.current.leftButton.wasPressedThisFrame)
            {
                return true;
            }

            return false;
        }
    }
}
