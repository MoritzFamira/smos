using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/gethoodie")]
public class HoodieController : ControllerBase
{
    [HttpGet(Name = "gethoodie")]
    public IEnumerable<Hoodie> Get()
    {
        List<Hoodie> hoodies = new List<Hoodie>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select h_id,h_name,h_price,h_size,h_color,h_description
                 from h_hoodies";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting Hoodies");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    hoodies.Add(new Hoodie(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),
                        reader.GetString(3),reader.GetString(4),reader.GetString(5)));
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