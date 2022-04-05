using SMOS.Model;

public class Hoodie : Product
{
    public Hoodie(int id, string name, int price, string material, string countryOfManufacturer, string size,string color, bool hood) : base(id, name, price)
    {
        Size = size;
        Color = color;
        Hood = hood;
        Material = material;
        CountryOfManufacturer = countryOfManufacturer;
    }
    public string Size { get; }
    public string Color { get; }
    public bool Hood { get; }
    public string Material { get; }

    public string CountryOfManufacturer { get; }
}