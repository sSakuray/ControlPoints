using System;
using System.Diagnostics;
using System.Threading;

namespace Proxy
{
    internal class Program
    {
        static void Main(string[] args)
        {

            IService service = new ProxyService();
            var sw = new Stopwatch();

            Console.WriteLine("Вызов 1:");
            sw.Restart();
            var result = service.GetData();
            sw.Stop();
            Console.WriteLine($"Результат: {result}");
            Console.WriteLine($"Время: {sw.ElapsedMilliseconds} мс\n");

            Console.WriteLine("Вызов 2 (сразу после первого):");
            sw.Restart();
            result = service.GetData();
            sw.Stop();
            Console.WriteLine($"Результат: {result}");
            Console.WriteLine($"Время: {sw.ElapsedMilliseconds} мс\n");

            Console.WriteLine("Вызов 3 (через 2 секунды):");
            Thread.Sleep(2000);
            sw.Restart();
            result = service.GetData();
            sw.Stop();
            Console.WriteLine($"Результат: {result}");
            Console.WriteLine($"Время: {sw.ElapsedMilliseconds} мс\n");

            Console.WriteLine("Вызов 4 (ждём 4 секунды , кэш устареет):");
            Thread.Sleep(4000);
            sw.Restart();
            result = service.GetData();
            sw.Stop();
            Console.WriteLine($"Результат: {result}");
            Console.WriteLine($"Время: {sw.ElapsedMilliseconds} мс\n");
        }
    }
}
