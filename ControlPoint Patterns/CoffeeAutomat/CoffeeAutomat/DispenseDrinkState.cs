using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeAutomat
{
    public class DispenseDrinkState : ICoffeeMachineState
    {
        private CoffeeMachine _coffeeMachine;

        public DispenseDrinkState(CoffeeMachine coffeeMachine)
        {
            _coffeeMachine = coffeeMachine;
        }
        public void InsertCoin()
        {
            Console.WriteLine("Монета уже внесена.");
        }
        public void SelectDrink()
        {
            Console.WriteLine("Напиток уже выбран.");
        }
        public void DispenseDrink()
        {
            Console.WriteLine("Напиток готов!");
            _coffeeMachine.SetState(_coffeeMachine.ReadyState);
        }
    }
}
