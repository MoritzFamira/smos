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
        Product[] products = new Product[]{};
        //TODO find a better way of connecting to database
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Connection = null;
        dbCon.Server = "localhost";
        dbCon.DatabaseName = "";
        dbCon.UserName = "root";
        dbCon.Password = "";
        try
        {
            if (dbCon.IsConnect())
            {
                //TODO Check if the database is there
                string schemaAndDatabaseTest = @"select p_id,p_name,p_price,mt_name
                    from p_products
                    inner join mt_merchtypes mm on p_products.p_mt_type = mm.mt_id;";
                var cmd = new MySqlCommand(schemaAndDatabaseTest, dbCon.Connection);
                Console.WriteLine("Getting Products");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    products.Append(new Product(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),
                        reader.GetString(3)));
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