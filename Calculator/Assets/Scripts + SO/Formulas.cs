using System.Collections;
using System.Collections.Generic;
using System.IO.Enumeration;
using UnityEngine;

[CreateAssetMenu(fileName = "Formulas", menuName = "Physics/Formulas")]
public class Formulas : ScriptableObject
{
    public string formula1 = "F = m * a"; 
    public string formula2 = "F = G * (m1 * m2) / r^2"; 
    public string formula3 = "E_k = 1/2 * m * v^2";  
    public string formula4 = "E_p = m * g * h";  
    public string formula5 = "W = F * s";  
}
