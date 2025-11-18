using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class Calculator
{
    public static float CalculateForce(float mass, float acceleration)
    {
        return mass * acceleration;  
    }
    public static float CalculateRelativisticEnergy(float mass, float velocity, Constants constants)
    {
        float gamma = 1f / Mathf.Sqrt(1f - Mathf.Pow(velocity / constants.speedOfLight, 2));
        return mass * Mathf.Pow(constants.speedOfLight, 2) * gamma;  
    }
    public static float CalculateKineticEnergy(float mass, float velocity)
    {
        float velocitySquaredHalf = Mathf.Pow(velocity, 2) / 2f;
        return mass * velocitySquaredHalf;  
    }
    public static float CalculatePotentialEnergy(float mass, float height, Constants constants)
    {
        float gravityHeight = constants.gravityConst * height;
        return mass * gravityHeight;  
    }
    public static float CalculateWork(float force, float distance)
    {
        return force * distance;  
    }
}
