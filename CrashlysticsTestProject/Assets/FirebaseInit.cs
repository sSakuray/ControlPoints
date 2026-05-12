using UnityEngine;
using UnityEngine.Diagnostics;
using Firebase;
using Firebase.Crashlytics;
using Firebase.Extensions;

public class FirebaseInit : MonoBehaviour
{
    private bool _firebaseReady = false;

    void Start()
    {
        FirebaseApp.CheckAndFixDependenciesAsync().ContinueWithOnMainThread(task =>
        {
            var dependencyStatus = task.Result;
            if (dependencyStatus == DependencyStatus.Available)
            {
                Debug.Log("[Firebase] Готов к использованию.");
                Crashlytics.ReportUncaughtExceptionsAsFatal = true;
                _firebaseReady = true;
            }
            else
            {
                Debug.LogError($"[Firebase] Ошибка зависимостей: {dependencyStatus}");
            }
        });
    }
    public void CrashNow()
    {
        if (!_firebaseReady)
        {
            return;
        }
        Crashlytics.Log("Тестовый краш нажатием кнопки — KT-5");
        Utils.ForceCrash(ForcedCrashCategory.FatalError);
    }
}
