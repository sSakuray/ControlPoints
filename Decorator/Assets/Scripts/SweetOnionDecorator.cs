public class SweetOnionDecorator : HotdogDecorator
{
    private readonly ToppingConfig _config;

    public SweetOnionDecorator(Hotdog hotdog) : base(hotdog)
    {
        _config = null;
    }

    public SweetOnionDecorator(Hotdog hotdog, ToppingConfig config) : base(hotdog)
    {
        _config = config;
    }

    public override string GetName()
    {
        string toppingName = _config != null ? _config.toppingName : "сладким луком";
        return $"{_hotdog.GetName()} с {toppingName}";
    }

    public override int GetCost()
    {
        int extraCost = _config != null ? _config.cost : 30;
        return _hotdog.GetCost() + extraCost;
    }

    public override int GetWeight()
    {
        int extraWeight = _config != null ? _config.weight : 10;
        return _hotdog.GetWeight() + extraWeight;
    }
}
