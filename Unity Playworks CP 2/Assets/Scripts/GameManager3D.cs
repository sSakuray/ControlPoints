using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class GameManager3D : MonoBehaviour
{
    public static GameManager3D Instance { get; private set; }

    [SerializeField] private Camera mainCamera;
    [SerializeField] private Transform chestRoot;
    [SerializeField] private Transform chestLid;
    [SerializeField] private ParticleSystem chestBurstParticles;
    [SerializeField] private Transform worldVfxRoot;
    [SerializeField] private RectTransform uiVfxRoot;
    [SerializeField] private Text scoreText;
    [SerializeField] private Text comboText;
    [SerializeField] private RectTransform scoreIconRect;
    [SerializeField] private RectTransform scorePanelRect;
    [SerializeField] private RectTransform scoreFillRect;
    [SerializeField] private Image scoreFillImage;
    [SerializeField] private RectTransform progressFillRect;
    [SerializeField] private Text progressLabel;
    [SerializeField] private RectTransform tutorialHand;
    [SerializeField] private GameObject victoryPanel;
    [SerializeField] private RectTransform victoryCard;
    [SerializeField] private Text victoryScoreText;
    [SerializeField] private Image[] starImages;
    [SerializeField] private Button replayButton;
    [SerializeField] private int targetProgress = 12;
    [SerializeField] private int pointsPerHit = 50;

    private int currentScore, currentProgress, comboCount;
    private float comboTimer;
    private bool isWon, tutorialDismissed;
    private int lastHitFrame = -1;
    private Vector3 chestOriginalScale, chestLidOriginalRotation;
    private Tween replayPulseTween, handAnimTween;

    private void Awake()
    {
        Instance = this;
        DOTween.Init();
        if (!mainCamera) mainCamera = Camera.main;
        if (chestRoot) chestOriginalScale = chestRoot.localScale;
        if (chestLid) chestLidOriginalRotation = chestLid.localEulerAngles;
        if (!uiVfxRoot) uiVfxRoot = FindObjectOfType<Canvas>()?.GetComponent<RectTransform>();
        if (!scoreIconRect && scoreText) scoreIconRect = scoreText.rectTransform;

        if (replayButton)
        {
            replayButton.onClick.RemoveAllListeners();
            replayButton.onClick.AddListener(RestartGame);
        }
        InitBars();
    }

    private void Start() => RestartGame();

    private void Update()
    {
        if (comboCount > 0 && (comboTimer -= Time.deltaTime) <= 0f)
        {
            comboCount = 0;
            UpdateComboUI();
        }

        if (isWon)
        {
            if (victoryPanel && victoryPanel.activeInHierarchy && Input.GetMouseButtonDown(0))
                RestartGame();
            return;
        }

        if (Input.GetMouseButtonDown(0))
            HandleScreenClick(Input.mousePosition);
        else if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
            HandleScreenClick(Input.GetTouch(0).position);
    }

    public void HandleScreenClick(Vector3 screenPos)
    {
        if (isWon) return;
        DismissTutorial();

        if (mainCamera && screenPos != Vector3.zero && Physics.Raycast(mainCamera.ScreenPointToRay(screenPos), out RaycastHit hit, 100f))
        {
            if (chestRoot && (hit.collider.transform.IsChildOf(chestRoot) || hit.collider.transform == chestRoot))
            {
                OnChestHit(hit.point);
                return;
            }
        }
        OnChestHit(chestRoot ? chestRoot.position + Vector3.up * 0.4f : Vector3.zero);
    }

    public void OnChestHit(Vector3 hitPos)
    {
        if (isWon || Time.frameCount == lastHitFrame) return;
        lastHitFrame = Time.frameCount;
        DismissTutorial();

        comboCount++;
        comboTimer = 2.0f;
        UpdateComboUI();

        int mult = comboCount >= 8 ? 3 : comboCount >= 4 ? 2 : 1;
        int scoreGained = pointsPerHit * mult;
        currentScore += scoreGained;
        currentProgress++;

        UpdateUI();
        SoundEffects.PlayHitSound();

        if (scoreFillImage)
        {
            scoreFillImage.DOKill(true);
            scoreFillImage.color = new Color(1f, 0.95f, 0.45f, 1f);
            scoreFillImage.DOColor(new Color(1f, 0.78f, 0.12f, 0.95f), 0.25f);
        }

        if (chestRoot)
        {
            chestRoot.DOKill(true);
            chestRoot.localScale = chestOriginalScale;
            chestRoot.DOPunchScale(new Vector3(0.22f, -0.16f, 0.22f), 0.2f, 10, 1);
            chestRoot.DOPunchRotation(new Vector3(Random.Range(-5f, 5f), Random.Range(-4f, 4f), Random.Range(-5f, 5f)), 0.2f, 10, 1);
        }

        if (mainCamera)
        {
            mainCamera.transform.DOKill(true);
            mainCamera.transform.DOShakePosition(0.12f, 0.08f, 14, 90f, false, true);
        }

        Vector3 spawnWorld = (hitPos != Vector3.zero) ? hitPos : (chestRoot ? chestRoot.position + Vector3.up * 0.5f : Vector3.zero);
        Vector3 screenPos = mainCamera ? mainCamera.WorldToScreenPoint(spawnWorld) : new Vector3(Screen.width * 0.5f, Screen.height * 0.5f, 0f);

        SpawnFlyingCoin(screenPos);
        SpawnFloatingText(screenPos + Vector3.up * 40f, $"+{scoreGained}" + (mult > 1 ? $" x{mult}!" : ""));

        if (currentProgress >= targetProgress) TriggerWin();
    }

    private void UpdateComboUI()
    {
        if (!comboText) return;
        int mult = comboCount >= 8 ? 3 : comboCount >= 4 ? 2 : 1;
        if (mult > 1)
        {
            comboText.gameObject.SetActive(true);
            comboText.text = mult >= 3 ? "★ FEVER x3! ★" : $"COMBO x{mult}!";
            comboText.color = mult >= 3 ? new Color(1f, 0.85f, 0.1f) : new Color(0.2f, 0.9f, 1f);
            comboText.transform.DOKill(true);
            comboText.transform.localScale = Vector3.one;
            comboText.transform.DOPunchScale(Vector3.one * 0.4f, 0.25f, 10, 1);
        }
        else comboText.gameObject.SetActive(false);
    }

    private void UpdateUI()
    {
        if (scoreText)
        {
            scoreText.text = currentScore.ToString("N0");
            scoreText.transform.DOKill(true);
            scoreText.transform.localScale = Vector3.one;
            scoreText.transform.DOPunchScale(Vector3.one * 0.2f, 0.15f, 8, 1);
        }

        if (scoreIconRect)
        {
            scoreIconRect.DOKill(true);
            scoreIconRect.localScale = Vector3.one;
            scoreIconRect.DOPunchScale(Vector3.one * 0.35f, 0.2f, 8, 1);
        }

        float ratio = targetProgress > 0 ? Mathf.Clamp01((float)currentProgress / targetProgress) : 0f;
        if (scoreFillRect)
        {
            scoreFillRect.DOKill();
            DOTween.To(() => scoreFillRect.anchorMax.x, x => scoreFillRect.anchorMax = new Vector2(x, 1f), ratio, 0.22f).SetEase(Ease.OutQuad);
        }
        if (progressFillRect)
        {
            progressFillRect.DOKill();
            DOTween.To(() => progressFillRect.anchorMax.x, x => progressFillRect.anchorMax = new Vector2(x, 1f), ratio, 0.2f).SetEase(Ease.OutQuad);
        }
        if (progressLabel)
            progressLabel.text = (currentProgress < targetProgress) ? $"TAP TO UNLOCK! ({currentProgress}/{targetProgress})" : "UNLOCKED!";
    }

    private GameObject CreateCoinObj(string name, Vector3 pos, float size)
    {
        GameObject coin = new GameObject(name, typeof(RectTransform), typeof(Image));
        coin.transform.SetParent(uiVfxRoot, false);
        RectTransform rt = coin.GetComponent<RectTransform>();
        rt.position = pos;
        rt.sizeDelta = Vector2.one * size;
        rt.localScale = Vector3.zero;

        Image img = coin.GetComponent<Image>();
        img.color = new Color(1f, 0.82f, 0.1f);
        img.raycastTarget = false;

        GameObject inner = new GameObject("Inner", typeof(RectTransform), typeof(Image));
        inner.transform.SetParent(rt, false);
        RectTransform innerRT = inner.GetComponent<RectTransform>();
        innerRT.anchorMin = Vector2.zero;
        innerRT.anchorMax = Vector2.one;
        innerRT.sizeDelta = new Vector2(-8f, -8f);

        Image innerImg = inner.GetComponent<Image>();
        innerImg.color = new Color(0.96f, 0.65f, 0.05f);
        innerImg.raycastTarget = false;
        return coin;
    }

    private void SpawnFlyingCoin(Vector3 startPos)
    {
        if (!uiVfxRoot) return;
        Vector3 targetPos = scoreIconRect ? scoreIconRect.position : new Vector3(Screen.width * 0.5f, Screen.height * 0.9f, 0f);

        for (int i = 0; i < 2; i++)
        {
            Vector3 spawn = startPos + new Vector3(Random.Range(-25f, 25f), Random.Range(-15f, 25f), 0f);
            GameObject coin = CreateCoinObj("FlyingCoin", spawn, 44f);
            RectTransform rt = coin.GetComponent<RectTransform>();
            Vector3 mid = new Vector3((spawn.x + targetPos.x) * 0.5f + Random.Range(-45f, 45f), Mathf.Max(spawn.y, targetPos.y) + Random.Range(30f, 70f), 0f);

            DOTween.Sequence()
                .SetDelay(i * 0.08f)
                .Append(rt.DOScale(Vector3.one * 1.15f, 0.15f).SetEase(Ease.OutBack))
                .Append(rt.DOMove(mid, 0.18f).SetEase(Ease.OutQuad))
                .Append(rt.DOMove(targetPos, 0.22f).SetEase(Ease.InQuad))
                .Join(rt.DOScale(Vector3.one * 0.35f, 0.22f).SetEase(Ease.InQuad))
                .Join(rt.DORotate(new Vector3(0f, 0f, 360f), 0.4f, RotateMode.FastBeyond360))
                .OnComplete(() =>
                {
                    if (scoreIconRect)
                    {
                        scoreIconRect.DOKill(true);
                        scoreIconRect.localScale = Vector3.one;
                        scoreIconRect.DOPunchScale(Vector3.one * 0.25f, 0.15f, 6, 1);
                    }
                    if (scoreFillImage)
                    {
                        scoreFillImage.DOKill(true);
                        scoreFillImage.color = new Color(1f, 0.95f, 0.45f, 1f);
                        scoreFillImage.DOColor(new Color(1f, 0.78f, 0.12f, 0.95f), 0.2f);
                    }
                    SoundEffects.PlayCoinChime();
                    Destroy(coin);
                });
        }
    }

    private void SpawnFloatingText(Vector3 screenPos, string text)
    {
        if (!uiVfxRoot) return;
        GameObject obj = new GameObject("FloatingText", typeof(RectTransform), typeof(Text));
        obj.transform.SetParent(uiVfxRoot, false);
        RectTransform rt = obj.GetComponent<RectTransform>();
        rt.position = screenPos;
        rt.sizeDelta = new Vector2(300f, 60f);
        rt.localScale = Vector3.zero;

        Text txt = obj.GetComponent<Text>();
        if (scoreText && scoreText.font) txt.font = scoreText.font;
        txt.fontSize = 32;
        txt.fontStyle = FontStyle.Bold;
        txt.alignment = TextAnchor.MiddleCenter;
        txt.text = text;
        txt.color = new Color(1f, 0.95f, 0.2f, 1f);
        txt.raycastTarget = false;

        DOTween.Sequence()
            .Append(rt.DOScale(Vector3.one * 1.2f, 0.2f).SetEase(Ease.OutBack))
            .Join(rt.DOAnchorPosY(rt.anchoredPosition.y + 60f, 0.6f).SetEase(Ease.OutQuad))
            .Append(txt.DOFade(0f, 0.3f))
            .OnComplete(() => Destroy(obj));
    }

    private void TriggerWin()
    {
        if (isWon) return;
        isWon = true;
        DismissTutorial();
        SoundEffects.PlayWinFanfare();

        if (chestLid)
        {
            chestLid.DOKill(true);
            chestLid.DOLocalRotate(new Vector3(-80f, 0f, 0f), 0.65f).SetEase(Ease.OutBounce);
        }
        if (mainCamera) mainCamera.transform.DOShakePosition(0.5f, 0.25f, 15, 90f);

        SpawnBurstCoins();
        StartCoroutine(ShowVictoryCardSequence());
    }

    private void SpawnBurstCoins()
    {
        if (!uiVfxRoot) return;
        Vector3 center = (mainCamera && chestRoot) ? mainCamera.WorldToScreenPoint(chestRoot.position + Vector3.up * 0.6f) : new Vector3(Screen.width * 0.5f, Screen.height * 0.5f, 0f);
        int count = 16;
        for (int i = 0; i < count; i++)
        {
            float angle = i * (360f / count) * Mathf.Deg2Rad;
            Vector3 endPos = center + new Vector3(Mathf.Cos(angle) * Random.Range(180f, 320f), Mathf.Sin(angle) * Random.Range(180f, 320f), 0f);
            GameObject coin = CreateCoinObj("BurstCoin", center, 44f);
            RectTransform rt = coin.GetComponent<RectTransform>();
            Image img = coin.GetComponent<Image>();
            Image inner = coin.transform.GetChild(0).GetComponent<Image>();

            DOTween.Sequence()
                .SetDelay(i * 0.03f)
                .Append(rt.DOScale(Vector3.one, 0.2f).SetEase(Ease.OutBack))
                .Join(rt.DOMove(endPos, 0.55f).SetEase(Ease.OutQuad))
                .Join(rt.DORotate(new Vector3(0f, 0f, Random.Range(180f, 540f)), 0.55f, RotateMode.FastBeyond360))
                .Append(img.DOFade(0f, 0.35f))
                .Join(inner ? inner.DOFade(0f, 0.35f) : null)
                .Join(rt.DOScale(Vector3.zero, 0.35f).SetEase(Ease.InQuad))
                .OnComplete(() => Destroy(coin));
        }
    }

    private IEnumerator ShowVictoryCardSequence()
    {
        yield return new WaitForSeconds(0.6f);
        if (victoryPanel) victoryPanel.SetActive(true);
        if (victoryScoreText) victoryScoreText.text = currentScore.ToString("N0");
        if (victoryCard)
        {
            victoryCard.localScale = Vector3.zero;
            victoryCard.DOScale(Vector3.one, 0.5f).SetEase(Ease.OutBack);
        }
        if (starImages != null)
        {
            for (int i = 0; i < starImages.Length; i++)
            {
                if (!starImages[i]) continue;
                starImages[i].transform.localScale = Vector3.zero;
                starImages[i].transform.DOScale(Vector3.one, 0.4f).SetEase(Ease.OutBack).SetDelay(0.35f + i * 0.18f);
            }
        }
        if (replayButton)
        {
            replayPulseTween?.Kill();
            replayButton.transform.localScale = Vector3.one;
            replayPulseTween = replayButton.transform.DOScale(1.1f, 0.6f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo).SetDelay(0.8f);
        }
    }

    public void RestartGame()
    {
        isWon = false;
        currentScore = currentProgress = comboCount = 0;
        comboTimer = 0f;
        tutorialDismissed = false;

        if (scoreFillRect) { scoreFillRect.DOKill(); scoreFillRect.anchorMax = new Vector2(0f, 1f); }
        if (scoreFillImage) { scoreFillImage.DOKill(); scoreFillImage.color = new Color(1f, 0.78f, 0.12f, 0.95f); }
        if (progressFillRect) { progressFillRect.DOKill(); progressFillRect.anchorMax = new Vector2(0f, 1f); }

        if (uiVfxRoot)
        {
            for (int i = uiVfxRoot.childCount - 1; i >= 0; i--)
            {
                Transform child = uiVfxRoot.GetChild(i);
                if (child.name.StartsWith("FlyingCoin") || child.name.StartsWith("BurstCoin") || child.name.StartsWith("FloatingText"))
                {
                    child.DOKill();
                    Destroy(child.gameObject);
                }
            }
        }

        if (victoryPanel) victoryPanel.SetActive(false);
        replayPulseTween?.Kill();
        if (replayButton) replayButton.transform.localScale = Vector3.one;

        if (chestRoot)
        {
            chestRoot.DOKill(true);
            chestRoot.localScale = chestOriginalScale;
            chestRoot.localRotation = Quaternion.identity;
        }
        if (chestLid)
        {
            chestLid.DOKill(true);
            chestLid.DOLocalRotate(chestLidOriginalRotation, 0.35f).SetEase(Ease.OutQuad);
        }

        SetupIdleAnimations();
        SoundEffects.PlayHitSound();
        UpdateComboUI();
        UpdateUI();
    }

    private void SetupIdleAnimations()
    {
        if (!tutorialHand) return;
        handAnimTween?.Kill();
        tutorialHand.gameObject.SetActive(true);
        tutorialHand.localScale = Vector3.one;
        Vector2 startPos = tutorialHand.anchoredPosition;

        handAnimTween = DOTween.Sequence()
            .Append(tutorialHand.DOAnchorPos(startPos + new Vector2(0, -25f), 0.45f).SetEase(Ease.InOutQuad))
            .Join(tutorialHand.DOScale(0.9f, 0.45f))
            .Append(tutorialHand.DOAnchorPos(startPos, 0.45f).SetEase(Ease.InOutQuad))
            .Join(tutorialHand.DOScale(1.05f, 0.45f))
            .SetLoops(-1, LoopType.Restart);
    }

    private void DismissTutorial()
    {
        if (tutorialDismissed) return;
        tutorialDismissed = true;
        if (tutorialHand)
        {
            handAnimTween?.Kill();
            tutorialHand.DOScale(Vector3.zero, 0.25f).SetEase(Ease.InBack).OnComplete(() => tutorialHand.gameObject.SetActive(false));
        }
    }

    private void InitBars()
    {
        if (!scorePanelRect)
            scorePanelRect = (scoreText && scoreText.transform.parent) ? scoreText.transform.parent.GetComponent<RectTransform>() : GameObject.Find("ScorePanel")?.GetComponent<RectTransform>();

        if (scorePanelRect)
        {
            if (!scorePanelRect.GetComponent<RectMask2D>()) scorePanelRect.gameObject.AddComponent<RectMask2D>();

            if (!scoreFillRect)
            {
                Transform existing = scorePanelRect.Find("ScoreFill");
                if (existing)
                {
                    scoreFillRect = existing.GetComponent<RectTransform>();
                    scoreFillImage = existing.GetComponent<Image>();
                }
                else
                {
                    GameObject fillObj = new GameObject("ScoreFill", typeof(RectTransform), typeof(Image));
                    fillObj.transform.SetParent(scorePanelRect, false);
                    fillObj.transform.SetSiblingIndex(0);

                    scoreFillRect = fillObj.GetComponent<RectTransform>();
                    scoreFillRect.anchorMin = Vector2.zero;
                    scoreFillRect.anchorMax = new Vector2(0f, 1f);
                    scoreFillRect.offsetMin = new Vector2(4f, 4f);
                    scoreFillRect.offsetMax = new Vector2(-4f, -4f);
                    scoreFillRect.pivot = new Vector2(0f, 0.5f);

                    scoreFillImage = fillObj.GetComponent<Image>();
                    scoreFillImage.color = new Color(1f, 0.78f, 0.12f, 0.95f);
                    scoreFillImage.raycastTarget = false;

                    GameObject hlObj = new GameObject("Highlight", typeof(RectTransform), typeof(Image));
                    hlObj.transform.SetParent(scoreFillRect, false);
                    RectTransform hlRect = hlObj.GetComponent<RectTransform>();
                    hlRect.anchorMin = new Vector2(0f, 0.55f);
                    hlRect.anchorMax = Vector2.one;
                    hlRect.offsetMin = hlRect.offsetMax = Vector2.zero;

                    Image hlImg = hlObj.GetComponent<Image>();
                    hlImg.color = new Color(1f, 1f, 1f, 0.22f);
                    hlImg.raycastTarget = false;
                }
            }
        }

        AddOutline(scoreText, new Color(0f, 0f, 0f, 0.85f), new Vector2(2f, -2f));
        AddOutline(scoreIconRect, new Color(0f, 0f, 0f, 0.45f), new Vector2(1.5f, -1.5f));

        if (!progressFillRect)
        {
            var pSliderObj = GameObject.Find("ProgressSlider");
            if (pSliderObj)
            {
                progressFillRect = pSliderObj.transform.Find("Fill Area/Fill")?.GetComponent<RectTransform>();
                if (!progressLabel) progressLabel = pSliderObj.GetComponentInChildren<Text>(true);
            }
        }

        if (progressFillRect)
        {
            progressFillRect.anchorMin = Vector2.zero;
            progressFillRect.anchorMax = new Vector2(0f, 1f);
            progressFillRect.offsetMin = progressFillRect.offsetMax = Vector2.zero;
            progressFillRect.pivot = new Vector2(0f, 0.5f);
        }
    }

    private void AddOutline(Component comp, Color col, Vector2 dist)
    {
        if (comp && !comp.GetComponent<Outline>())
        {
            Outline ol = comp.gameObject.AddComponent<Outline>();
            ol.effectColor = col;
            ol.effectDistance = dist;
        }
    }
}
