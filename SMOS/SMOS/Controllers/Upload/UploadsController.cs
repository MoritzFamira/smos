using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Upload;

[ApiController]
[Route("api/GetAllDesigns")]
public class UploadsController
{
    [HttpGet(Name = "GetAllDesigns")]
    public IEnumerable<Design> Get()
    {
        List<Design> designs = new List<Design>();
        var dbCon = DBConnection.Instance();
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getUsers = @"use mos;
select d_guid,d_filetype,u_name,d_approved,d_name from d_designs inner join u_users on u_id = d_u_artist;";
                MySqlCommand cmd = new MySqlCommand(getUsers, dbCon.Connection);
                Console.WriteLine("Getting Designs");
                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    string filename = reader.GetString(0) + reader.GetString(1);
                    designs.Add(new Design(filename, reader.GetString(2),reader.GetString(4)));
                }

                dbCon.Close();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return designs;
    }
}