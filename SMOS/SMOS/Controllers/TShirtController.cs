using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers;

[ApiController]
[Route("GetTShirts")]
public class TShirtController
{
    [HttpGet(Name = "GetProducts")]
    public IEnumerable<Product> Get()
    {
        TShirt[] tShirts = new TShirt[]{};
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select p_id,p_name,p_price,t_size,t_color
                    from p_products inner join t_tshirts on p_id = t_p_product;";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting TShirts");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    tShirts.Append(new TShirt(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),
                        reader.GetString(3),reader.GetString(4)));
                }
                dbCon.Close();
            }

            
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return tShirts;
    }
}