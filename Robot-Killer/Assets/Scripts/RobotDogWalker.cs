using UnityEngine;

public class RobotDogWalker : MonoBehaviour
{
    public float gaitSpeed = 5f;
    public float hipAmplitude = 30f;
    public float kneeAmplitude = 45f;
    public float ankleAmplitude = 15f;

    public HingeJoint[] hips = new HingeJoint[4];
    public HingeJoint[] knees = new HingeJoint[4];
    public HingeJoint[] ankles = new HingeJoint[4];

    private float timer;
    private float[] phases = { 0f, 3.1415f, 3.1415f, 0f };

    void FixedUpdate()
    {
        timer += Time.fixedDeltaTime * gaitSpeed;

        for (int i = 0; i < 4; i++)
        {
            if (hips[i])
            {
                SetAngle(hips[i], Mathf.Sin(timer + phases[i]) * hipAmplitude);
            }

            if (knees[i])
            {
                SetAngle(knees[i], Mathf.Max(0f, Mathf.Cos(timer + phases[i])) * kneeAmplitude);
            }

            if (ankles[i])
            {
                SetAngle(ankles[i], Mathf.Sin(timer + phases[i] - 1.5f) * ankleAmplitude);
            }
        }
    }

    void SetAngle(HingeJoint joint, float angle)
    {
        JointSpring spring = joint.spring;
        spring.targetPosition = angle;
        joint.spring = spring;
    }
}
