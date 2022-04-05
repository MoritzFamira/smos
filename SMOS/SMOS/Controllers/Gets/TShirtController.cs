using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/GetTShirts")]
public class TShirtController
{
    [HttpGet(Name = "GetTShirts")]
    public IEnumerable<Product> Get()
    {
        List<TShirt> tShirts = new List<TShirt>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select p_id,p_name,p_price,t_size,t_color,t_countryofmanufacturer,t_material
                    from p_products inner join t_tshirts on p_id = t_p_product;";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting TShirts");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    tShirts.Add(new TShirt(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),
                        reader.GetString(3),reader.GetString(4),reader.GetString(5),
                        reader.GetString(6)));
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