namespace SMOS.Model;

public class Product
{
    public Product(int id, string name, double price) //,string merchType)
    {
        Id = id;
        Name = name;
        Price = price;
        //MerchType = merchType;
    }

    public int Id { get; }
    public string Name { get; }

    public double Price { get; }
    //public string MerchType { get; }
}