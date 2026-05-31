using Fusion;
using UnityEngine;

public class CameraFollow : NetworkBehaviour
{
    private Camera _camera;

    private void Awake()
    {
        _camera = Camera.main;
    }

    public override void Spawned()
    {
        if (HasInputAuthority && _camera != null)
        {
            var follow = _camera.gameObject.AddComponent<CameraFollowTarget>();
            follow.Target = transform;
        }
    }
}

public class CameraFollowTarget : MonoBehaviour
{
    public Transform Target;

    private void LateUpdate()
    {
        if (Target != null)
        {
            Vector3 pos = Target.position;
            pos.z = transform.position.z;
            transform.position = pos;
        }
    }
}
