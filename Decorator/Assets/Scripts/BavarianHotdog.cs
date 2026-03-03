public class BavarianHotdog : Hotdog
{
    private readonly HotdogConfig _config;

    public BavarianHotdog() : base("Хот-дог баварский")
    {
        _config = null;
    }

    public BavarianHotdog(HotdogConfig config) : base(config.hotdogName)
    {
        _config = config;
    }

    public override int GetCost() => _config != null ? _config.cost : 250;
    public override int GetWeight() => _config != null ? _config.weight : 180;
}
