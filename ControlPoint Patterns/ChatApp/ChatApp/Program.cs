namespace ChatApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var mediator = new ChatMediator();

            var sS = new ChatMember("sSakuray", mediator);
            var Partiza = new ChatMember("Partiza", mediator);
            var Biscotto = new ChatMember("Biscotto", mediator);

            Partiza.Send("Сегодня Dnd");
            Console.WriteLine();

            sS.Send("Услышал тебя , родной");
            Console.WriteLine();

            Biscotto.Send("Че , сегодня за пивом идти?");
        }
    }
}
