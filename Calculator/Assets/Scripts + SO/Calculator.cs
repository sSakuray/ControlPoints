using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class Calculator
{
    public static float CalculateForce(float mass, float acceleration)
    {
        return mass * acceleration;  
    }
    public static float CalculateGravitationalForce(float mass1, float mass2, float distance, Constants constants)
    {
        return constants.gravitationalConst * (mass1 * mass2) / Mathf.Pow(distance, 2);  
    }
    public static float CalculateKineticEnergy(float mass, float velocity)
    {
        return 0.5f * mass * Mathf.Pow(velocity, 2);  
    }
    public static float CalculatePotentialEnergy(float mass, float height, Constants constants)
    {
        return mass * constants.gravityConst * height;  
    }
    public static float CalculateWork(float force, float distance)
    {
        return force * distance;  
    }
}
