using UnityEngine;

[RequireComponent(typeof(MeshFilter))]
public class JellyBody : MonoBehaviour
{
    [Header("Настройки желе")]
    [Range(1f, 50f)]
    public float stiffness = 15f;
    
    [Range(0.1f, 5f)]
    public float damping = 0.75f;

    private Mesh mesh;
    private Vector3[] originalVerts;
    private Vector3[] displacedVerts;
    private Vector3[] vertexVelocities;

    void Start()
    {
        mesh = Instantiate(GetComponent<MeshFilter>().sharedMesh);
        GetComponent<MeshFilter>().mesh = mesh;
        
        originalVerts = mesh.vertices;
        displacedVerts = new Vector3[originalVerts.Length];
        vertexVelocities = new Vector3[originalVerts.Length];
        
        System.Array.Copy(originalVerts, displacedVerts, originalVerts.Length);
    }

    void Update()
    {
        for (int i = 0; i < displacedVerts.Length; i++)
        {
            Vector3 displacement = displacedVerts[i] - originalVerts[i];
            Vector3 springForce = -stiffness * displacement;
            vertexVelocities[i] += springForce * Time.deltaTime;
            vertexVelocities[i] *= 1f - damping * Time.deltaTime;
            displacedVerts[i] += vertexVelocities[i] * Time.deltaTime;
        }
        
        mesh.vertices = displacedVerts;
        mesh.RecalculateNormals();
    }

    void OnCollisionEnter(Collision col)
    {
        foreach (var contact in col.contacts)
        {
            ApplyPressure(contact.point, col.relativeVelocity.magnitude * 0.1f);
        }
    }

    void OnCollisionStay(Collision col)
    {
        foreach (var contact in col.contacts)
        {
            ApplyPressure(contact.point, 0.02f);
        }
    }

    public void ApplyPressure(Vector3 worldPoint, float force)
    {
        Vector3 localPoint = transform.InverseTransformPoint(worldPoint);
        
        for (int i = 0; i < displacedVerts.Length; i++)
        {
            float dist = Vector3.Distance(localPoint, originalVerts[i]);
            float falloff = Mathf.Exp(-dist * 4f);
            Vector3 dir = (originalVerts[i] - localPoint).normalized;
            vertexVelocities[i] += dir * force * falloff;
        }
    }
}
