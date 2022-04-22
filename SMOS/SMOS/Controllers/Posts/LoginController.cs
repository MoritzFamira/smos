using System.Net;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Posts;

[ApiController]
[Route("api/Login")]
public class LoginController : ControllerBase
{
    [HttpPost(Name = "Login")]
    //this should at least return a user ID
    public HttpResponseMessage Login([FromForm] string name,[FromForm] string password)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                //TODO check whether there is a user with the name and password provided
                string login = @"use mos;";
                var cmd = new MySqlCommand(login, dbCon.Connection);
                Console.WriteLine("Logging in");
                cmd.ExecuteNonQuery();
                dbCon.Close();
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
        }
        //TODO make sure the right status code is returned if login fails
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return new HttpResponseMessage(HttpStatusCode.Unauthorized);
    }
}