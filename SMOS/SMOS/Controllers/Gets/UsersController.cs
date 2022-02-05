using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers;
[ApiController]
[Route("GetUsers")]
public class UsersController
{
    [HttpGet(Name = "GetUsers")]
    public IEnumerable<User> Get()
    {
        List<User> users = new List<User>();
        var dbCon = DBConnection.Instance();
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getUsers = @"use mos;
select u_id, u_name, u_isadmin, u_dateofcreation 
from u_users;";
                MySqlCommand cmd = new MySqlCommand(getUsers, dbCon.Connection);
                Console.WriteLine("Getting Users");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    users.Add(new User(reader.GetInt32(0),reader.GetString(1),
                        reader.GetBoolean(2),reader.GetDateTime(3)));
                }
                dbCon.Close();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return users;
    }
}