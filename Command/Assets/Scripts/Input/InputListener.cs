using UnityEngine;

[DefaultExecutionOrder(-50)]
public class InputListener : MonoBehaviour
{
    public static InputListener Instance { get; private set; }

    public Vector2 LastClickPosition { get; private set; }

    private Camera _mainCamera;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        _mainCamera = Camera.main;
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1) || Input.GetMouseButtonDown(2))
        {
            LastClickPosition = _mainCamera.ScreenToWorldPoint(Input.mousePosition);
        }
    }
}
