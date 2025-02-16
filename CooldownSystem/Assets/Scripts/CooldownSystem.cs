using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;
using System.Linq;

public class CooldownSystem : MonoBehaviour
{
    public Button ability1Button;
    public Button ability2Button;
    public Button ability3Button;

    public float cooldown1 = 5f;
    public float cooldown2 = 10f;
    public float cooldown3 = 15f;

    public GameObject targetObject;

    private Dictionary<Button, float> cooldownTimers = new Dictionary<Button, float>();

    void Start()
    {
        ability1Button.onClick.AddListener(() => UseAbility(ability1Button, Color.red, cooldown1));
        ability2Button.onClick.AddListener(() => UseAbility(ability2Button, Color.green, cooldown2));
        ability3Button.onClick.AddListener(() => UseAbility(ability3Button, Color.blue, cooldown3));

        cooldownTimers[ability1Button] = 0f;
        cooldownTimers[ability2Button] = 0f;
        cooldownTimers[ability3Button] = 0f;
    }

    void Update()
    {
        foreach (var button in cooldownTimers.Keys.ToList())
        {
            if (cooldownTimers[button] > 0)
            {
                cooldownTimers[button] -= Time.deltaTime;
                
                button.interactable = false;

                if (cooldownTimers[button] <= 0)
                {
                    button.interactable = true;
                }
            }
        }
    }

    void UseAbility(Button button, Color abilityColor, float cooldownTime)
    {
        if (cooldownTimers[button] <= 0)
        {
            targetObject.GetComponent<Renderer>().material.color = abilityColor;

            cooldownTimers[button] = cooldownTime;
        }
    }
}