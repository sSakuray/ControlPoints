public class ClassicHotdog : Hotdog
{
    private readonly HotdogConfig _config;

    public ClassicHotdog() : base("Хот-дог классический")
    {
        _config = null;
    }

    public ClassicHotdog(HotdogConfig config) : base(config.hotdogName)
    {
        _config = config;
    }

    public override int GetCost() => _config != null ? _config.cost : 210;
    public override int GetWeight() => _config != null ? _config.weight : 150;
}
