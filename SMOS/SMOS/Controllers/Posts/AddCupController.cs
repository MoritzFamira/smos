using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Posts;

[Authorize]
[ApiController]
[Route("api/AddCup")]
public class AddCupController : ControllerBase
{
    [HttpPost(Name = "AddCup")]
    public HttpResponseMessage Post([FromForm] string color, [FromForm] string size, [FromForm] string description,
        [FromForm] string name, [FromForm] int price)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string addProduct = @"use mos; 
insert into c_cups (c_id,c_name,c_price, c_size, c_color,c_description)
VALUE (null,@name,@price,@size,@color,@description);";
                var cmd = new MySqlCommand(addProduct, dbCon.Connection);


                cmd.Parameters.AddWithValue("@color", color);
                cmd.Parameters.AddWithValue("@size", size);
                cmd.Parameters.AddWithValue("@description", description);
                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@price", price);
                Console.WriteLine("Adding Cup");
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