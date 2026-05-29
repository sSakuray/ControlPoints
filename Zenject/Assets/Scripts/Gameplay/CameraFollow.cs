using UnityEngine;
using Zenject;

public class CameraFollow : MonoBehaviour
{
    public Vector3 offset = new Vector3(0, 0, -10f);
    public float smoothSpeed = 5f;
    private Transform _target;

    [Inject]
    public void Construct(SimplePlayerMovement player)
    {
        _target = player.transform;
    }

    private void LateUpdate()
    {
        if (_target == null) 
        {
            return;
        }
        transform.position = Vector3.Lerp(transform.position, _target.position + offset, smoothSpeed * Time.deltaTime);
    }
}
