using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class FadeService : IFadeService
{
    public void FadeIn(Image image, float duration)
    {
        CanvasGroup cg = image.GetComponent<CanvasGroup>();
        if (cg == null)
        {
            cg = image.gameObject.AddComponent<CanvasGroup>();
        }

        cg.DOKill();
        image.gameObject.SetActive(true);
        cg.alpha = 0f;
        cg.DOFade(1f, duration).SetUpdate(true);
    }

    public void FadeOut(Image image, float duration)
    {
        CanvasGroup cg = image.GetComponent<CanvasGroup>();
        if (cg == null)
        {
            cg = image.gameObject.AddComponent<CanvasGroup>();
        }

        cg.DOKill();
        cg.DOFade(0f, duration).SetUpdate(true).OnComplete(() =>
        {
            image.gameObject.SetActive(false);
        });
    }
}
