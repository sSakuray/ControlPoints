using UnityEngine;
using System.IO;
using Newtonsoft.Json;

public static class Utils 
{
    public static void ParseCSV(string csvText) 
    {
        string[] lines = csvText.Split(new[] { '\r', '\n' }, System.StringSplitOptions.RemoveEmptyEntries);
        Data[] dataArray = new Data[lines.Length - 1];

        for (int i = 1; i < lines.Length; i++) 
        {
            string[] values = lines[i].Split(',');
            if (values.Length >= 2) 
            {
                int number;
                if (!int.TryParse(values[1].Trim(), out number))
                {
                    Debug.LogError("Невозможно преобразовать строку в число: " + values[1]);
                    continue;
                }
                dataArray[i - 1] = new Data(
                    values[0].Trim(),
                    number
                );
            }
        }

        DataBase database = new DataBase();
        database.items = dataArray;

        string json = JsonConvert.SerializeObject(database, Formatting.Indented);
        string outputPath = Path.Combine(Application.dataPath, "Resources/DataBase_ParsedToJson.txt");
        
        using (StreamWriter writer = new StreamWriter(outputPath)) 
        {
            writer.Write(json);
        }

        #if UNITY_EDITOR
        UnityEditor.AssetDatabase.Refresh();
        #endif


        //ДА , КАЮСЬ , ОБРАТИЛСЯ К ИИ , НО РИЛ СЛОЖНО БЕЗ ИИ ЭТО ПОНЯТЬ..
    }
}