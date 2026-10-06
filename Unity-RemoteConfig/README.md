# Unity Remote Config

Простая реализация по примеру из теории: UnityWebRequest + корутина + JsonUtility.

## Что делает код

1. Загружает JSON по URL.
2. Проверяет id, damage >= 0 и cooldown > 0.
3. Находит запись с id из Weapon, применяет значения и сохраняет JSON в Application.persistentDataPath/weapons.json.
4. При ошибке использует локальный файл.
5. Если рабочей копии нет — применяет damage=10, cooldown=0.5 и выводит ошибку.

WeaponConfig — одна запись. WeaponConfigList — обёртка массива weapons, необходимая для JsonUtility. RemoteConfigLoader — загрузка и резервные варианты. Weapon — поля, которые видны в Inspector. RemoteConfigDemo создаёт демонстрационный объект при запуске, если загрузчик не добавлен в сцену.

## Запуск

Откройте SampleScene и нажмите Play. Выберите Remote Config Demo в Hierarchy и посмотрите Weapon в Inspector. На собственный объект можно добавить Weapon и RemoteConfigLoader, затем указать url и weapon.

## Публикация и сдача

Основной конфиг: docs/weapons.json. По вашему выбору используется JSON; для исходного пункта задания о CSV оставлен docs/weapons.csv.

Отправьте проект в GitHub. В Settings → Pages выберите main и / (root). Ожидаемый URL JSON:
https://ssakuray.github.io/ControlPoints/Unity-RemoteConfig/docs/weapons.json

Страница для скриншота:
https://ssakuray.github.io/ControlPoints/Unity-RemoteConfig/docs/

Ссылка для сдачи:
https://github.com/sSakuray/ControlPoints/tree/main/Unity-RemoteConfig

Публикация ещё не выполнена: нужен вход владельца в GitHub. Пока URL не опубликован, загрузчик использует кеш или дефолты.

## Ручная проверка

- После публикации: pistol получает damage=25, cooldown=0.35.
- После успешной загрузки отключите сеть: используется кеш.
- Удалите weapons.json из Application.persistentDataPath и запустите без сети: получаются 10 и 0.5.
- Установите в серверном JSON damage=-1 или cooldown=0: конфиг отклоняется, используется кеш или дефолты.
