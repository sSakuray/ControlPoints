using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp
{
    public class ChatMember : IChatMember
    {
        private readonly IChatMediator _mediator;
        public string Name { get; }

        public ChatMember(string name, IChatMediator mediator)
        {
            Name = name;
            _mediator = mediator;
            _mediator.Register(this);
        }
        public void Send(string message)
        {
            Console.WriteLine($"[{Name}] отправляет: {message}");
            _mediator.SendMessage(message, this);
        }
        public void Receive(string message, string senderName)
        {
            Console.WriteLine($"[{Name}] получил от [{senderName}]: {message}");
        }
    }
}
