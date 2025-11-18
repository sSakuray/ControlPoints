using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class Block : MonoBehaviour
{
    public TextMeshProUGUI formulaText;
    public TextMeshProUGUI label1;
    public TMP_InputField input1;
    public TextMeshProUGUI label2;
    public TMP_InputField input2;
    public Button calculateButton;
    public TextMeshProUGUI resultText;
    public Constants constants;
    public Formulas formulas;
    public int formulaIndex = 1;

    private void Start()
    {
        switch (formulaIndex)
        {
            case 1:
                formulaText.text = formulas.formula1;
                label1.text = "Масса (kg):";
                label2.text = "Ускорение (m/s²):";
                break;
            case 2:
                formulaText.text = formulas.formula2;
                label1.text = "Масса 1 (kg):";
                label2.text = "Расстояние (m):";
                break;
            case 3:
                formulaText.text = formulas.formula3;
                label1.text = "Масса (kg):";
                label2.text = "Скорость (m/s):";
                break;
            case 4:
                formulaText.text = formulas.formula4;
                label1.text = "Масса (kg):";
                label2.text = "Высота (m):";
                break;
            case 5:
                formulaText.text = formulas.formula5;
                label1.text = "Сила (N):";
                label2.text = "Расстояние (m):";
                break;
        }

        calculateButton.onClick.AddListener(Calculate);
        calculateButton.interactable = false;

        input1.onValueChanged.AddListener(OnInputChanged);
        input2.onValueChanged.AddListener(OnInputChanged);
    }

    private void OnInputChanged(string _)
    {
        calculateButton.interactable = !string.IsNullOrEmpty(input1.text) && !string.IsNullOrEmpty(input2.text);
    }

    private void Calculate()
    {
        float value1 = float.Parse(input1.text);
        float value2 = float.Parse(input2.text);
        float result = 0;
        switch (formulaIndex)
        {
            case 1:
                result = Calculator.CalculateForce(value1, value2);
                break;
            case 2:
                result = Calculator.CalculateGravitationalForce(value1, value2, value2, constants);
                break;
            case 3:
                result = Calculator.CalculateKineticEnergy(value1, value2);
                break;
            case 4:
                result = Calculator.CalculatePotentialEnergy(value1, value2, constants);
                break;
            case 5:
                result = Calculator.CalculateWork(value1, value2);
                break;
        }
        resultText.text = "Result: " + result.ToString("F2");
    }
}
