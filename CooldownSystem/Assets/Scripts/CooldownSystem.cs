using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;

public class CooldownSystem : MonoBehaviour
{
    public Button ability1Button;
    public Button ability2Button;
    public Button ability3Button;

    public float cooldown1 = 5f;
    public float cooldown2 = 10f;
    public float cooldown3 = 15f;

    public GameObject targetObject;

    private Dictionary<Button, Coroutine> activeCooldowns = new Dictionary<Button, Coroutine>();

    void Start()
    {
        ability1Button.onClick.AddListener(() => StartAbility(ability1Button, Color.red, cooldown1));
        ability2Button.onClick.AddListener(() => StartAbility(ability2Button, Color.green, cooldown2));
        ability3Button.onClick.AddListener(() => StartAbility(ability3Button, Color.blue, cooldown3));
    }

    void StartAbility(Button button, Color abilityColor, float cooldownTime)
    {
        if (!activeCooldowns.ContainsKey(button))
        {
            ApplyAbilityEffect(abilityColor);
            
            Coroutine cooldownCoroutine = StartCoroutine(AbilityCooldown(button, cooldownTime));
            activeCooldowns.Add(button, cooldownCoroutine);
            
            button.interactable = false;
        }
    }

    IEnumerator AbilityCooldown(Button button, float cooldownTime)
    {
        yield return new WaitForSeconds(cooldownTime);
        
        button.interactable = true;
        
        activeCooldowns.Remove(button);
    }

    void ApplyAbilityEffect(Color color)
    {
        if (targetObject != null)
        {
            targetObject.GetComponent<Renderer>().material.color = color;
        }
    }

    void OnDestroy()
    {
        foreach (var coroutine in activeCooldowns.Values)
        {
            if (coroutine != null)
            {
                StopCoroutine(coroutine);
            }
        }
    }
}