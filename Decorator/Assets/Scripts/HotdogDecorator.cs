public abstract class HotdogDecorator : Hotdog
{
    protected readonly Hotdog _hotdog;

    protected HotdogDecorator(Hotdog hotdog) : base(hotdog.GetName())
    {
        _hotdog = hotdog;
    }

    public override string GetName() => _hotdog.GetName();
    public override int GetCost() => _hotdog.GetCost();
    public override int GetWeight() => _hotdog.GetWeight();
}
