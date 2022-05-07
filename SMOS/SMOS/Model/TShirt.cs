namespace SMOS.Model;

public class TShirt : Product
{
    public TShirt(int id, string name, int price,  string size,string color, string description) : base(id, name, price)
    {
        Size = size;
        Color = color;
        Description = description;
    }
    public string Size { get; }
    public string Color { get; }
    public string Description { get; }
}