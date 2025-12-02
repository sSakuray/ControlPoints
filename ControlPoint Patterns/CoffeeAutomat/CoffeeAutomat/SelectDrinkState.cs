using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeAutomat
{
    public class SelectDrinkState : ICoffeeMachineState
    {
        private CoffeeMachine _coffeeMachine;

        public SelectDrinkState(CoffeeMachine coffeeMachine)
        {
            _coffeeMachine = coffeeMachine;
        }
        public void InsertCoin()
        {
            Console.WriteLine("Монета уже внесена.");
        }
        public void SelectDrink()
        {
            Console.WriteLine("Напиток выбран.");
            _coffeeMachine.SetState(_coffeeMachine.DispenseDrinkState);
        }
        public void DispenseDrink()
        {
            Console.WriteLine("Сначала выберите напиток.");
        }
    }
}
