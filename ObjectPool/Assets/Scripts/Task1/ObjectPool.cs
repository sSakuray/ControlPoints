using System.Collections.Generic;
using UnityEngine;

namespace Task1
{
    public class ObjectPool<T> where T : MonoBehaviour
    {
        private T _prefab;
        private Transform _container;
        private Queue<T> _pool;

        public ObjectPool(T prefab, int poolSize, Transform container = null)
        {
            _prefab = prefab;
            _container = container;
            _pool = new Queue<T>();

            for (int i = 0; i < poolSize; i++)
            {
                CreateObject();
            }
        }

        private void CreateObject()
        {
            T instance = Object.Instantiate(_prefab, _container);
            instance.gameObject.SetActive(false);
            _pool.Enqueue(instance);
        }

        public T Get()
        {
            if (_pool.Count == 0)
            {
                CreateObject(); 
            }
            
            if (_pool.Count == 0)
            {
                 CreateObject();
            }

            T instance = _pool.Dequeue();
            instance.gameObject.SetActive(true);
            return instance;
        }

        public void Return(T item)
        {
            item.gameObject.SetActive(false);
            _pool.Enqueue(item);
        }
    }
}
