using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Posts;

[Authorize]
[ApiController]
[Route("api/AddHoodie")]
public class AddHoodieController : ControllerBase
{
    [HttpPost(Name = "AddHoodie")]
    public HttpResponseMessage Post([FromForm] string size, [FromForm] string color,
        [FromForm] string description, [FromForm] string name, [FromForm] int price)
    {
        //Console.WriteLine("product: "+product);
        //Console.WriteLine("size: "+size);
        //Console.WriteLine("color: "+color);
        //Console.WriteLine("material: "+material);
        //Console.WriteLine("countryofmanufacturer: "+countryofmanufacturer);
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string addProduct = @"use mos; 
insert into h_hoodies(h_id,h_name,h_price, h_size, h_color, h_description)
VALUE (null,@name,@price,@size,@color,@description);";
                var cmd = new MySqlCommand(addProduct, dbCon.Connection);


                cmd.Parameters.AddWithValue("@size", size);
                cmd.Parameters.AddWithValue("@color", color);
                cmd.Parameters.AddWithValue("@description", description);
                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@price", price);
                Console.WriteLine("Adding Hoodie");
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