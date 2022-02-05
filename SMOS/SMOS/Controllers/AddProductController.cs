using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;

namespace SMOS.Controllers;

[ApiController]
[Route("AddProduct")]
public class AddProductController : ControllerBase
{
    [HttpPost(Name = "AddProduct")]
    public void Post()
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                
                string addProduct = @"use mos; 
insert into p_products (p_id, p_name, p_price)
VALUE (null,@name,@price);";
                var cmd = new MySqlCommand(addProduct,dbCon.Connection);
                
                var name = new MySqlParameter("name", "TEST");
                var price = new MySqlParameter("price", 1);

                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@price", price);
                Console.WriteLine("Adding Product");
                cmd.ExecuteNonQuery();
                dbCon.Close();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
    }
    
}