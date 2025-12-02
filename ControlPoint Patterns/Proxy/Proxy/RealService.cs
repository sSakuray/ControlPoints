using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Proxy
{
    public class RealService : IService
    {
        public string GetData()
        {
            Console.WriteLine("RealService: Запрос к серверу...");
            Thread.Sleep(3000);
            return $"Данные с сервера (получены в {DateTime.Now:HH:mm:ss})";
        }
    }
}
