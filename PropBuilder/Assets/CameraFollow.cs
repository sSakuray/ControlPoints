using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform player;
    public Vector3 offset = new Vector3(0, 2, -5);
    public float followSpeed = 10f;
    public float lookSpeed = 10f;

    void FixedUpdate()
    {
        if (!player) return;

        Vector3 targetPosition = player.position + player.rotation * offset;
        transform.position = Vector3.Lerp(transform.position, targetPosition, followSpeed * Time.fixedDeltaTime);

        Quaternion targetRotation = Quaternion.LookRotation(player.position + Vector3.up * 1.5f - transform.position);
        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, lookSpeed * Time.fixedDeltaTime);
    }
}