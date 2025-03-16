using UnityEngine;
using TMPro;

public class CoinManager : MonoBehaviour
{
    public static CoinManager instance; 

    public TextMeshProUGUI coinText; 
    private int totalCoins = 0;

    private void Awake()
    {

        if (instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void AddCoin(int value)
    {
        totalCoins += value; 
        UpdateCoinText(); 
    }

    private void UpdateCoinText()
    {
        coinText.text = totalCoins.ToString(); 
    }
}