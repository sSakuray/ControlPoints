using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineEatingApp
{
    public class ExpressDelivery : OrderDecorator
    {
        private const decimal Cost = 150m;

        public ExpressDelivery(IOrder order) : base(order) { }

        public override decimal GetPrice() => _order.GetPrice() + Cost;
        public override string GetDescription() => _order.GetDescription() + " + Оперативная доставка";
    }
}
