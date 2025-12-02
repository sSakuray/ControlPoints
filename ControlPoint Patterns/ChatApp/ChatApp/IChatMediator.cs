using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp
{
    public interface IChatMediator
    {
        void Register(IChatMember member);
        void SendMessage(string message, IChatMember sender);
    }
}
