using UnityEngine;

public class ObjectSpawner : MonoBehaviour
{
    [SerializeField] private GameObject _prefab;

    public GameObject Spawn(Vector2 position)
    {
        GameObject instance = Instantiate(_prefab, position, Quaternion.identity);
        return instance;
    }

    public void Despawn(GameObject instance)
    {
        if (instance != null)
        {
            Destroy(instance);
        }
    }
}
