using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Parser : MonoBehaviour 
{
    void Start() 
    {
        TextAsset csvFile = Resources.Load<TextAsset>("items");
        if (csvFile != null) 
        {
            Utils.ParseCSV(csvFile.text);
            Debug.Log("CSV успешно спарсен!");
        }
        else 
        {
            Debug.LogError("CSV файл не найден!");
        }
    }
}
