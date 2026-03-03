public abstract class Hotdog
{
    private readonly string _name;

    protected Hotdog(string name)
    {
        _name = name;
    }

    public virtual string GetName() => _name;
    public abstract int GetCost();
    public abstract int GetWeight();
}