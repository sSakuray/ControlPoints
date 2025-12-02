using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeAutomat
{
    public class WaitingForCoinState : ICoffeeMachineState
    {
        private CoffeeMachine _coffeeMachine;

        public WaitingForCoinState(CoffeeMachine coffeeMachine)
        {
            _coffeeMachine = coffeeMachine;
        }
        public void InsertCoin()
        {
            Console.WriteLine("Монета внесена.");
            _coffeeMachine.SetState(_coffeeMachine.SelectDrinkState);
        }
        public void SelectDrink()
        {
            Console.WriteLine("Сначала вставьте монету.");
        }
        public void DispenseDrink()
        {
            Console.WriteLine("Сначала вставьте монету.");
        }
    }
}
