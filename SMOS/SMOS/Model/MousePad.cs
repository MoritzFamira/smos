namespace SMOS.Model;

public class MousePad : Product
{
    public MousePad(int id, string name, int price, string size, string color,  string description) : base(id, name, price)
    {
        Size = size;
        Color = color;
        Description = description;
    }
    public string Size { get; }
    public string Description { get; }
    public  string Color { get; }
}