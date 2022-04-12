using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/GetCup")]
public class CupController
{
    [HttpGet(Name = "GetCup")]
    public IEnumerable<Product> Get()
    {
        List<Cup> cups = new List<Cup>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select p_id,p_name,p_price, c_color, c_countryofmanufacturer
                    from p_products inner join c_cups on p_id = c_p_product;";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting Cups");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    cups.Add(new Cup(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),
                        reader.GetString(3),reader.GetString(4)));
                }
                dbCon.Close();
            }

            
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return cups;
    }
}