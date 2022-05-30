namespace SMOS.Model;

public class MousePad : Product
{
    public MousePad(int id, string name, double price, List<string> size, List<string> color, string description) : base(id, name, price)
    {
        Size = size;
        Color = color;
        Description = description;
    }

    public List<string> Size { get; }
    public List<string> Color { get; }
    public string Description { get; }
}