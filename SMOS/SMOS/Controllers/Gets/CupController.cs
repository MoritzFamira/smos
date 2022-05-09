using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/getmug")]
public class CupController : ControllerBase
{
    [HttpGet(Name = "getmug")]
    public IEnumerable<Cup> Get()
    {
        List<Cup> cups = new List<Cup>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select c_id,c_name,c_price, c_size, c_color,c_description
                 from c_cups";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting Cups");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    cups.Add(new Cup(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),
                        reader.GetString(3),reader.GetString(4),reader.GetString(5)));
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