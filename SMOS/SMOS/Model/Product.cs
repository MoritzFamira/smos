namespace SMOS.Model;

public class Product
{
    public Product(int id, string name, int price)//,string merchType)
    {
        Id = id;
        Name = name;
        Price = price;
        //MerchType = merchType;
    }

    public int Id { get; }
    public string Name { get; }
    public int Price { get; }
    //public string MerchType { get; }
}