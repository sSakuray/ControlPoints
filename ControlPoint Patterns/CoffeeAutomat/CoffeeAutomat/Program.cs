namespace CoffeeAutomat
{
    public class Program
    {
        public static void Main()
        {
            CoffeeMachine coffeeMachine = new CoffeeMachine();

            Console.WriteLine("Пользователь - Внесение монет");
            coffeeMachine.InsertCoin();

            Console.WriteLine("Пользователь - Выбор напитка");
            coffeeMachine.SelectDrink();

            Console.WriteLine("Автомат выдаёт напиток");
            coffeeMachine.DispenseDrink();

            Console.WriteLine("Автомат возвращается в состояние ожидания следующего клиента.");
            coffeeMachine.InsertCoin(); 
        }
    }
}