using UnityEngine;
using TMPro;

public class GameBootstrapper : MonoBehaviour
{
    [Header("Player Prefab")]
    [SerializeField] private GameObject playerPrefab;
    [SerializeField] private Vector2 spawnPosition = Vector2.zero;

    [Header("Player Settings")]
    [SerializeField] private int maxHealth = 100;
    [SerializeField] private float moveSpeed = 5f;

    [Header("UI")]
    [SerializeField] private TMP_Text healthText;

    private PlayerController _playerController;
    private MovementController _movementController;
    private GameObject _playerInstance;

    private void Start()
    {
        InitializePlayer();
    }

    private void InitializePlayer()
    {
        _playerInstance = Instantiate(playerPrefab, spawnPosition, Quaternion.identity);
        _playerInstance.name = "Player";
        PlayerView playerView = _playerInstance.GetComponent<PlayerView>();
        InputListener inputListener = _playerInstance.GetComponent<InputListener>();
        CollisionHandler collisionHandler = _playerInstance.GetComponent<CollisionHandler>();

        if (playerView == null)
        {
            playerView = _playerInstance.AddComponent<PlayerView>();
        }
        if (inputListener == null)
        {
            inputListener = _playerInstance.AddComponent<InputListener>();
        }
        if (collisionHandler == null)
        {
            collisionHandler = _playerInstance.AddComponent<CollisionHandler>();
        }

        PlayerModel playerModel = new PlayerModel(maxHealth);
        MovementModel movementModel = new MovementModel(spawnPosition, moveSpeed);

        playerView.SetHealthText(healthText);

        _playerController = new PlayerController(playerModel, playerView);
        _movementController = new MovementController(movementModel, playerView, inputListener);

        collisionHandler.Initialize(_playerController);

    }

    private void Update()
    {
        _movementController?.Update(Time.deltaTime);
    }

    private void OnDestroy()
    {
        _playerController?.Dispose();
        _movementController?.Dispose();
    }

}
