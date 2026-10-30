# Flappy Comet — Unity Ads для Android

Unity 6000.1.17f1. Advertisement Legacy 4.12.0, без mediation. Проект связан с Unity Cloud: Test Task, `4b33baec-d3c9-4950-9aad-650aca4e12d8`.

## Запуск

1. Откройте проект в Unity 6000.1.17f1 и сцену `Assets/Scenes/SampleScene.unity`.
2. Нажмите Play. SDK запускается автоматически в тестовом режиме.
3. Баннер показывается снизу по центру на старте и после проигрыша, скрывается во время игры.
4. Управление: пробел, мышь или касание экрана Android.
5. После проигрыша `WATCH AD +5 POINTS` запускает rewarded. Награда начисляется только после полного просмотра, один раз за раунд. При недоступной рекламе кнопка отключена.
6. `PLAY AGAIN (FREE)` перезапускает игру.

Интерфейс сохранён в сцене: `AdsCanvas > SafeArea > GameOverActions`. У кнопок настроены события `Button > On Click`. Создания кнопок через код, экранов Privacy, выбора режима рекламы и автоматических тестов нет.

## Проверка рекламы в Editor

Откройте `Tools > Unity Ads > Configuration and Test`. В Play Mode доступны инициализация, загрузка/показ/скрытие баннера и загрузка/показ rewarded. Это предусмотренные заданием тестовые вызовы SDK, не автоматические тесты. Для проверки начисления очков используйте игровую кнопку rewarded.

Настройки — `Assets/Resources/AdsConfiguration.json`:

- Android Game ID: `800416753`.
- Banner: `BP_Banner_Android`.
- Rewarded: `BP_Rewarded_Android`.
- `testMode: true`.

## Скрипты

- `Assets/Scripts/Advertising/AdsService.cs` — инициализация, загрузка, показ и скрытие, обработка ошибок и результата rewarded.
- `Assets/Scripts/Advertising/UnityAdsClient.cs` — вызовы Advertisement Legacy и callbacks SDK.
- `Assets/Scripts/Advertising/AdsConfiguration.cs` — выбор Android ID; Editor использует Android-настройки.
- `Assets/Scripts/UI/AdsGameUI.cs` — точки показа рекламы и обработчики двух игровых кнопок.
- `Assets/Editor/AdsTools.cs` — окно вызовов рекламы и сборка Android.
- `Assets/Scripts/Core/GameManager.cs` — награда +5 очков за завершённый rewarded.

## APK и запись

Нужен Android Build Support с SDK, NDK и OpenJDK. В окне Unity Ads нажмите `Build Android development APK`. Результат: `Builds/FlappyCometAds.apk`. Пакет `com.ssakuray.flappycomet.ads`, Landscape, ARM64 и x86_64, Development Build.

Установите APK на Android или командой `adb install -r FlappyCometAds.apk`. Запись экрана можно сделать на устройстве или через `Scripts/Record-Android.ps1`.

Успешные показы рекламы пока не подтверждены: на проверенном подключении Android SDK получает ошибку TLS от сервера конфигурации Unity Ads. В Editor также была ошибка `Invalid configuration request`. Логи SDK смотрите в Console или `adb logcat -s Unity UnityAds`. Сценарий сдачи должен показать реальный баннер, полный rewarded и награду; запись только игры этого не подтверждает.
