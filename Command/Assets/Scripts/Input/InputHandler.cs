using UnityEngine;

public class InputHandler : MonoBehaviour
{
    [SerializeField] private PlayerMover _playerMover;
    [SerializeField] private ObjectSpawner _objectSpawner;
    [SerializeField] private CommandInvoker _commandInvoker;

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            ICommand moveCommand = new MoveCommand(_playerMover);
            _commandInvoker.ExecuteCommand(moveCommand);
        }

        if (Input.GetMouseButtonDown(1))
        {
            ICommand spawnCommand = new SpawnCommand(_objectSpawner);
            _commandInvoker.EnqueueDeferred(spawnCommand);
        }

        if (Input.GetKeyDown(KeyCode.Return))
        {
            _commandInvoker.ExecutePendingQueue();
        }
        if (Input.GetMouseButtonDown(2))
        {
            _commandInvoker.Undo();
        }
    }
}
