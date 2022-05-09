using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Posts;

[Authorize]
[ApiController]
[Route("api/AddMousepad")]
public class AddMousepadController : ControllerBase
{
    [HttpPost(Name = "AddMousepad")]
    public HttpResponseMessage Post([FromForm] string name,[FromForm] int price,
    [FromForm] string size,[FromForm] string color,[FromForm] string description)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string addProduct = @"use mos; 
insert into m_mousepads (m_id,m_name,m_price,m_size,m_color, m_description)
VALUE (null,@name,@price, @size,@color,@description);";
                var cmd = new MySqlCommand(addProduct,dbCon.Connection);
                
                
                cmd.Parameters.AddWithValue("@size", size);
                cmd.Parameters.AddWithValue("@description", description);
                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@price", price);
                cmd.Parameters.AddWithValue("@color", color);
                Console.WriteLine("Adding Mousepad");
                cmd.ExecuteNonQuery();
                dbCon.Close();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
            return new HttpResponseMessage(HttpStatusCode.Conflict);
        }

        return new HttpResponseMessage(HttpStatusCode.OK);
    }
    
}