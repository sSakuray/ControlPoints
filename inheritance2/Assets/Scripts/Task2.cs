using UnityEngine;

namespace Task2
{
    public interface ITetragon
    {
        float CountPerimeter(float a, float b);
        float CountArea(float a, float b, float angle);
    }

    public class Tetragon : ITetragon
    {
        public float a;
        public float b;
        public float angle;

        public Tetragon(float a, float b, float angle)
        {
            this.a = a;
            this.b = b;
            this.angle = angle;
        }

        public float CountPerimeter(float a, float b) => 0f;
        public float CountArea(float a, float b, float angle) => 0f;
    }

    public class ConvexTetragon : ITetragon
    {
        public float a;
        public float b;
        public float angle;

        public ConvexTetragon(float a, float b, float angle)
        {
            this.a = a;
            this.b = b;
            this.angle = angle;
        }

        public float CountPerimeter(float a, float b) => 0f;
        public float CountArea(float a, float b, float angle) => 0f;
    }

    public class Parallelogram : ITetragon
    {
        public float a;
        public float b;
        public float angle;

        public Parallelogram(float a, float b, float angle)
        {
            this.a = a;
            this.b = b;
            this.angle = angle;
        }

        public float CountPerimeter(float a, float b) => 2f * (a + b);
        public float CountArea(float a, float b, float angle) => a * b * Mathf.Sin(angle * Mathf.Deg2Rad);
    }

    public class Rhombus : ITetragon
    {
        public float a;
        public float angle;

        public Rhombus(float a, float angle)
        {
            this.a = a;
            this.angle = angle;
        }

        public float CountPerimeter(float a, float b) => 4f * a;
        public float CountArea(float a, float b, float angle) => a * a * Mathf.Sin(angle * Mathf.Deg2Rad);
    }

    public class Rectangle : ITetragon
    {
        public float a;
        public float b;
        public float angle = 90f;

        public Rectangle(float a, float b)
        {
            this.a = a;
            this.b = b;
        }

        public float CountPerimeter(float a, float b) => 2f * (a + b);
        public float CountArea(float a, float b, float angle) => a * b;
    }

    public class Square : ITetragon
    {
        public float a;
        public float angle = 90f;

        public Square(float a)
        {
            this.a = a;
        }

        public float CountPerimeter(float a, float b) => 4f * a;
        public float CountArea(float a, float b, float angle) => a * a;
    }
}
