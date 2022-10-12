using System.Net;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Delete;

[ApiController]
[Route("api/DeleteDesign")]
public class DeleteDesignController : ControllerBase
{
    [HttpGet(Name = "DeleteDesign")]
    public HttpResponseMessage DeleteDesign(Guid id)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string deleteDesign = @"use mos; 
                    DELETE FROM d_designs WHERE d_guid=@id";
                var cmd = new MySqlCommand(deleteDesign, dbCon.Connection);
                cmd.Parameters.AddWithValue("@id", id);
                Console.WriteLine("Deleting Design");
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