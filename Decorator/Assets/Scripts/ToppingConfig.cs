using UnityEngine;

[CreateAssetMenu(fileName = "NewToppingConfig", menuName = "Hotdog/Topping Config")]
public class ToppingConfig : ScriptableObject
{
    public string toppingName = "топпингом";
    public int cost = 0;
    public int weight = 0;
}
