public class PickledCucumberDecorator : HotdogDecorator
{
    private readonly ToppingConfig _config;

    public PickledCucumberDecorator(Hotdog hotdog) : base(hotdog)
    {
        _config = null;
    }

    public PickledCucumberDecorator(Hotdog hotdog, ToppingConfig config) : base(hotdog)
    {
        _config = config;
    }

    public override string GetName()
    {
        string toppingName = _config != null ? _config.toppingName : "маринованными огурцами";
        return $"{_hotdog.GetName()} с {toppingName}";
    }

    public override int GetCost()
    {
        int extraCost = _config != null ? _config.cost : 50;
        return _hotdog.GetCost() + extraCost;
    }

    public override int GetWeight()
    {
        int extraWeight = _config != null ? _config.weight : 20;
        return _hotdog.GetWeight() + extraWeight;
    }
}
