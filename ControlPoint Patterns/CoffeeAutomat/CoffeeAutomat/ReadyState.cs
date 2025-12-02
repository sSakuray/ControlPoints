using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeAutomat
{
    public class ReadyState : ICoffeeMachineState
    {
        private CoffeeMachine _coffeeMachine;

        public ReadyState(CoffeeMachine coffeeMachine)
        {
            _coffeeMachine = coffeeMachine;
        }
        public void InsertCoin()
        {
            Console.WriteLine("Готово для следующего клиента.");
            _coffeeMachine.SetState(_coffeeMachine.WaitingForCoinState);
        }
        public void SelectDrink()
        {
            Console.WriteLine("Готово для следующего клиента.");
        }
        public void DispenseDrink()
        {
            Console.WriteLine("Готово для следующего клиента.");
        }
    }
}
