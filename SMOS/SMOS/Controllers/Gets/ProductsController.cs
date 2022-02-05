using System.Data.Common;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers;

[ApiController]
[Route("GetProducts")]
public class ProductsController : ControllerBase
{

    [HttpGet(Name = "GetProducts")]
    public IEnumerable<Product> Get()
    {
        List<Product> products = new List<Product>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select p_id,p_name,p_price
                    from p_products;";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting Products");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    products.Add(new Product(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2)));
                }
                dbCon.Close();
            }

            
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return products;
    }
}
