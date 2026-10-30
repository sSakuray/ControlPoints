# Практическая работа: Адаптация UI под Safe Area (Screen.safeArea)

Проект: **AndroidAutomatic**

## Описание реализации

1. **Assets/Scripts/UI/SafeAreaFitter.cs** - считывает Screen.safeArea, переводит в нормализованные якоря anchorMin/anchorMax компонента RectTransform, сбрасывает offsetMin/offsetMax, выводит лог в Start(), отслеживает динамические изменения в Update().
2. **Assets/Scripts/UI/SafeAreaDemoHUD.cs** - контроллер демо с кнопками LeftAction, RightAction, выводом данных в реальном времени и кнопкой смены ориентации.
3. **Assets/Editor/SafeAreaSceneBuilder.cs** - автоматический билдер сцены с вертикальным Full HD CanvasScaler (1080x1920).
4. **Assets/Editor/SafeAreaFitterEditor.cs** - кастомный инспектор с пресетами вырезов.

## Запуск
1. Меню Tools > Safe Area > 1. Сгенерировать демо-сцену (SafeAreaDemo).
2. Запуск Play Mode.
3. Тестирование в Device Simulator (iPhone 14 Pro, iPhone 13, Samsung Galaxy S22, Google Pixel 7, iPad Air).