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
        // Инициализируем Firebase
        FirebaseApp.CheckAndFixDependenciesAsync().ContinueWithOnMainThread(task =>
        {
            var dependencyStatus = task.Result;
            if (dependencyStatus == DependencyStatus.Available)
            {
                Debug.Log("[Firebase] Готов к использованию.");
                // Crashlytics будет записывать все необработанные исключения как fatal
                Crashlytics.ReportUncaughtExceptionsAsFatal = true;
                _firebaseReady = true;
            }
            else
            {
                Debug.LogError($"[Firebase] Ошибка зависимостей: {dependencyStatus}");
            }
        });
    }

    // Этот метод нужно назначить на кнопку в Unity Inspector (Button → OnClick → FirebaseInit.CrashNow)
    public void CrashNow()
    {
        if (!_firebaseReady)
        {
            Debug.LogWarning("[Firebase] Ещё не инициализирован, подождите секунду.");
            return;
        }

        Debug.Log("[Firebase] Вызываем тестовый краш...");

        // Записываем кастомный лог перед крашем (будет виден в Crashlytics)
        Crashlytics.Log("Тестовый краш нажатием кнопки — KT-5");

        // ForceCrash — настоящий нативный краш, приложение закроется
        // Это НЕ C# исключение (которое Unity молча перехватывает)
        Utils.ForceCrash(ForcedCrashCategory.FatalError);
    }
}