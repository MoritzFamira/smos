using System.Drawing;

namespace SMOS.Model;

public class Cap : Product
{
    public Cap(int id, string name, double price, List<string> size,List<string> color, string description) : base(id, name, price)
    {
        Color = color;
        Description = description;
        Size = size;
    }
    public List<string> Color { get; }
    public string Description { get; }
    public List<string> Size { get; }
}