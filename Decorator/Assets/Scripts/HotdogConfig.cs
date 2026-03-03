using UnityEngine;

[CreateAssetMenu(fileName = "NewHotdogConfig", menuName = "Hotdog/Hotdog Config")]
public class HotdogConfig : ScriptableObject
{
    public string hotdogName = "Хот-дог";
    public int cost = 200;
    public int weight = 150;
}
