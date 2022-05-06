using System.Net;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Delete;

[ApiController]
[Route("api/DeleteProduct")]
public class DeleteProductController : ControllerBase
{
    [HttpGet(Name = "DeleteProduct")]
    public HttpResponseMessage DeleteProduct(int id)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string deleteProduct = @"use mos; 
                    DELETE FROM p_products WHERE p_id=@id";
                var cmd = new MySqlCommand(deleteProduct,dbCon.Connection);
                cmd.Parameters.AddWithValue("@id", id);
                Console.WriteLine("Deleting Product");
                cmd.ExecuteNonQuery();
                dbCon.Close();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
            return new HttpResponseMessage(HttpStatusCode.Conflict);
        }
        var response = new HttpResponseMessage();
        response.Headers.Add("DeleteMessage", "Succsessfuly Deleted!!!");

        return new HttpResponseMessage(HttpStatusCode.OK);
    }
}