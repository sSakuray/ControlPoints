using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CloneApp
{
    public class Sphere : ICloneable3D
    {
        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }
        public string Color { get; set; }
        public double Radius { get; set; }

        public Sphere(double x, double y, double z, string color, double radius)
        {
            X = x; Y = y; Z = z; Color = color; Radius = radius;
        }
        public ICloneable3D Clone()
        {
            return new Sphere(X, Y, Z, Color, Radius);
        }
        public void Show()
        {
            Console.WriteLine($"Сфера: ({X}, {Y}, {Z}), {Color}, R={Radius}");
        }
    }
}
