using System.Net;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Posts;

[ApiController]
[Route("api/AddMousepad")]
public class AddMousepadController : ControllerBase
{
    [HttpPost(Name = "AddMousepad")]
    public HttpResponseMessage Post([FromForm] string name,[FromForm] int price,
    [FromForm] int height,[FromForm] int length,[FromForm] string countryofmanufacturer)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string addProduct = @"use mos; 
insert into m_mousepads (m_id,m_name,m_price,m_height,m_length, m_countryofmanufacturer)
VALUE (null,@name,@price, @height,@length,@countryofmanufacturer);";
                var cmd = new MySqlCommand(addProduct,dbCon.Connection);
                
                
                cmd.Parameters.AddWithValue("@height", height);
                cmd.Parameters.AddWithValue("@countryofmanufacturer", countryofmanufacturer);
                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@price", price);
                cmd.Parameters.AddWithValue("@length", length);
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