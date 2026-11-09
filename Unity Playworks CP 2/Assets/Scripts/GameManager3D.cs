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
    [SerializeField] private GameObject instructionPanel;
    [SerializeField] private Image[] flyingCoins;
    [SerializeField] private Text scoreText;
    [SerializeField] private Text comboText;
    [SerializeField] private RectTransform scoreIconRect;
    [SerializeField] private RectTransform scoreFillRect;
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
    [SerializeField] private GameObject timingPanel;
    [SerializeField] private RectTransform hitMarker;
    [SerializeField] private RectTransform perfectZone;
    [SerializeField] private Text hitFeedback;

    private int currentScore;
    private int currentProgress;
    private int comboCount;
    private int perfectHits;
    private int lastHitFrame = -1;
    private float comboTimer;
    private bool isWon;
    private bool tutorialDismissed;
    private Vector3 chestOriginalScale;
    private Vector3 chestLidOriginalRotation;
    private Tween replayPulseTween;
    private Tween handAnimTween;

    private int ComboMultiplier
    {
        get
        {
            if (comboCount >= 8)
            {
                return 3;
            }
            if (comboCount >= 4)
            {
                return 2;
            }
            return 1;
        }
    }

    private void Awake()
    {
        Instance = this;
        DOTween.Init();
        chestOriginalScale = chestRoot.localScale;
        chestLidOriginalRotation = chestLid.localEulerAngles;
    }

    private void Start()
    {
        RestartGame();
    }

    private void Update()
    {
        if (instructionPanel.activeSelf || isWon)
        {
            return;
        }

        hitMarker.anchorMin = hitMarker.anchorMax =
            new Vector2(Mathf.PingPong(Time.time, 1f), 0.5f);

        if (comboCount > 0)
        {
            comboTimer -= Time.deltaTime;
            if (comboTimer <= 0f)
            {
                comboCount = 0;
                UpdateComboUI();
            }
        }

        if (Input.GetMouseButtonDown(0) ||
            (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began))
        {
            HitChest();
        }
    }

    public void StartGame()
    {
        instructionPanel.SetActive(false);
        lastHitFrame = Time.frameCount;
    }

    public void OnChestHit(Vector3 hitPos)
    {
        HitChest();
    }

    private void HitChest()
    {
        if (instructionPanel.activeSelf || isWon || Time.frameCount == lastHitFrame)
        {
            return;
        }
        lastHitFrame = Time.frameCount;

        DismissTutorial();

        comboCount++;
        comboTimer = 2f;
        UpdateComboUI();

        int mult = ComboMultiplier;
        float hitPosition = hitMarker.anchorMin.x;
        bool perfect = hitPosition >= perfectZone.anchorMin.x && hitPosition <= perfectZone.anchorMax.x;
        if (perfect)
        {
            perfectHits++;
        }
        currentScore += pointsPerHit * mult * (perfect ? 3 : 1);
        currentProgress = Mathf.Min(currentProgress + (perfect ? 2 : 1), targetProgress);
        hitFeedback.text = perfect ? "PERFECT! +2 PROGRESS" : "+1 PROGRESS";
        hitFeedback.color = perfect ? Color.yellow : Color.white;

        UpdateUI();
        AnimateCoin();

        chestRoot.DOKill(true);
        chestRoot.localScale = chestOriginalScale;
        chestRoot.DOPunchScale(Vector3.one * 0.15f, 0.2f);

        mainCamera.transform.DOKill(true);
        mainCamera.transform.DOShakePosition(0.15f, 0.1f);

        if (currentProgress >= targetProgress)
        {
            TriggerWin();
        }
    }

    private void AnimateCoin()
    {
        Vector3 startPos = mainCamera.WorldToScreenPoint(chestRoot.position) + (Vector3)(Random.insideUnitCircle * 20f);
        startPos.z = 0f;

        Vector3 targetPos = scoreIconRect.position;
        targetPos.z = 0f;

        RectTransform coin = flyingCoins[(currentProgress - 1) % flyingCoins.Length].rectTransform;
        coin.DOKill();
        coin.position = startPos;
        coin.SetAsLastSibling();
        coin.gameObject.SetActive(true);

        coin.DOMove(targetPos, 0.4f).SetEase(Ease.InQuad).OnComplete(() =>
        {
            Punch(scoreIconRect, 0.25f);
            coin.gameObject.SetActive(false);
        });
    }

    private void UpdateComboUI()
    {
        int mult = ComboMultiplier;
        comboText.gameObject.SetActive(mult > 1);
        if (mult <= 1)
        {
            return;
        }

        comboText.text = mult == 3 ? "★ FEVER x3! ★" : $"COMBO x{mult}!";
        comboText.color = mult == 3 ? Color.yellow : Color.cyan;
        Punch(comboText.transform, 0.3f);
    }

    private void UpdateUI()
    {
        scoreText.text = currentScore.ToString("N0");
        Punch(scoreText.transform, 0.2f);
        Punch(scoreIconRect, 0.2f);

        float ratio = (float)currentProgress / targetProgress;
        progressFillRect.DOKill();
        progressFillRect.DOAnchorMax(new Vector2(ratio, 1f), 0.2f);
        scoreFillRect.DOKill();
        scoreFillRect.DOAnchorMax(new Vector2(ratio, 1f), 0.2f);

        progressLabel.text = $"{currentProgress}/{targetProgress}";
    }

    private static void Punch(Transform target, float amount = 0.2f)
    {
        target.DOKill(true);
        target.localScale = Vector3.one;
        target.DOPunchScale(Vector3.one * amount, 0.2f);
    }

    private void TriggerWin()
    {
        if (isWon)
        {
            return;
        }
        isWon = true;
        timingPanel.SetActive(false);

        DismissTutorial();

        chestLid.DOKill(true);
        chestLid.DOLocalRotate(new Vector3(-80f, 0f, 0f), 0.5f).SetEase(Ease.OutBounce);

        mainCamera.transform.DOShakePosition(0.5f, 0.2f);

        StartCoroutine(ShowVictoryCardSequence());
    }

    private IEnumerator ShowVictoryCardSequence()
    {
        yield return new WaitForSeconds(0.5f);

        victoryPanel.SetActive(true);
        victoryScoreText.text = $"SCORE: {currentScore:N0}\nPERFECT HITS: {perfectHits}";
        Luna.Unity.LifeCycle.GameEnded();

        victoryCard.localScale = Vector3.zero;
        victoryCard.DOScale(Vector3.one, 0.4f).SetEase(Ease.OutBack);

        int starsEarned = perfectHits >= 4 ? 3 : perfectHits >= 2 ? 2 : 1;
        for (int i = 0; i < starImages.Length; i++)
        {
            starImages[i].color = i < starsEarned ? Color.yellow : new Color(1f, 1f, 1f, 0.15f);
            starImages[i].transform.localScale = Vector3.zero;
            starImages[i].transform.DOScale(Vector3.one, 0.3f).SetDelay(0.2f + i * 0.15f);
        }

        replayPulseTween?.Kill();
        replayButton.transform.localScale = Vector3.one;
        replayPulseTween = replayButton.transform.DOScale(1.1f, 0.5f).SetLoops(-1, LoopType.Yoyo);
    }

    public void RestartGame()
    {
        StopAllCoroutines();
        lastHitFrame = Time.frameCount;
        isWon = false;
        currentScore = 0;
        currentProgress = 0;
        comboCount = 0;
        perfectHits = 0;
        comboTimer = 0f;
        tutorialDismissed = false;
        timingPanel.SetActive(true);
        hitMarker.anchorMin = hitMarker.anchorMax = new Vector2(0f, 0.5f);
        hitFeedback.text = "TAP WHEN MARKER IS GREEN";
        hitFeedback.color = Color.white;

        foreach (Image coin in flyingCoins)
        {
            coin.rectTransform.DOKill();
            coin.gameObject.SetActive(false);
        }

        progressFillRect.DOKill();
        progressFillRect.anchorMax = Vector2.up;
        scoreFillRect.DOKill();
        scoreFillRect.anchorMax = Vector2.up;

        victoryPanel.SetActive(false);

        replayPulseTween?.Kill();
        replayButton.transform.localScale = Vector3.one;

        chestRoot.DOKill(true);
        chestRoot.localScale = chestOriginalScale;
        chestRoot.localRotation = Quaternion.identity;

        chestLid.DOKill(true);
        chestLid.DOLocalRotate(chestLidOriginalRotation, 0.35f).SetEase(Ease.OutQuad);

        SetupIdleAnimations();
        UpdateComboUI();
        UpdateUI();
    }

    private void SetupIdleAnimations()
    {
        handAnimTween?.Kill();
        tutorialHand.gameObject.SetActive(true);
        tutorialHand.localScale = Vector3.one;
        Vector2 startPos = tutorialHand.anchoredPosition;

        handAnimTween = tutorialHand.DOAnchorPosY(startPos.y - 30f, 0.5f)
            .SetEase(Ease.InOutSine)
            .SetLoops(-1, LoopType.Yoyo);
    }

    private void DismissTutorial()
    {
        if (tutorialDismissed)
        {
            return;
        }
        tutorialDismissed = true;

        handAnimTween?.Kill();
        tutorialHand.DOScale(Vector3.zero, 0.2f).OnComplete(() =>
        {
            tutorialHand.gameObject.SetActive(false);
        });
    }
}
