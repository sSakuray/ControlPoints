using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineEatingApp
{
    public abstract class OrderDecorator : IOrder
    {
        protected IOrder _order;

        public OrderDecorator(IOrder order)
        {
            _order = order;
        }

        public virtual decimal GetPrice() => _order.GetPrice();
        public virtual string GetDescription() => _order.GetDescription();
    }
}
