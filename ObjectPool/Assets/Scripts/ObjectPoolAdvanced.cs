using System.Collections.Generic;
using UnityEngine;

public class ObjectPoolAdvanced : MonoBehaviour
{
    [SerializeField] private GameObject prefab;
    [SerializeField] private int startPoolSize = 5;
    [SerializeField] private int maxPoolSize = 20;

    private List<GameObject> allPooledObjects = new List<GameObject>();
    private Queue<GameObject> availableObjects = new Queue<GameObject>();
    
    public int TotalObjectsCount => allPooledObjects.Count;
    public int AvailableObjectsCount => availableObjects.Count;

    private void Awake()
    {
        InitializePool();
    }

    private void InitializePool()
    {
        for (int i = 0; i < startPoolSize; i++)
        {
            CreateAndAddObject();
        }
    }

    private GameObject CreateAndAddObject()
    {
        GameObject obj = Instantiate(prefab);
        obj.SetActive(false);
        obj.transform.SetParent(transform);
        
        BulletAdvanced bullet = obj.GetComponent<BulletAdvanced>();
        if (bullet != null)
        {
            bullet.Initialize(this);
        }
        
        allPooledObjects.Add(obj);
        availableObjects.Enqueue(obj);
        return obj;
    }

    public bool TryGetFromPool(out GameObject result)
    {
        if (availableObjects.Count > 0)
        {
            result = availableObjects.Dequeue();
            result.SetActive(true);
            return true;
        }

        if (allPooledObjects.Count < maxPoolSize)
        {
            result = CreateAndAddObject();
            availableObjects.Dequeue();
            result.SetActive(true);
            return true;
        }

        result = null;
        return false;
    }
    
    public void ReturnToPool(GameObject obj)
    {
        if (obj == null || !allPooledObjects.Contains(obj)) return;
        
        obj.SetActive(false);
        availableObjects.Enqueue(obj);
    }
}
