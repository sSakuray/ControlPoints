using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoffeeAutomat
{
    public class CoffeeMachine
    {
        public ICoffeeMachineState WaitingForCoinState { get; set; }
        public ICoffeeMachineState SelectDrinkState { get; set; }
        public ICoffeeMachineState DispenseDrinkState { get; set; }
        public ICoffeeMachineState ReadyState { get; set; }
        private ICoffeeMachineState _currentState;

        public CoffeeMachine()
        {
            WaitingForCoinState = new WaitingForCoinState(this);
            SelectDrinkState = new SelectDrinkState(this);
            DispenseDrinkState = new DispenseDrinkState(this);
            ReadyState = new ReadyState(this);

            _currentState = WaitingForCoinState;
        }
        public void SetState(ICoffeeMachineState newState)
        {
            _currentState = newState;
        }
        public void InsertCoin() => _currentState.InsertCoin();
        public void SelectDrink() => _currentState.SelectDrink();
        public void DispenseDrink() => _currentState.DispenseDrink();
    }
}
