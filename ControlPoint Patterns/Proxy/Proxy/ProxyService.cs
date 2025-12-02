using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proxy
{
    public class ProxyService : IService
    {
        private readonly RealService _realService;
        private string? _cachedData;
        private DateTime _lastFetchTime;
        private readonly TimeSpan _cacheDuration = TimeSpan.FromSeconds(5);

        public ProxyService()
        {
            _realService = new RealService();
            _lastFetchTime = DateTime.MinValue;
        }

        public string GetData()
        {
            if (_cachedData != null && DateTime.Now - _lastFetchTime < _cacheDuration)
            {
                Console.WriteLine("ProxyService: Возврат данных из кэша");
                return _cachedData;
            }
            Console.WriteLine("ProxyService: Кэш устарел, обращаемся к RealService");
            _cachedData = _realService.GetData();
            _lastFetchTime = DateTime.Now;
            return _cachedData;
        }
    }
}
