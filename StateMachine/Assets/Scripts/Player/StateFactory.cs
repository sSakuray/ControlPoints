using System.Collections.Generic;

public class StateFactory
{
    private PlayerController _player;
    private List<PlayerState> _states;
    private int _currentIndex;

    public StateFactory(PlayerController player)
    {
        _player = player;
        _states = new List<PlayerState>
        {
            new ShootState(player),
            new HighlightState(player),
            new TransparentState(player)
        };
        
        _currentIndex = 0;
    }

    public PlayerState GetInitialState()
    {
        return _states[0];
    }

    public PlayerState GetNextState()
    {
        _currentIndex = (_currentIndex + 1) % _states.Count;
        return _states[_currentIndex];
    }
}
