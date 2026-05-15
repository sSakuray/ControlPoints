using System.Collections.Generic;
using UnityEngine;

public class GameWorld : MonoBehaviour
{
    [Header("Scene References")]
    public GameObject localPlayerObject;
    public GameUI     gameUI;

    private Dictionary<string, GameObject> _remotes = new Dictionary<string, GameObject>();
    private Dictionary<int, GameObject>    _bullets = new Dictionary<int, GameObject>();
    private bool _dead = false;

    void Update()
    {
        if (NetworkManager.Instance == null) return;
        GameState state = NetworkManager.Instance.LatestState;
        if (state == null) return;

        string myId = NetworkManager.Instance.playerId;
        HashSet<string> activeIds = new HashSet<string>();

        foreach (PlayerState ps in state.players)
        {
            if (ps == null || string.IsNullOrEmpty(ps.id)) continue;
            activeIds.Add(ps.id);
            Vector3 pos = new Vector3(ps.x, ps.y, 0);

            if (ps.id == myId)
            {
                if (localPlayerObject != null)
                    localPlayerObject.transform.position = pos;

                bool justDied    = ps.hp <= 0 && !_dead;
                bool justRevived = ps.hp > 0  && _dead;
                _dead = ps.hp <= 0;

                if (justDied)    gameUI?.ShowDeath();
                if (justRevived) gameUI?.HideDeath();
                gameUI?.SetHP(ps.hp);
            }
            else
            {
                if (!_remotes.TryGetValue(ps.id, out GameObject go))
                {
                    go = CreateCircle(ps.id, Color.red, 0.5f);
                    _remotes[ps.id] = go;
                }
                go.transform.position = pos;
                var sr = go.GetComponent<SpriteRenderer>();
                if (sr) sr.color = ps.hp <= 0 ? new Color(1f, 0f, 0f, 0.3f) : Color.red;
            }
        }

        var toRemoveP = new List<string>();
        foreach (var kv in _remotes)
            if (!activeIds.Contains(kv.Key)) toRemoveP.Add(kv.Key);
        foreach (string id in toRemoveP) { Destroy(_remotes[id]); _remotes.Remove(id); }

        HashSet<int> activeBulletIds = new HashSet<int>();
        if (state.bullets != null)
        {
            foreach (BulletState bs in state.bullets)
            {
                if (bs == null) continue;
                activeBulletIds.Add(bs.id);
                if (!_bullets.TryGetValue(bs.id, out GameObject bgo))
                {
                    Color c = bs.ownerId == myId ? Color.yellow : Color.white;
                    bgo = CreateCircle("B_" + bs.id, c, 0.15f);
                    _bullets[bs.id] = bgo;
                }
                bgo.transform.position = new Vector3(bs.x, bs.y, 0);
            }
        }

        var toRemoveB = new List<int>();
        foreach (var kv in _bullets)
            if (!activeBulletIds.Contains(kv.Key)) toRemoveB.Add(kv.Key);
        foreach (int id in toRemoveB) { Destroy(_bullets[id]); _bullets.Remove(id); }
    }

    public void OnRestart()
    {
        NetworkManager.Instance?.SendInput(0, 0, 1, 0, false, restart: true);
    }

    private GameObject CreateCircle(string name, Color color, float radius)
    {
        var go = new GameObject(name);
        var sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = GetCircleSprite();
        sr.color  = color;
        float d = radius * 2f;
        go.transform.localScale = new Vector3(d, d, 1f);
        return go;
    }

    private static Sprite _cachedCircle;
    private static Sprite GetCircleSprite()
    {
        if (_cachedCircle != null) return _cachedCircle;
        int size = 64;
        var tex = new Texture2D(size, size, TextureFormat.RGBA32, false);
        float cx = size / 2f, cy = size / 2f, r = size / 2f - 1;
        for (int y = 0; y < size; y++)
        for (int x = 0; x < size; x++)
        {
            float dx = x - cx, dy = y - cy;
            tex.SetPixel(x, y, dx*dx + dy*dy <= r*r ? Color.white : Color.clear);
        }
        tex.Apply();
        _cachedCircle = Sprite.Create(tex, new Rect(0, 0, size, size), new Vector2(0.5f, 0.5f), 100f);
        return _cachedCircle;
    }
}
