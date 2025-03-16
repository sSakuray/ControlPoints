using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerController : MonoBehaviour
{
    [Header("MoveSetting")]
    [SerializeField] private float moveSpeed;
    [SerializeField] private float turnSpeed;
    [SerializeField] private float jumpForce;
    [SerializeField] private KeyCode jumpkey;
    private Rigidbody rb;

    [Header("DeathSetting")]
    private int DeathPosition = 1;
    [Header("EyesSetting")]
    [SerializeField] private GameObject eye1;
    [SerializeField] private GameObject eye2;
    private Color baseColor = Color.black;
    private Renderer eRenderer1;
    private Renderer eRenderer2;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        eRenderer1 = eye1.GetComponent<Renderer>();
        eRenderer2 = eye2.GetComponent<Renderer>();
        eRenderer1.material.color = baseColor;
        eRenderer2.material.color = baseColor;
    }

    void Update()
    {
        Move();
        Rotate();
        Jump();
        if (transform.position.y <= DeathPosition)
        {
            Die();
        }
    }

    void Move()
    {
        float moveDirection = Input.GetAxis("Vertical") * moveSpeed * Time.deltaTime;
        transform.Translate(0, 0, moveDirection);
    }
    
    private void Rotate()
    {
        float rotateDirection = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;
        transform.Rotate(0, rotateDirection, 0);
    }

    private void Jump()
    {
        if (Input.GetKeyDown(jumpkey))
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }
    }

    private void Die()
    {
        SceneManager.LoadScene(0);
    }
}
