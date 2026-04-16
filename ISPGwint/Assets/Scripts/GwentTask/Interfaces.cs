namespace GwentTask
{
    public interface IArcher { }
    public interface IMeleeFighter { }
    public interface ISiegeWeapon { }
    public enum SpecialAbilityType
    {
        None,
        Spy,
        Medic,
        Connection,
        Pretence,
        Twin,
        StrengthSurge,
        Execution,
        Berserk,
        Mardrem,
        AvengerCall,
        CommandersHorn
    }

    public interface IHasSpecialAbility
    {
        SpecialAbilityType AbilityType { get; }
        void ApplySpecialAbility();
    }

    public interface IRareCard { }

    public interface IUltimate
    {
        void ApplyUltimate();
    }

    public interface IWithStrength
    {
        int StrengthPoints { get; }
        void ApplyStrength();
    }

    public interface IWeatherCard
    {
        void ApplyWeatherEffect();
    }

    public interface ISpy : IHasSpecialAbility { }
    public interface IMedic : IHasSpecialAbility { }
    public interface IConnection : IHasSpecialAbility { }
    public interface IPretence : IHasSpecialAbility { }
    public interface ITwin : IHasSpecialAbility { }
    public interface IStrengthSurge : IHasSpecialAbility { }
    public interface IExecution : IHasSpecialAbility { }
    public interface IBerserk : IHasSpecialAbility { }
    public interface IMardrem : IHasSpecialAbility { }
    public interface IAvengerCall : IHasSpecialAbility { }
    public interface ICommandersHorn : IHasSpecialAbility { }
}
