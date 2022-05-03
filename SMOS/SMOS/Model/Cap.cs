namespace SMOS.Model;

public class Cap : Product
{
    public Cap(int id, string name, int price, string color, string material, string countryOfManufacturer) : base(id, name, price)
    {
        Color = color;
        Material = material;
        CountryOfManufacturer = countryOfManufacturer;
    }
    public string Color { get; }
    public string Material { get; }

    public string CountryOfManufacturer { get; }
}