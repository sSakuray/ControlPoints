using Mirror;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

/// <summary>
/// Процедурно создаёт всю сцену для 2D-шутера на Mirror:
/// карту, командные спавн-точки, NetworkManager, камеру, Lobby UI и Game HUD.
/// </summary>
public class SceneSetup : MonoBehaviour
{
    private void Start()
    {
        SetupScene();
    }

    private void SetupScene()
    {
        // 1. Карта
        CreateMap();

        // 2. Командные спавн-точки
        Transform[] teamASpawns = new Transform[]
        {
            CreateSpawnPoint("SpawnA_1", new Vector3(-7f, 2f, 0f)),
            CreateSpawnPoint("SpawnA_2", new Vector3(-7f, -2f, 0f))
        };
        Transform[] teamBSpawns = new Transform[]
        {
            CreateSpawnPoint("SpawnB_1", new Vector3(7f, 2f, 0f)),
            CreateSpawnPoint("SpawnB_2", new Vector3(7f, -2f, 0f))
        };

        // 3. Префабы
        GameObject playerPrefab = CreatePlayerPrefab();
        GameObject bulletPrefab = CreateBulletPrefab();

        PlayerController pc = playerPrefab.GetComponent<PlayerController>();
        if (pc != null) pc.bulletPrefab = bulletPrefab;

        // 4. Камера
        SetupCamera();

        // 5. NetworkManager
        GameNetworkManager nm = CreateNetworkManager(teamASpawns, teamBSpawns);
        nm.playerPrefab = playerPrefab;
        if (!nm.spawnPrefabs.Contains(bulletPrefab))
        {
            nm.spawnPrefabs.Add(bulletPrefab);
        }

        // 6. UI
        CreateLobbyUI();
        CreateGameHUD();

        // Готово — отключаем этот объект
        gameObject.SetActive(false);
    }

    // ──────────────────────── КАРТА ────────────────────────

    private void CreateMap()
    {
        GameObject map = new GameObject("Map");

        // Внешние стены
        CreateWall(map.transform, "Wall_Top",    new Vector3(0, 6f, 0),   new Vector2(20f, 1f));
        CreateWall(map.transform, "Wall_Bottom", new Vector3(0, -6f, 0),  new Vector2(20f, 1f));
        CreateWall(map.transform, "Wall_Left",   new Vector3(-10f, 0, 0), new Vector2(1f, 12f));
        CreateWall(map.transform, "Wall_Right",  new Vector3(10f, 0, 0),  new Vector2(1f, 12f));

        // Укрытия
        CreateWall(map.transform, "Cover_1", new Vector3(-4f,  3f, 0),  new Vector2(2f, 0.5f));
        CreateWall(map.transform, "Cover_2", new Vector3(-4f, -3f, 0),  new Vector2(2f, 0.5f));
        CreateWall(map.transform, "Cover_3", new Vector3(4f,   3f, 0),  new Vector2(2f, 0.5f));
        CreateWall(map.transform, "Cover_4", new Vector3(4f,  -3f, 0),  new Vector2(2f, 0.5f));
        CreateWall(map.transform, "Cover_5", new Vector3(0f,   0f, 0),  new Vector2(0.5f, 4f));
        CreateWall(map.transform, "Cover_6", new Vector3(-2f,  0f, 0),  new Vector2(1.5f, 0.5f));
        CreateWall(map.transform, "Cover_7", new Vector3(2f,   0f, 0),  new Vector2(1.5f, 0.5f));
    }

    private void CreateWall(Transform parent, string name, Vector3 pos, Vector2 size)
    {
        GameObject wall = new GameObject(name);
        wall.transform.SetParent(parent);
        wall.transform.position = pos;
        wall.tag = "Wall";

        SpriteRenderer sr = wall.AddComponent<SpriteRenderer>();
        sr.sprite = CreateSquareSprite(new Color(0.25f, 0.25f, 0.35f));
        wall.transform.localScale = new Vector3(size.x, size.y, 1f);

        BoxCollider2D col = wall.AddComponent<BoxCollider2D>();
        col.size = Vector2.one;
    }

    // ──────────────────────── СПАВН-ТОЧКИ ────────────────────────

    private Transform CreateSpawnPoint(string name, Vector3 pos)
    {
        GameObject go = new GameObject(name);
        go.transform.position = pos;
        return go.transform;
    }

    // ──────────────────────── КАМЕРА ────────────────────────

    private void SetupCamera()
    {
        Camera cam = Camera.main;
        if (cam == null)
        {
            GameObject camGO = new GameObject("Main Camera");
            camGO.tag = "MainCamera";
            cam = camGO.AddComponent<Camera>();
            camGO.AddComponent<AudioListener>();
        }

        cam.orthographic = true;
        cam.orthographicSize = 7f;
        cam.transform.position = new Vector3(0, 0, -10f);
        cam.backgroundColor = new Color(0.08f, 0.08f, 0.12f);

        if (cam.GetComponent<CameraFollow>() == null)
        {
            cam.gameObject.AddComponent<CameraFollow>();
        }
    }

    // ──────────────────────── PLAYER PREFAB ────────────────────────

    private GameObject CreatePlayerPrefab()
    {
        GameObject player = new GameObject("Player");

        // Тело (спрайт)
        GameObject body = new GameObject("Body");
        body.transform.SetParent(player.transform);
        body.transform.localPosition = Vector3.zero;
        SpriteRenderer bodySR = body.AddComponent<SpriteRenderer>();
        bodySR.sprite = CreatePlayerSprite();
        bodySR.sortingOrder = 1;

        // Ствол
        GameObject barrel = new GameObject("Barrel");
        barrel.transform.SetParent(player.transform);
        barrel.transform.localPosition = new Vector3(0f, 0.5f, 0f);
        SpriteRenderer barrelSR = barrel.AddComponent<SpriteRenderer>();
        barrelSR.sprite = CreateSquareSprite(new Color(0.3f, 0.3f, 0.35f));
        barrel.transform.localScale = new Vector3(0.15f, 0.35f, 1f);
        barrelSR.sortingOrder = 2;

        // Точка огня
        GameObject firePoint = new GameObject("FirePoint");
        firePoint.transform.SetParent(player.transform);
        firePoint.transform.localPosition = new Vector3(0f, 0.75f, 0f);

        // Метка с именем
        GameObject label = new GameObject("Label");
        label.transform.SetParent(player.transform);
        label.transform.localPosition = new Vector3(0f, 0.9f, 0f);
        PlayerNameLabel nameLabel = label.AddComponent<PlayerNameLabel>();
        TextMeshPro nameTMP = label.AddComponent<TextMeshPro>();
        nameTMP.fontSize = 2f;
        nameTMP.alignment = TextAlignmentOptions.Center;
        nameTMP.sortingOrder = 5;
        nameLabel.nameText = nameTMP;

        // Метка здоровья
        GameObject healthLabel = new GameObject("HealthLabel");
        healthLabel.transform.SetParent(player.transform);
        healthLabel.transform.localPosition = new Vector3(0f, 1.2f, 0f);
        TextMeshPro healthTMP = healthLabel.AddComponent<TextMeshPro>();
        healthTMP.fontSize = 1.5f;
        healthTMP.alignment = TextAlignmentOptions.Center;
        healthTMP.sortingOrder = 5;
        nameLabel.healthText = healthTMP;

        // Физика
        Rigidbody2D rb = player.AddComponent<Rigidbody2D>();
        rb.gravityScale = 0f;
        rb.freezeRotation = true;
        rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;

        CircleCollider2D col = player.AddComponent<CircleCollider2D>();
        col.radius = 0.35f;

        // Mirror
        NetworkIdentity ni = player.AddComponent<NetworkIdentity>();
        SetAssetId(ni, "Player");

        player.AddComponent<NetworkTransformUnreliable>();

        PlayerController controller = player.AddComponent<PlayerController>();
        controller.moveSpeed = 5f;
        controller.shootCooldown = 0.3f;
        controller.firePoint = firePoint.transform;
        controller.bodySprite = bodySR;

        player.AddComponent<PlayerHealth>();

        player.SetActive(false);
        return player;
    }

    // ──────────────────────── BULLET PREFAB ────────────────────────

    private GameObject CreateBulletPrefab()
    {
        GameObject bullet = new GameObject("Bullet");

        SpriteRenderer sr = bullet.AddComponent<SpriteRenderer>();
        sr.sprite = CreateCircleSprite(new Color(1f, 0.9f, 0.2f));
        bullet.transform.localScale = Vector3.one * 0.2f;
        sr.sortingOrder = 3;

        Rigidbody2D rb = bullet.AddComponent<Rigidbody2D>();
        rb.gravityScale = 0f;
        rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;

        CircleCollider2D col = bullet.AddComponent<CircleCollider2D>();
        col.isTrigger = true;
        col.radius = 0.5f;

        NetworkIdentity ni = bullet.AddComponent<NetworkIdentity>();
        SetAssetId(ni, "Bullet");

        bullet.AddComponent<Bullet>();

        bullet.SetActive(false);
        return bullet;
    }

    // ──────────────────────── NETWORK MANAGER ────────────────────────

    private GameNetworkManager CreateNetworkManager(Transform[] teamASpawns, Transform[] teamBSpawns)
    {
        GameNetworkManager existing = FindFirstObjectByType<GameNetworkManager>();
        if (existing != null)
        {
            existing.teamASpawnPoints = teamASpawns;
            existing.teamBSpawnPoints = teamBSpawns;
            return existing;
        }

        GameObject nmGO = new GameObject("NetworkManager");
        TelepathyTransport transport = nmGO.AddComponent<TelepathyTransport>();

        GameNetworkManager nm = nmGO.AddComponent<GameNetworkManager>();
        nm.transport = transport;
        nm.networkAddress = "localhost";
        nm.maxConnections = 4;
        nm.teamASpawnPoints = teamASpawns;
        nm.teamBSpawnPoints = teamBSpawns;

        return nm;
    }

    // ──────────────────────── LOBBY UI ────────────────────────

    private void CreateLobbyUI()
    {
        // EventSystem
        if (FindFirstObjectByType<EventSystem>() == null)
        {
            GameObject esGO = new GameObject("EventSystem");
            esGO.AddComponent<EventSystem>();
            esGO.AddComponent<StandaloneInputModule>();
        }

        // Canvas
        GameObject canvasGO = new GameObject("LobbyCanvas");
        Canvas canvas = canvasGO.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvas.sortingOrder = 10;
        canvasGO.AddComponent<CanvasScaler>().uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        canvasGO.AddComponent<GraphicRaycaster>();

        // Lobby панель
        GameObject lobbyPanel = CreatePanel(canvasGO.transform, "LobbyPanel", new Color(0.05f, 0.05f, 0.1f, 0.95f));
        SetStretch(lobbyPanel.GetComponent<RectTransform>());

        CreateLabel(lobbyPanel.transform, "Title", "2D SHOOTER", 36, new Vector2(0f, 120f), new Vector2(400f, 60f));
        TextMeshProUGUI statusText = CreateLabel(lobbyPanel.transform, "Status", "Welcome!", 18, new Vector2(0f, 60f), new Vector2(400f, 40f));
        TextMeshProUGUI playerCountText = CreateLabel(lobbyPanel.transform, "PlayerCount", "Players: 0", 16, new Vector2(0f, 20f), new Vector2(400f, 35f));

        TMP_InputField ipInput = CreateInputField(lobbyPanel.transform, "IPInput", "localhost", new Vector2(0f, -30f), new Vector2(280f, 40f));

        Button hostBtn = CreateButton(lobbyPanel.transform, "HostButton", "Host Game", new Vector2(0f, -85f), new Vector2(220f, 45f), new Color(0.15f, 0.45f, 0.85f));
        Button joinBtn = CreateButton(lobbyPanel.transform, "JoinButton", "Join Game", new Vector2(0f, -140f), new Vector2(220f, 45f), new Color(0.15f, 0.65f, 0.35f));
        Button stopBtn = CreateButton(lobbyPanel.transform, "StopButton", "Disconnect", new Vector2(0f, -195f), new Vector2(220f, 45f), new Color(0.7f, 0.15f, 0.15f));

        LobbyUI lobbyUI = canvasGO.AddComponent<LobbyUI>();
        lobbyUI.lobbyPanel      = lobbyPanel;
        lobbyUI.hostButton      = hostBtn;
        lobbyUI.joinButton      = joinBtn;
        lobbyUI.stopButton      = stopBtn;
        lobbyUI.ipInputField    = ipInput;
        lobbyUI.statusText      = statusText;
        lobbyUI.playerCountText = playerCountText;
    }

    // ──────────────────────── GAME HUD ────────────────────────

    private void CreateGameHUD()
    {
        GameObject canvasGO = new GameObject("HUDCanvas");
        Canvas canvas = canvasGO.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvas.sortingOrder = 5;
        CanvasScaler scaler = canvasGO.AddComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        canvasGO.AddComponent<GraphicRaycaster>();

        // HUD Panel
        GameObject hudPanel = CreatePanel(canvasGO.transform, "HUDPanel", Color.clear);
        SetStretch(hudPanel.GetComponent<RectTransform>());

        // Здоровье (внизу слева)
        TextMeshProUGUI healthText = CreateLabel(hudPanel.transform, "HealthText", "", 28,
            new Vector2(-350f, -250f), new Vector2(200f, 50f));
        healthText.alignment = TextAlignmentOptions.Left;

        // Счёт (вверху по центру)
        TextMeshProUGUI scoreText = CreateLabel(hudPanel.transform, "ScoreText", "",
            24, new Vector2(0f, 260f), new Vector2(500f, 45f));

        // Раунд (вверху чуть ниже счёта)
        TextMeshProUGUI roundText = CreateLabel(hudPanel.transform, "RoundText", "",
            18, new Vector2(0f, 225f), new Vector2(300f, 35f));

        // Сообщение победителя (центр экрана)
        TextMeshProUGUI messageText = CreateLabel(hudPanel.transform, "MessageText", "",
            32, new Vector2(0f, 0f), new Vector2(600f, 80f));

        GameHUD hud = canvasGO.AddComponent<GameHUD>();
        hud.hudPanel    = hudPanel;
        hud.healthText  = healthText;
        hud.scoreText   = scoreText;
        hud.roundText   = roundText;
        hud.messageText = messageText;
    }

    // ──────────────────────── УТИЛИТЫ ────────────────────────

    private static void SetAssetId(NetworkIdentity ni, string prefabName)
    {
        uint hash = StableHash(prefabName);
        var field = typeof(NetworkIdentity).GetField("_assetId",
            System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
        if (field != null)
        {
            field.SetValue(ni, hash);
        }
    }

    private static uint StableHash(string text)
    {
        unchecked
        {
            uint hash = 5381;
            foreach (char c in text)
            {
                hash = hash * 33 + c;
            }
            return hash;
        }
    }

    // ──────────────────────── UI-ХЕЛПЕРЫ ────────────────────────

    private GameObject CreatePanel(Transform parent, string name, Color bgColor)
    {
        GameObject go = new GameObject(name);
        go.transform.SetParent(parent, false);
        Image img = go.AddComponent<Image>();
        img.color = bgColor;
        return go;
    }

    private void SetStretch(RectTransform rt)
    {
        rt.anchorMin = Vector2.zero;
        rt.anchorMax = Vector2.one;
        rt.offsetMin = Vector2.zero;
        rt.offsetMax = Vector2.zero;
    }

    private TextMeshProUGUI CreateLabel(Transform parent, string name, string text, float fontSize,
                                        Vector2 anchoredPos, Vector2 size)
    {
        GameObject go = new GameObject(name);
        go.transform.SetParent(parent, false);
        TextMeshProUGUI tmp = go.AddComponent<TextMeshProUGUI>();
        tmp.text = text;
        tmp.fontSize = fontSize;
        tmp.alignment = TextAlignmentOptions.Center;
        tmp.color = Color.white;
        tmp.richText = true;
        RectTransform rt = go.GetComponent<RectTransform>();
        rt.anchoredPosition = anchoredPos;
        rt.sizeDelta = size;
        return tmp;
    }

    private Button CreateButton(Transform parent, string name, string label, Vector2 anchoredPos,
                                 Vector2 size, Color bgColor)
    {
        GameObject go = new GameObject(name);
        go.transform.SetParent(parent, false);
        Image img = go.AddComponent<Image>();
        img.color = bgColor;

        Button btn = go.AddComponent<Button>();
        ColorBlock cb = btn.colors;
        cb.normalColor = bgColor;
        cb.highlightedColor = bgColor * 1.3f;
        cb.pressedColor = bgColor * 0.7f;
        btn.colors = cb;

        RectTransform rt = go.GetComponent<RectTransform>();
        rt.anchoredPosition = anchoredPos;
        rt.sizeDelta = size;

        GameObject textGO = new GameObject("Text");
        textGO.transform.SetParent(go.transform, false);
        TextMeshProUGUI tmp = textGO.AddComponent<TextMeshProUGUI>();
        tmp.text = label;
        tmp.fontSize = 18f;
        tmp.alignment = TextAlignmentOptions.Center;
        tmp.color = Color.white;
        RectTransform textRT = textGO.GetComponent<RectTransform>();
        textRT.anchorMin = Vector2.zero;
        textRT.anchorMax = Vector2.one;
        textRT.offsetMin = Vector2.zero;
        textRT.offsetMax = Vector2.zero;

        return btn;
    }

    private TMP_InputField CreateInputField(Transform parent, string name, string placeholder,
                                             Vector2 anchoredPos, Vector2 size)
    {
        GameObject go = new GameObject(name);
        go.transform.SetParent(parent, false);
        Image img = go.AddComponent<Image>();
        img.color = new Color(0.12f, 0.12f, 0.18f);
        RectTransform rt = go.GetComponent<RectTransform>();
        rt.anchoredPosition = anchoredPos;
        rt.sizeDelta = size;

        GameObject phGO = new GameObject("Placeholder");
        phGO.transform.SetParent(go.transform, false);
        TextMeshProUGUI phTMP = phGO.AddComponent<TextMeshProUGUI>();
        phTMP.text = placeholder;
        phTMP.fontSize = 16f;
        phTMP.color = new Color(1, 1, 1, 0.4f);
        phTMP.alignment = TextAlignmentOptions.MidlineLeft;
        RectTransform phRT = phGO.GetComponent<RectTransform>();
        phRT.anchorMin = Vector2.zero;
        phRT.anchorMax = Vector2.one;
        phRT.offsetMin = new Vector2(8, 0);
        phRT.offsetMax = new Vector2(-8, 0);

        GameObject txtGO = new GameObject("Text");
        txtGO.transform.SetParent(go.transform, false);
        TextMeshProUGUI txtTMP = txtGO.AddComponent<TextMeshProUGUI>();
        txtTMP.fontSize = 16f;
        txtTMP.color = Color.white;
        txtTMP.alignment = TextAlignmentOptions.MidlineLeft;
        RectTransform txtRT = txtGO.GetComponent<RectTransform>();
        txtRT.anchorMin = Vector2.zero;
        txtRT.anchorMax = Vector2.one;
        txtRT.offsetMin = new Vector2(8, 0);
        txtRT.offsetMax = new Vector2(-8, 0);

        TMP_InputField field = go.AddComponent<TMP_InputField>();
        field.textViewport = rt;
        field.textComponent = txtTMP;
        field.placeholder = phTMP;
        field.text = "";

        return field;
    }

    // ──────────────────────── СПРАЙТЫ ────────────────────────

    private Sprite CreateSquareSprite(Color color)
    {
        Texture2D tex = new Texture2D(1, 1);
        tex.SetPixel(0, 0, color);
        tex.Apply();
        return Sprite.Create(tex, new Rect(0, 0, 1, 1), new Vector2(0.5f, 0.5f), 1f);
    }

    private Sprite CreatePlayerSprite()
    {
        int size = 32;
        Texture2D tex = new Texture2D(size, size);
        Color body = new Color(0.9f, 0.9f, 0.95f);
        Vector2 center = new Vector2(size / 2f, size / 2f);
        float radius = size / 2f - 1f;
        for (int y = 0; y < size; y++)
        {
            for (int x = 0; x < size; x++)
            {
                float dist = Vector2.Distance(new Vector2(x, y), center);
                tex.SetPixel(x, y, dist <= radius ? body : Color.clear);
            }
        }
        tex.Apply();
        return Sprite.Create(tex, new Rect(0, 0, size, size), new Vector2(0.5f, 0.5f), size);
    }

    private Sprite CreateCircleSprite(Color color)
    {
        int size = 16;
        Texture2D tex = new Texture2D(size, size);
        Vector2 center = new Vector2(size / 2f, size / 2f);
        float radius = size / 2f - 1f;
        for (int y = 0; y < size; y++)
        {
            for (int x = 0; x < size; x++)
            {
                float dist = Vector2.Distance(new Vector2(x, y), center);
                tex.SetPixel(x, y, dist <= radius ? color : Color.clear);
            }
        }
        tex.Apply();
        return Sprite.Create(tex, new Rect(0, 0, size, size), new Vector2(0.5f, 0.5f), size);
    }
}
