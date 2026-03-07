using UnityEngine;

public class Bootstrapper : MonoBehaviour
{
    [SerializeField] private PlayerController _playerPrefab;
    [SerializeField] private PlayerInputHandler _inputPrefab;
    [SerializeField] private HUDController _hudPrefab;

    private StateMachine _playerStateMachine;
    private StateFactory _playerStateFactory;
    private GameStateMachine _gameStateMachine;

    private PlayerInputHandler _inputInstance;
    private HUDController _hudInstance;
    private PlayerController _playerInstance;

    private void Awake()
    {
        _inputInstance = Instantiate(_inputPrefab);
        _hudInstance = Instantiate(_hudPrefab);
        _playerInstance = Instantiate(_playerPrefab, Vector3.zero, Quaternion.identity);
        _playerInstance.Initialize(_inputInstance, _hudInstance);
        _inputInstance.EnableGameModesInput();
        _playerStateMachine = new StateMachine();
        _playerStateFactory = new StateFactory(_playerInstance);
        _playerStateMachine.Initialize(_playerStateFactory.GetInitialState());
        _gameStateMachine = new GameStateMachine();
        _gameStateMachine.Initialize(_playerInstance, _inputInstance);
    }

    private void Update()
    {
        _gameStateMachine.Update();
            
        if (_gameStateMachine.CurrentState == _gameStateMachine.StatePlay)
        {
            _playerStateMachine.Update();
                
            if (_inputInstance.IsChangeStatePressed)
            {
                _playerStateMachine.ChangeState(_playerStateFactory.GetNextState());
            }
        }
    }
}
