using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp
{
    public interface IChatMember
    {
        string Name { get; }
        void Send(string message);
        void Receive(string message, string senderName);
    }
}
