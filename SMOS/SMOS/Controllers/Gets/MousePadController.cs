using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/GetMousePad")]
public class MousePadController : ControllerBase
{
    [HttpGet(Name = "GetMousePad")]
    public IEnumerable<MousePad> Get()
    {
        List<MousePad> mousePads = new List<MousePad>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getMousepads = @"use mos; select m_name,m_price,m_size,m_color,m_description
                    from m_mousepads";
                var cmd = new MySqlCommand(getMousepads, dbCon.Connection);
                Console.WriteLine("Getting MousePads");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    mousePads.Add(new MousePad(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),
                        reader.GetString(3),reader.GetString(4),reader.GetString(5)));
                }
                dbCon.Close();
            }
      
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return mousePads;
    }
}