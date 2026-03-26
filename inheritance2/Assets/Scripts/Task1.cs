using UnityEngine;

namespace Task1
{
    public class Tetragon
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

        public virtual float CountPerimeter(float a, float b)
        {
            return 0f;
        }

        public virtual float CountArea(float a, float b, float angle)
        {
            return 0f;
        }
    }

    public class ConvexTetragon : Tetragon
    {
        public ConvexTetragon(float a, float b, float angle) : base(a, b, angle)
        {
        }
    }

    public class Parallelogram : ConvexTetragon
    {
        public Parallelogram(float a, float b, float angle) : base(a, b, angle)
        {
        }

        public override float CountPerimeter(float a, float b)
        {
            return 2f * (a + b);
        }

        public override float CountArea(float a, float b, float angle)
        {
            return a * b * Mathf.Sin(angle * Mathf.Deg2Rad);
        }
    }

    public class Rhombus : Parallelogram
    {
        public Rhombus(float a, float angle) : base(a, a, angle)
        {
        }

        public override float CountPerimeter(float a, float b)
        {
            return 4f * a;
        }

        public override float CountArea(float a, float b, float angle)
        {
            return a * a * Mathf.Sin(angle * Mathf.Deg2Rad);
        }
    }

    public class Rectangle : Parallelogram
    {
        public Rectangle(float a, float b) : base(a, b, 90f)
        {
        }

        public override float CountPerimeter(float a, float b)
        {
            return 2f * (a + b);
        }

        public override float CountArea(float a, float b, float angle)
        {
            return a * b;
        }
    }

    public class Square : Rectangle
    {
        public Square(float a) : base(a, a)
        {
        }

        public override float CountPerimeter(float a, float b)
        {
            return 4f * a;
        }

        public override float CountArea(float a, float b, float angle)
        {
            return a * a;
        }
    }
}
