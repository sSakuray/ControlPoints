using UnityEngine;
using UnityEngine.InputSystem;

[RequireComponent(typeof(PlayerInput))]
public class PlayerInputHandler : MonoBehaviour
{
    private PlayerInput _playerInput;

    private InputAction _moveAction;
    private InputAction _attackAction;
    private InputAction _changeStateAction;
    private InputAction _pauseAction;
    private InputAction _finalAction;

    public Vector2 MoveInput { get; private set; }
    public bool IsAttackPressed { get; private set; }
    public bool IsChangeStatePressed { get; private set; }
    public bool IsPausePressed { get; private set; }
    public bool IsFinalPressed { get; private set; }

    private void Awake()
    {
        _playerInput = GetComponent<PlayerInput>();
        _moveAction = _playerInput.actions.FindAction("Move");
        _attackAction = _playerInput.actions.FindAction("Attack");
        _changeStateAction = _playerInput.actions.FindAction("Submit");
        _pauseAction = _playerInput.actions.FindAction("Jump");
        _finalAction = _playerInput.actions.FindAction("Cancel");
    }

    private void Update()
    {
        if (_moveAction != null)
        {
            MoveInput = _moveAction.ReadValue<Vector2>();
        }

        if (_attackAction != null)
        {
            IsAttackPressed = _attackAction.WasPressedThisFrame();
        }

        if (_changeStateAction != null)
        {
            IsChangeStatePressed = _changeStateAction.WasPressedThisFrame();
        }

        if (_pauseAction != null)
        {
            IsPausePressed = _pauseAction.WasPressedThisFrame();
        }

        if (_finalAction != null)
        {
            IsFinalPressed = _finalAction.WasPressedThisFrame();
        }
    }

    public void EnablePlayerInput()
    {
        if (_moveAction != null)
        {
            _moveAction.Enable();
        }
        if (_attackAction != null)
        {
            _attackAction.Enable();
        }
        if (_changeStateAction != null)
        {
            _changeStateAction.Enable();
        }
    }

    public void DisablePlayerInput()
    {
        if (_moveAction != null)
        {
            _moveAction.Disable();
        }
        if (_attackAction != null)
        {
            _attackAction.Disable();
        }
        if (_changeStateAction != null)
        {
            _changeStateAction.Disable();
        }
    }

    public void EnableGameModesInput()
    {
        if (_pauseAction != null)
        {
            _pauseAction.Enable();
        }
        if (_finalAction != null)
        {
            _finalAction.Enable();
        }
    }
}
