using UnityEngine;
using UnityEngine.InputSystem;
using Firebase;
using Firebase.Crashlytics;

public class CrashlyticsTester : MonoBehaviour
{
    private bool isInitialized = false;

    private void Start()
    {
        // Инициализация Firebase
        FirebaseApp.CheckAndFixDependenciesAsync().ContinueWith(task =>
        {
            if (task.Result == DependencyStatus.Available)
            {
                isInitialized = true;
                Debug.Log("[Crashlytics] Инициализация успешна!");

                // Необязательные пользовательские данные для отчётов
                Crashlytics.SetUserId("test_user_unity");
                Crashlytics.SetCustomKey("версия_приложения", Application.version);
                Crashlytics.Log("Crashlytics готова к тестированию");
            }
            else
            {
                Debug.LogError($"[Crashlytics] Ошибка инициализации: {task.Result}");
            }
        });
    }

    private void Update()
    {
        if (!isInitialized) return;

        var keyboard = Keyboard.current;
        if (keyboard == null) return;

        // Клавиша C – принудительный краш (приложение упадёт)
        if (keyboard.cKey.wasPressedThisFrame)
        {
            Debug.Log("[Crashlytics] Вызов тестового краша...");
            Crashlytics.Log("Пользователь нажал C для краша");
            throw new System.Exception("Тестовый краш от Crashlytics (это нормально)");
        }

        // Клавиша E – нефатальное исключение (приложение не падает)
        if (keyboard.eKey.wasPressedThisFrame)
        {
            Debug.Log("[Crashlytics] Отправка нефатального исключения...");
            try
            {
                throw new System.InvalidOperationException("Тестовое нефатальное исключение");
            }
            catch (System.Exception ex)
            {
                Crashlytics.LogException(ex);
            }
        }

        // Клавиша L – произвольный лог
        if (keyboard.lKey.wasPressedThisFrame)
        {
            string msg = $"Пользовательский лог: время {Time.time:F2} сек, кадр {Time.frameCount}";
            Crashlytics.Log(msg);
            Debug.Log($"[Crashlytics] Лог отправлен: {msg}");
        }
    }
}