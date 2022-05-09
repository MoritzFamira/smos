namespace SMOS.Model;

public class Cup : Product
{
    public Cup(int id, string name, int price, string size, string color, string description) : base(id, name, price)
    {
        Color = color;
        Description = description;
        Size = size;
    }
    public string Color { get; }
    public string Size { get; }
    public string Description { get; }
}