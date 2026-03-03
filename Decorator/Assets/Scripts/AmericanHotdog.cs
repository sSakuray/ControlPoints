public class AmericanHotdog : Hotdog
{
    private readonly HotdogConfig _config;

    public AmericanHotdog() : base("Хот-дог американский")
    {
        _config = null;
    }

    public AmericanHotdog(HotdogConfig config) : base(config.hotdogName)
    {
        _config = config;
    }

    public override int GetCost() => _config != null ? _config.cost : 270;
    public override int GetWeight() => _config != null ? _config.weight : 200;
}
