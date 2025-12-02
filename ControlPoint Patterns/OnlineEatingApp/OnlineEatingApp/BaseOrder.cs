using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OnlineEatingApp
{
    public class BaseOrder : IOrder
    {
        private readonly string _name;
        private readonly decimal _price;

        public BaseOrder(string name, decimal price)
        {
            _name = name;
            _price = price;
        }

        public decimal GetPrice() => _price;
        public string GetDescription() => _name;
    }
}
