using UnityEngine;
using TMPro;

public abstract class EnemyBehavior : MonoBehaviour
{
    [SerializeField] protected Animator animator;
    [SerializeField] protected TextMeshProUGUI enemyLabel;
    protected bool isActive = false;

    public void ExecuteBehavior()
    {
        if (!isActive)
        {
            return;
        } 
        UpdateBehavior();
    }

    protected abstract void OnSpawn();
    protected abstract void UpdateBehavior();
    
    public virtual void Activate()
    {
        isActive = true;
        gameObject.SetActive(true);
        OnSpawn();
        OnActivate();
    }

    public virtual void Deactivate()
    {
        isActive = false;
        gameObject.SetActive(false);
        OnDeactivate();
    }

    protected virtual void OnActivate() { }
    protected virtual void OnDeactivate() { }


    protected void PlayIdleAnimation()
    {
        animator.Play("idle", 0, 0f);
    }

    protected void SetLabel(string text)
    {
        enemyLabel.text = text;
    }
}
