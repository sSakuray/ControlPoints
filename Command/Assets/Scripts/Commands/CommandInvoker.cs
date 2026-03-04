using System.Collections.Generic;
using UnityEngine;

public class CommandInvoker : MonoBehaviour
{
    private const int MaxHistorySize = 10;

    private readonly LinkedList<ICommand> _history = new LinkedList<ICommand>();
    private readonly Queue<ICommand> _pendingSpawnQueue = new Queue<ICommand>();

    public void ExecuteCommand(ICommand command)
    {
        command.Execute();
        PushToHistory(command);
    }

    public void Undo()
    {
        if (_history.Count == 0)
        {
            return;
        }

        ICommand lastCommand = _history.Last.Value;
        _history.RemoveLast();
        lastCommand.Undo();
    }

    public void EnqueueDeferred(ICommand command)
    {
        _pendingSpawnQueue.Enqueue(command);
    }

    public void ExecutePendingQueue()
    {
        if (_pendingSpawnQueue.Count == 0)
        {
            return;
        }

        while (_pendingSpawnQueue.Count > 0)
        {
            ICommand command = _pendingSpawnQueue.Dequeue();
            command.Execute();
            PushToHistory(command);
        }
    }
    private void PushToHistory(ICommand command)
    {
        _history.AddLast(command);

        if (_history.Count > MaxHistorySize)
        {
            _history.RemoveFirst();
        }
    }
}
