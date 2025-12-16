using System;
using UnityEngine;

public class InputListener : MonoBehaviour
{
    public event Action<Vector2> OnMovementInput;

    private void Update()
    {
        ReadMovementInput();
    }

    private void ReadMovementInput()
    {
        float horizontal = UnityEngine.Input.GetAxisRaw("Horizontal");
        float vertical = UnityEngine.Input.GetAxisRaw("Vertical");

        Vector2 input = new Vector2(horizontal, vertical);
        
        if (input.sqrMagnitude > 1f)
        {
            input.Normalize();
        }

        OnMovementInput?.Invoke(input);
    }
}
