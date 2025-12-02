namespace OnlineEatingApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IOrder order = new BaseOrder("Пицца Маргарита", 500m);
            Console.WriteLine($"{order.GetDescription()}: {order.GetPrice()} руб.");

            order = new ExpressDelivery(order);
            Console.WriteLine($"{order.GetDescription()}: {order.GetPrice()} руб.");

            order = new GiftWrapping(order);
            Console.WriteLine($"{order.GetDescription()}: {order.GetPrice()} руб.");

            order = new DrinkAddition(order, "Сок", 60m);
            Console.WriteLine($"{order.GetDescription()}: {order.GetPrice()} руб.");

            Console.WriteLine("\nИтог");
            Console.WriteLine($"Заказ: {order.GetDescription()}");
            Console.WriteLine($"Итого: {order.GetPrice()} руб.");
        }
    }
}
