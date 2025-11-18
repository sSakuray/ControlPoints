using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "Constants", menuName = "Physics/Constants")]
public class Constants : ScriptableObject
{
    public float gravityConst = 9.81f;
    public float gravitationalConst = 6.67430e-11f;
}
