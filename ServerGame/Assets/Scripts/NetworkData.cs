using System;

// Все структуры, которые Unity JsonUtility умеет разбирать.
// ВАЖНО: поля должны быть public, класс — [Serializable].

/// <summary>Снимок одного игрока в state-пакете сервера.</summary>
[Serializable]
public class PlayerState
{
    public string id;
    public float  x;
    public float  y;
    public float  facing; // +1 вправо, -1 влево
    public int    hp;
    public bool   dead;
}

/// <summary>Снимок одной пули в state-пакете (vx/vy нужны для плавной экстраполяции).</summary>
[Serializable]
public class BulletState
{
    public int   id;
    public float x;
    public float y;
    public float vx;
    public float vy;
}

/// <summary>Полный снимок мира (type = "state").</summary>
[Serializable]
public class GameState
{
    public string        type;
    public PlayerState[] players;
    public BulletState[] bullets;
}

/// <summary>
/// Универсальное сообщение для assign / hit / respawn / leave.
/// JsonUtility игнорирует лишние поля, поэтому один класс накрывает все типы.
/// </summary>
[Serializable]
public class NetMessage
{
    public string type;
    public string id;
    public string targetId; // используется в hit
    public float  x;
    public float  y;
    public int    hp;
    public bool   dead;
}
