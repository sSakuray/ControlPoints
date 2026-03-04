using UnityEngine;

public class SpawnCommand : ICommand
{
    private readonly ObjectSpawner _spawner;
    private readonly Vector2 _spawnPosition;
    private GameObject _spawnedInstance;

    public SpawnCommand(ObjectSpawner spawner)
    {
        _spawner = spawner;
        _spawnPosition = InputListener.Instance.LastClickPosition;
    }

    public void Execute()
    {
        _spawnedInstance = _spawner.Spawn(_spawnPosition);
    }

    public void Undo()
    {
        _spawner.Despawn(_spawnedInstance);
        _spawnedInstance = null;
    }
}
