namespace SMOS.Model;

public class MousePad : Product
{
    public MousePad(int id, string name, int price, int height, int length, string countryOfManufacturer) : base(id, name, price)
    {
        Height = height;
        Length = length;
        CountryOfManufacturer = countryOfManufacturer;
    }
    public int Height { get; }
    public int Length { get; }
    public string CountryOfManufacturer { get; }
}