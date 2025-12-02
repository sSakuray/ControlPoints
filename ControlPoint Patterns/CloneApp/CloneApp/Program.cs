namespace CloneApp
{
    internal class Program
    {
        static void Main()
        {
            var sphere = new Sphere(1, 1, 1, "Красный", 5);
            Console.WriteLine("Исходная сфера:");
            sphere.Show();

            var sphere1 = (Sphere)sphere.Clone();
            sphere1.X = 10;
            sphere1.Color = "Синий";
            sphere1.Radius = 3;

            var sphere2 = (Sphere)sphere.Clone();
            sphere2.Y = 20;
            sphere2.Color = "Зеленый";
            sphere2.Radius = 7;

            Console.WriteLine("Клоны сферы:");
            sphere1.Show();
            sphere2.Show();

            var cube = new Cube(5, 5, 5, "Желтый", 2);
            Console.WriteLine("Исходный куб:");
            cube.Show();

            var cube1 = (Cube)cube.Clone();
            cube1.Z = 15;
            cube1.Color = "Фиолетовый";
            cube1.Size = 4;

            Console.WriteLine("Клон куба:");
            cube1.Show();

            Console.WriteLine("Изменяем исходную сферу:");
            sphere.Color = "Черный";
            sphere.Show();

            Console.WriteLine("Клоны остались неизменными:");
            sphere1.Show();
            sphere2.Show();
        }
    }
}