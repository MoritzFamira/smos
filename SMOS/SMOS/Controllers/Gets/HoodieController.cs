using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/GetHoodie")]
public class HoodieController
{
    [HttpGet(Name = "GetHoodie")]
    public IEnumerable<Product> Get()
    {
        List<Hoodie> hoodies = new List<Hoodie>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select p_id,p_name,p_price,h_size,h_color,h_countryofmanufacturer,h_material,
                    h_hood
                    from p_products inner join h_hoodies on p_id = h_p_product;";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting Hoodies");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    hoodies.Add(new Hoodie(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),
                        reader.GetString(3),reader.GetString(4),reader.GetString(5),
                        reader.GetString(6), reader.GetBoolean(7)));
                }
                dbCon.Close();
            }

            
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return hoodies;
    }
}