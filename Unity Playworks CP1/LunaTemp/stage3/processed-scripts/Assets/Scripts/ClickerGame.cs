using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ClickerGame : MonoBehaviour
{
    [SerializeField] private int targetClicks = 30;
    [SerializeField] private int currentScore = 0;
    [SerializeField] private int pointsPerClick = 1;
    [SerializeField] private TMP_Text scoreText;
    [SerializeField] private TMP_Text targetText;
    [SerializeField] private Slider progressSlider;
    [SerializeField] private Button clickButton;
    [SerializeField] private RectTransform buttonTransform;
    [SerializeField] private Button restartButton;

    private Vector3 originalButtonScale;
    private Coroutine punchCoroutine;
    private bool isWon = false;
    private float lastClickTime = -1f;

    private void Awake()
    {
        if (buttonTransform == null && clickButton != null)
        {
            buttonTransform = clickButton.GetComponent<RectTransform>();
        }

        if (buttonTransform != null)
        {
            originalButtonScale = buttonTransform.localScale;
        }
        else
        {
            originalButtonScale = Vector3.one;
        }
    }

    private void Start()
    {
        if (clickButton != null)
        {
            clickButton.onClick.AddListener(OnClickTarget);
        }

        if (restartButton != null)
        {
            restartButton.onClick.AddListener(RestartGame);
        }

        ResetGame();
    }

    public void OnClickTarget()
    {
        if (Time.unscaledTime - lastClickTime < 0.05f) return;
        lastClickTime = Time.unscaledTime;

        if (isWon) return;

        currentScore += pointsPerClick;
        UpdateUI();

        if (buttonTransform != null)
        {
            if (punchCoroutine != null) StopCoroutine(punchCoroutine);
            punchCoroutine = StartCoroutine(PunchScale(buttonTransform, originalButtonScale, 1.25f, 0.15f));
        }

        if (currentScore >= targetClicks)
        {
            TriggerWin();
        }
    }

    private void TriggerWin()
    {
        isWon = true;
        Debug.Log("[ClickerGame] WIN! Target reached: " + currentScore);
    }

    public void RestartGame()
    {
        ResetGame();
    }

    private void ResetGame()
    {
        isWon = false;
        currentScore = 0;

        if (buttonTransform != null)
        {
            buttonTransform.localScale = originalButtonScale;
        }

        UpdateUI();
    }

    private void UpdateUI()
    {
        if (scoreText != null)
        {
            scoreText.text = currentScore.ToString();
        }

        if (targetText != null)
        {
            targetText.text = $"GOAL: {currentScore} / {targetClicks}";
        }

        if (progressSlider != null)
        {
            progressSlider.minValue = 0;
            progressSlider.maxValue = targetClicks;
            progressSlider.value = currentScore;
        }
    }

    private IEnumerator PunchScale(RectTransform target, [Bridge.Ref] Vector3 normalScale, float punchFactor, float duration)
    {
        float half = duration * 0.4f;
        float elapsed = 0f;
        Vector3 maxScale = normalScale * punchFactor;

        while (elapsed < half)
        {
            elapsed += Time.unscaledDeltaTime;
            float t = elapsed / half;
            target.localScale = Vector3.Lerp(normalScale, maxScale, t);
            yield return null;
        }

        elapsed = 0f;
        float rest = duration - half;
        while (elapsed < rest)
        {
            elapsed += Time.unscaledDeltaTime;
            float t = elapsed / rest;
            target.localScale = Vector3.Lerp(maxScale, normalScale, t);
            yield return null;
        }

        target.localScale = normalScale;
    }
}
