using UnityEngine;

public class HotdogDebugger : MonoBehaviour
{
    [SerializeField] private HotdogConfig classicConfig;
    [SerializeField] private HotdogConfig bavarianConfig;
    [SerializeField] private HotdogConfig americanConfig;
    [SerializeField] private ToppingConfig pickledCucumberConfig;
    [SerializeField] private ToppingConfig sweetOnionConfig;

    private void Start()
    {
        bool useSO = classicConfig != null && bavarianConfig != null && americanConfig != null;

        Hotdog classic = useSO ? new ClassicHotdog(classicConfig) : new ClassicHotdog();
        Hotdog bavarian = useSO ? new BavarianHotdog(bavarianConfig) : new BavarianHotdog();
        Hotdog american = useSO ? new AmericanHotdog(americanConfig) : new AmericanHotdog();

        DebugHotdog(classic, useSO);
        DebugHotdog(bavarian, useSO);
        DebugHotdog(american, useSO);
    }

    private void DebugHotdog(Hotdog hotdog, bool includeWeight)
    {
        if (includeWeight)
            Debug.Log($"{hotdog.GetName()} ({hotdog.GetWeight()}г) — {hotdog.GetCost()}р.");
        else
            Debug.Log($"{hotdog.GetName()} — {hotdog.GetCost()}р.");

        Debug.Log("Дополнительная информация:");

        Hotdog withPickles = (pickledCucumberConfig != null)
            ? new PickledCucumberDecorator(hotdog, pickledCucumberConfig)
            : new PickledCucumberDecorator(hotdog);

        Hotdog withOnion = (sweetOnionConfig != null)
            ? new SweetOnionDecorator(hotdog, sweetOnionConfig)
            : new SweetOnionDecorator(hotdog);

        if (includeWeight)
        {
            Debug.Log($"{withPickles.GetName()} ({withPickles.GetWeight()}г) — {withPickles.GetCost()}р.");
            Debug.Log($"{withOnion.GetName()} ({withOnion.GetWeight()}г) — {withOnion.GetCost()}р.");
        }
        else
        {
            Debug.Log($"{withPickles.GetName()} — {withPickles.GetCost()}р.");
            Debug.Log($"{withOnion.GetName()} — {withOnion.GetCost()}р.");
        }

        Debug.Log("---");
    }
}
