using FlappyComet.Core;
using UnityEngine;

namespace FlappyComet.Player
{
    [RequireComponent(typeof(LineRenderer))]
    public class CometTail : MonoBehaviour
    {
        [SerializeField] private float worldSpeed = 10f;
        [SerializeField] private float rearOffset = 0.25f;
        [SerializeField] private int segmentCount = 45;

        private LineRenderer lineRenderer;
        private Vector3[] points;
        private float timer;

        private void Awake()
        {
            lineRenderer = GetComponent<LineRenderer>();
            lineRenderer.useWorldSpace = true;
            lineRenderer.positionCount = segmentCount;
            points = new Vector3[segmentCount];
            Clear();
        }

        private void Update()
        {
            if (GameManager.Instance != null && GameManager.Instance.CurrentState == GameState.GameOver)
            {
                lineRenderer.positionCount = 0;
                return;
            }

            if (GameManager.Instance != null && GameManager.Instance.CurrentState != GameState.Playing)
            {
                Clear();
                return;
            }

            lineRenderer.positionCount = segmentCount;

            Vector3 headPos = transform.position - Vector3.right * rearOffset;
            float shiftX = worldSpeed * Time.deltaTime;

            for (int i = 0; i < segmentCount; i++)
            {
                points[i].x -= shiftX;
            }

            timer += Time.deltaTime;
            if (timer >= 0.02f)
            {
                timer = 0f;
                for (int i = segmentCount - 1; i > 0; i--)
                {
                    points[i] = points[i - 1];
                }
            }

            points[0] = headPos;
            lineRenderer.SetPositions(points);
        }

        public void Clear()
        {
            Vector3 headPos = transform.position - Vector3.right * rearOffset;
            for (int i = 0; i < segmentCount; i++)
            {
                points[i] = headPos - Vector3.right * (i * 0.2f);
            }

            if (lineRenderer != null)
            {
                lineRenderer.SetPositions(points);
            }
        }
    }
}
