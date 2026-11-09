# Отчёт: Job System и ECS

## Версии
- Unity 6000.1.17f1, URP 17.1.0 (PC_Renderer — Forward+)
- Entities 1.3.10, Entities Graphics 1.4.8
- Burst 1.8.24, Collections 2.5.3, Mathematics 1.3.2

## Сцена
- `SampleScene` → `ArmySubScene` (SubScene) → `Spawner` (SpawnerAuthoring: Prefab, Count, Columns, Spacing, UseJobs)
- `Cube.prefab` — OrbitAuthoring (Speed, Radius), материал URP Lit
- `EntityGizmos` — переключатель, лимит маркеров, размер, цвет

## Методика
Burst включён, Gizmos выключены, отрисовка одна и та же. Переключение режима — галочка `UseJobs` у Spawner.
- `UseJobs = false` — SystemAPI.Query в основном потоке
- `UseJobs = true` — IJobEntity.ScheduleParallel

В Profiler смотреть: `OrbitMoveSystem` (вычисления), `OrbitMoveJob` на Worker-потоках, `JobHandle.Complete`/`WaitForJobGroupID` (ожидания), `EntitiesGraphicsSystem` + Render Thread (отрисовка).

## Результаты (мс, один кадр, Editor Play Mode, Burst вкл, Gizmos выкл)
Железо: 15 рабочих потоков Job System. Columns = 250, Spacing = 3.

| Кол-во | Режим | OrbitMoveSystem (main) | OrbitMoveJob (workers) | WaitForJobGroupID | EntitiesGraphicsSystem | CPU кадра | FPS (Stats) |
|---|---|---|---|---|---|---|---|
| 10 000 | Query | 0.11 | — | — | 0.23 | 3.00 | ~314 |
| 10 000 | ScheduleParallel | 0.00 | 0.014 (сумма 0.17 на 12 потоках) | 0.07 | 0.23 | 3.66 | ~342 |
| 50 000 | Query | 0.85 | — | 0.58 | 0.63 | 5.23 | ~220 |
| 50 000 | ScheduleParallel | 0.01 | 0.17 (сумма 1.08 на 13 потоках) | 0.34 | 0.50 | 3.71 | ~230–300 |
| 100 000 | Query | 1.59 | — | 0.99 | 0.81 | 6.69 | ~145 |
| 100 000 | ScheduleParallel | 0.03 | 0.43 (сумма 2.57 на 11 потоках) | 1.12 | 1.37 | 6.70 | ~189 |

- OrbitMoveSystem (main) — время системы в основном потоке. В режиме Query здесь весь расчёт, в режиме Jobs только планирование.
- OrbitMoveJob (workers) — длительность джобы на одном потоке и суммарное время по всем потокам.
- WaitForJobGroupID — ожидания jobs в основном потоке (в основном рендер- и transform-джобы).
- EntitiesGraphicsSystem — подготовка отрисовки в основном потоке.

## Вывод
- На 10 000 разница незаметна: расчёт занимает 0.1 мс, накладные расходы на планирование сопоставимы с работой.
- С ростом количества время Query в основном потоке растёт линейно (0.11 → 0.85 → 1.59 мс). ScheduleParallel оставляет основной поток почти свободным (≤0.03 мс), а сама работа идёт параллельно за 0.17–0.43 мс.
- Суммарное время на потоках у ScheduleParallel больше, чем у Query (2.57 против 1.59 мс на 100 000): параллельность добавляет накладные расходы, но выигрыш по реальному времени кадра есть.
- На 100 000 узким местом становятся отрисовка (EntitiesGraphicsSystem, Render Thread) и ожидание рендер-джоб, а не расчёт движения.
