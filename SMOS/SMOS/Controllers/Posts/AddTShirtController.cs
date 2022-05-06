using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Posts;

[Authorize]
[ApiController]
[Route("api/AddTShirt")]
public class AddTshirtController : ControllerBase
{
    [HttpPost(Name = "AddTShirt")]
    public HttpResponseMessage Post([FromForm] string size,[FromForm] string color,
        [FromForm] string material,[FromForm] string countryofmanufacturer,[FromForm] string name,[FromForm] int price)
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
insert into t_tshirts (t_id,t_name,t_price, t_size, t_color, t_material, t_countryofmanufacturer)
VALUE (null,@name,@price,@size,@color,@material,@countryofmanufacturer);";
                var cmd = new MySqlCommand(addProduct,dbCon.Connection);
                
                
                cmd.Parameters.AddWithValue("@size", size);
                cmd.Parameters.AddWithValue("@color", color);
                cmd.Parameters.AddWithValue("@material", material);
                cmd.Parameters.AddWithValue("@countryofmanufacturer", countryofmanufacturer);
                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@price", price);
                Console.WriteLine("Adding TShirt");
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