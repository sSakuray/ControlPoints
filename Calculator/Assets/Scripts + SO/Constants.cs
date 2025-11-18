using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "Constants", menuName = "Physics/Constants")]
public class Constants : ScriptableObject
{
    public float gravityConst = 9.81f;
    public float speedOfLight = 299792458f; 
    public float earthMass = 5.972e24f;
}
