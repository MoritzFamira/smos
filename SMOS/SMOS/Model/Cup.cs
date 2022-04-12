namespace SMOS.Model;

public class Cup : Product
{
    public Cup(int id, string name, int price, string color, string countryOfManufacturer) : base(id, name, price)
    {
        Color = color;
        CountryOfManufacturer = countryOfManufacturer;
    }
    public string Color { get; }
    public string CountryOfManufacturer { get; }
}