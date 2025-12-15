using System.Collections.Generic;
using UnityEngine;

public class ObjectPoolBasic : MonoBehaviour
{
    [SerializeField] private GameObject prefab;
    [SerializeField] private int poolSize = 10;

    private List<GameObject> pool = new List<GameObject>();

    private void Awake()
    {
        InitializePool();
    }

    private void InitializePool()
    {
        for (int i = 0; i < poolSize; i++)
        {
            GameObject obj = Instantiate(prefab);
            obj.SetActive(false);
            obj.transform.SetParent(transform);
            pool.Add(obj);
            
            BulletBasic bullet = obj.GetComponent<BulletBasic>();
            if (bullet != null)
            {
                bullet.Initialize(this);
            }
        }
    }

    public bool TryGetFromPool(out GameObject result)
    {
        foreach (var obj in pool)
        {
            if (!obj.activeInHierarchy)
            {
                result = obj;
                result.SetActive(true);
                return true;
            }
        }

        result = null;
        return false;
    }

    public void ReturnToPool(GameObject obj)
    {
        if (obj != null && pool.Contains(obj))
        {
            obj.SetActive(false);
        }
    }
}
