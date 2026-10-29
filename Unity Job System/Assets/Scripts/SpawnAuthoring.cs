using Unity.Burst;
using Unity.Collections;
using Unity.Collections.LowLevel.Unsafe;
using Unity.Jobs;
using Unity.Mathematics;
using UnityEngine;
using UnityEngine.Jobs;

namespace _Source
{
    public class SpawnAuthoring : MonoBehaviour
    {
        public GameObject prefab;
        public int count = 5000;

        private TransformAccessArray _transformAccessArray;
        private NativeArray<float> _angles;
        private NativeArray<float> _speeds;
        private NativeArray<float> _radii;
        private JobHandle _movementHandle;
        private bool _isJobRunning;

        private float _logTimer;
        private const float LogInterval = 1.0f;
        private NativeArray<float> _logResults;

        private void Start()
        {
            if (prefab == null)
            {
                return;
            }

            Transform[] transforms = new Transform[count];
            _angles = new NativeArray<float>(count, Allocator.Persistent);
            _speeds = new NativeArray<float>(count, Allocator.Persistent);
            _radii = new NativeArray<float>(count, Allocator.Persistent);
            _logResults = new NativeArray<float>(count, Allocator.Persistent);

            var root = new GameObject("Objects").transform;

            for (int i = 0; i < count; i++)
            {
                var obj = Instantiate(prefab, root);
                float angle = UnityEngine.Random.Range(0f, math.PI * 2f);
                float radius = UnityEngine.Random.Range(5f, 40f);
                float speed = UnityEngine.Random.Range(0.5f, 2.0f);

                obj.transform.position = new Vector3(math.cos(angle) * radius, 0f, math.sin(angle) * radius);
                transforms[i] = obj.transform;

                _angles[i] = angle;
                _radii[i] = radius;
                _speeds[i] = speed;
            }

            _transformAccessArray = new TransformAccessArray(transforms);
        }

        private void Update()
        {
            if (!_transformAccessArray.isCreated)
            {
                return;
            }

            var moveJob = new MoveTransformJob
            {
                DeltaTime = Time.deltaTime,
                Angles = _angles,
                Speeds = _speeds,
                Radii = _radii
            };
            _movementHandle = moveJob.Schedule(_transformAccessArray);
            _isJobRunning = true;

            _logTimer += Time.deltaTime;
            if (_logTimer >= LogInterval)
            {
                _logTimer = 0f;
                var jobHandles = new NativeArray<JobHandle>(count, Allocator.TempJob);
                try
                {
                    for (int i = 0; i < count; i++)
                    {
                        var logJob = new CalculateSingleLogJob
                        {
                            Index = i,
                            RandomValue = UnityEngine.Random.Range(1f, 100f),
                            Results = _logResults
                        };
                        jobHandles[i] = logJob.Schedule();
                    }
                    JobHandle.CombineDependencies(jobHandles).Complete();
                }
                finally
                {
                    jobHandles.Dispose();
                }
            }
        }

        private void LateUpdate()
        {
            if (_isJobRunning)
            {
                _movementHandle.Complete();
                _isJobRunning = false;
            }
        }

        private void OnDestroy()
        {
            if (_isJobRunning)
            {
                _movementHandle.Complete();
            }

            if (_transformAccessArray.isCreated)
            {
                _transformAccessArray.Dispose();
            }

            if (_angles.IsCreated)
            {
                _angles.Dispose();
            }

            if (_speeds.IsCreated)
            {
                _speeds.Dispose();
            }

            if (_radii.IsCreated)
            {
                _radii.Dispose();
            }

            if (_logResults.IsCreated)
            {
                _logResults.Dispose();
            }
        }
    }

    [BurstCompile]
    public struct MoveTransformJob : IJobParallelForTransform
    {
        public float DeltaTime;
        public NativeArray<float> Angles;
        [ReadOnly] public NativeArray<float> Speeds;
        [ReadOnly] public NativeArray<float> Radii;

        public void Execute(int index, TransformAccess transform)
        {
            float angle = Angles[index] + Speeds[index] * DeltaTime;
            Angles[index] = angle;
            transform.position = new Vector3(math.cos(angle) * Radii[index], 0f, math.sin(angle) * Radii[index]);
        }
    }

    [BurstCompile]
    public struct CalculateSingleLogJob : IJob
    {
        public int Index;
        public float RandomValue;
        [NativeDisableContainerSafetyRestriction] public NativeArray<float> Results;

        public void Execute()
        {
            Results[Index] = math.log(RandomValue);
        }
    }
}
