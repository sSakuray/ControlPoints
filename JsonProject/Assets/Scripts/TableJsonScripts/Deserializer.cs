using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Newtonsoft.Json;

public class Deserializer : MonoBehaviour 
{
    void Start() 
    {
        TextAsset jsonFile = Resources.Load<TextAsset>("DataBase_ParsedToJson");
        if (jsonFile != null) 
        {
            DataBase database = JsonConvert.DeserializeObject<DataBase>(jsonFile.text);
            foreach (Data item in database.items) 
            {
                Debug.Log($"Item: {item.Name} - {item.Number}");
            }
        }
    }
}