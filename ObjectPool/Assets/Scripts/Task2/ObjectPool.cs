using System.Collections.Generic;
using UnityEngine;

namespace Task2
{
    public class ObjectPool<T> where T : MonoBehaviour
    {
        private T _prefab;
        private Transform _container;
        private Queue<T> _pool;
        private int _maxPoolSize;
        private int _totalObjectsCreated;

        public ObjectPool(T prefab, int startPoolSize, int maxPoolSize, Transform container = null)
        {
            _prefab = prefab;
            _maxPoolSize = maxPoolSize;
            _container = container;
            _pool = new Queue<T>();
            _totalObjectsCreated = 0;

            for (int i = 0; i < startPoolSize; i++)
            {
                if (_totalObjectsCreated < _maxPoolSize)
                {
                    CreateObject();
                }
            }
        }

        private void CreateObject()
        {
            T instance = Object.Instantiate(_prefab, _container);
            instance.gameObject.SetActive(false);
            _pool.Enqueue(instance);
            _totalObjectsCreated++;
        }

        public bool TryGetFromPool(out T item)
        {
            if (_pool.Count > 0)
            {
                item = _pool.Dequeue();
                item.gameObject.SetActive(true);
                return true;
            }

            if (_totalObjectsCreated < _maxPoolSize)
            {
                CreateObject(); 
                item = _pool.Dequeue();
                item.gameObject.SetActive(true);
                return true;
            }
            
            item = null;
            return false;
        }

        public void Return(T item)
        {
            item.gameObject.SetActive(false);
            _pool.Enqueue(item);
        }
    }
}
