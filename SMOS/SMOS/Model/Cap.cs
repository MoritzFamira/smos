using System.Drawing;

namespace SMOS.Model;

public class Cap : Product
{
    public Cap(int id, string name, int price, string size,string color, string description) : base(id, name, price)
    {
        Color = color;
        Description = description;
        Size = size;
    }
    public string Color { get; }
    public string Description { get; }
    public string Size { get; }
}