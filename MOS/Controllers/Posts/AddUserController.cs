using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;

namespace SMOS.Controllers.Posts;

//[Authorize]
[ApiController]
[Route("api/AddUser")]
public class AddUser
{
    [HttpPost(Name = "AddUser")]
    public HttpResponseMessage Post([FromForm] string name, [FromForm] string password)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                //TODO salting passwords
                string addProduct = @"use mos; 
insert into u_users (u_id, u_name, u_isadmin, u_dateofcreation, u_password)
    value (null,@name,false,current_date,sha2(@password,256));";
                var cmd = new MySqlCommand(addProduct, dbCon.Connection);


                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@password", password);
                Console.WriteLine("Adding User");
                cmd.ExecuteNonQuery();
                dbCon.Close();
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Username already Exists.");
            return new HttpResponseMessage(HttpStatusCode.Conflict);
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }

        return new HttpResponseMessage(HttpStatusCode.BadRequest);
    }
}