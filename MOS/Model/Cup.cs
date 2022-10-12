namespace SMOS.Model;

public class Cup : Product
{
    public Cup(int id, string name, double price, List<string> size, List<string> color, string description) : base(id,
        name, price)
    {
        Color = color;
        Description = description;
        Size = size;
    }

    public List<string> Color { get; }
    public List<string> Size { get; }
    public string Description { get; }
}