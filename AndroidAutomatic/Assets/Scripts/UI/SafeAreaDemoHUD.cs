using UnityEngine;
using UnityEngine.UI;

namespace SafeAreaDemo
{
    public class SafeAreaDemoHUD : MonoBehaviour
    {
        [SerializeField] private Button leftActionButton;
        [SerializeField] private Button rightActionButton;

        private void Start()
        {
            if (leftActionButton != null)
            {    
                leftActionButton.onClick.AddListener(HandleLeftActionClicked);
            }

            if (rightActionButton != null)
            {
                rightActionButton.onClick.AddListener(HandleRightActionClicked);
            }
        }

        private void OnDestroy()
        {
            if (leftActionButton != null)
            {
                leftActionButton.onClick.RemoveListener(HandleLeftActionClicked);
            }

            if (rightActionButton != null)
            {
                rightActionButton.onClick.RemoveListener(HandleRightActionClicked);
            }
        }

        private void HandleLeftActionClicked()
        {
            Debug.Log("LeftAction clicked");
        }

        private void HandleRightActionClicked()
        {
            Debug.Log("RightAction clicked");
        }
    }
}
