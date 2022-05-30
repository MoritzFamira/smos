using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/getcap")]
public class CapController : ControllerBase
{
    [HttpGet(Name = "GetCap")]
    public IEnumerable<Cap> Get()
    {
        List<Cap> caps = new List<Cap>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select c_id,c_name,c_price,c_size,c_color,c_description
                 from c_caps";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting Caps");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    caps.Add(new Cap(reader.GetInt32(0),reader.GetString(1),(((double) reader.GetInt32(2))/100),
                        reader.GetString(3).Split(',').ToList(),reader.GetString(4).Split(',').ToList(),reader.GetString(5)));
                }
                dbCon.Close();
            }

            
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return caps;
    }
}