namespace SMOS.Model;

public class TShirt : Product
{
    public TShirt(int id, string name, int price,string size,string color) : base(id, name, price)
    {
        Size = size;
        Color = color;
    }
    public string Size { get; }
    public string Color { get; }
}