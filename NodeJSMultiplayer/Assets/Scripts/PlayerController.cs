using UnityEngine;

public class PlayerController : MonoBehaviour
{
    void Update()
    {
        if (NetworkManager.Instance == null) return;

        float ix = Input.GetAxisRaw("Horizontal");
        float iy = Input.GetAxisRaw("Vertical");

        Vector3 worldMouse = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        worldMouse.z = 0;
        Vector2 dir = (worldMouse - transform.position).normalized;

        bool shoot = Input.GetMouseButton(0);

        NetworkManager.Instance.SendInput(ix, iy, dir.x, dir.y, shoot);
    }
}
