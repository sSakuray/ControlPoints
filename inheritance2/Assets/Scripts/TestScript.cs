using UnityEngine;

public class TestScript : MonoBehaviour
{
    private void Start()
    {
        Debug.Log("ПРОВЕРКА ЗАДАНИЯ 1");
        
        Task1.Parallelogram p1 = new Task1.Parallelogram(10f, 5f, 30f);
        Debug.Log($"Параллелограмм (10, 5, угол 30): Периметр = {p1.CountPerimeter(10f, 5f)}, Площадь = {p1.CountArea(10f, 5f, 30f)}");

        Task1.Rhombus rh1 = new Task1.Rhombus(5f, 45f);
        Debug.Log($"Ромб (сторона 5, угол 45): Периметр = {rh1.CountPerimeter(5f, 5f)}, Площадь = {rh1.CountArea(5f, 5f, 45f)}");

        Task1.Rectangle rec1 = new Task1.Rectangle(10f, 5f);
        Debug.Log($"Прямоугольник (10, 5): Периметр = {rec1.CountPerimeter(10f, 5f)}, Площадь = {rec1.CountArea(10f, 5f, 90f)}");

        Task1.Square sq1 = new Task1.Square(4f);
        Debug.Log($"Квадрат (сторона 4): Периметр = {sq1.CountPerimeter(4f, 4f)}, Площадь = {sq1.CountArea(4f, 4f, 90f)}");


        Debug.Log("ПРОВЕРКА ЗАДАНИЯ 2");

        Task2.Parallelogram p2 = new Task2.Parallelogram(10f, 5f, 30f);
        Debug.Log($"Параллелограмм (10, 5, угол 30): Периметр = {p2.CountPerimeter(10f, 5f)}, Площадь = {p2.CountArea(10f, 5f, 30f)}");

        Task2.Rhombus rh2 = new Task2.Rhombus(5f, 45f);
        Debug.Log($"Ромб (сторона 5, угол 45): Периметр = {rh2.CountPerimeter(5f, 5f)}, Площадь = {rh2.CountArea(5f, 5f, 45f)}");

        Task2.Rectangle rec2 = new Task2.Rectangle(10f, 5f);
        Debug.Log($"Прямоугольник (10, 5): Периметр = {rec2.CountPerimeter(10f, 5f)}, Площадь = {rec2.CountArea(10f, 5f, 90f)}");

        Task2.Square sq2 = new Task2.Square(4f);
        Debug.Log($"Квадрат (сторона 4): Периметр = {sq2.CountPerimeter(4f, 4f)}, Площадь = {sq2.CountArea(4f, 4f, 90f)}");
    }
}
