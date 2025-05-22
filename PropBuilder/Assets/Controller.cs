using UnityEngine;
using UnityEngine.InputSystem;

public class Controller : MonoBehaviour
{
    public float moveSpeed = 5f;
    public float crouchSpeed = 2f;
    public float jumpForce = 5f;
    public float crouchScale = 0.5f;

    public LayerMask groundLayer;
    public float groundDistance = 0.2f;

    private Rigidbody rb;
    private Vector3 originalScale;
    private bool isGrounded;
    private bool isCrouching;

    public float turnSpeed = 100f;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        originalScale = transform.localScale;
    }

    void OnCollisionEnter(Collision collision)
    {
        if (collision.contacts.Length > 0)
        {
            foreach (ContactPoint contact in collision.contacts)
            {
                if (Vector3.Dot(contact.normal, Vector3.up) > 0.5f)
                {
                    isGrounded = true;
                    break;
                }
            }
        }
    }

    void OnCollisionExit(Collision collision)
    {
        isGrounded = false;
    }


    void Update()
    {
        if (Input.GetButtonDown("Jump") && isGrounded && !isCrouching)
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }

        if (Input.GetKeyDown(KeyCode.LeftControl))
        {
            Crouch();
        }
        else if (Input.GetKeyUp(KeyCode.LeftControl))
        {
            StandUp();
        }

        float turn = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;
        transform.Rotate(0, turn, 0);
    }

    void FixedUpdate()
    {
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");

        Vector3 move = transform.right * x + transform.forward * z;
        float currentSpeed = isCrouching ? crouchSpeed : moveSpeed;
        rb.MovePosition(rb.position + move * currentSpeed * Time.fixedDeltaTime);
    }

    void Crouch()
    {
        transform.localScale = new Vector3(originalScale.x, originalScale.y * crouchScale, originalScale.z);
        isCrouching = true;
    }

    void StandUp()
    {
        if (!Physics.Raycast(transform.position, Vector3.up, originalScale.y - transform.localScale.y + 0.1f))
        {
            transform.localScale = originalScale;
            isCrouching = false;
        }
    }
}

//Да , мне помогла нейронка с приседанием , каюсь , но даже не было идей , как можно было бы сделать. (