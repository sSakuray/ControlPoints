using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp
{
    public class ChatMediator : IChatMediator
    {
        private readonly List<IChatMember> _members = new();

        public void Register(IChatMember member)
        {
            if (!_members.Contains(member))
                _members.Add(member);
        }
        public void SendMessage(string message, IChatMember sender)
        {
            foreach (var member in _members)
            {
                if (member != sender)
                    member.Receive(message, sender.Name);
            }
        }
    }
}
