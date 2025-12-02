using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineEatingApp
{
    public class DrinkAddition : OrderDecorator
    {
        private readonly string _drinkName;
        private readonly decimal _drinkPrice;

        public DrinkAddition(IOrder order, string drinkName, decimal drinkPrice) : base(order)
        {
            _drinkName = drinkName;
            _drinkPrice = drinkPrice;
        }

        public override decimal GetPrice() => _order.GetPrice() + _drinkPrice;
        public override string GetDescription() => _order.GetDescription() + $" + {_drinkName}";
    }
}
