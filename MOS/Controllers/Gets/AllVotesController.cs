using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/allvotes")]
public class AllVotesController : ControllerBase
{
    [HttpGet(Name = "getallvotes")]
    public IEnumerable<Voting> Get([FromForm] int userId)
    {
        List<Voting> votings = new List<Voting>();
        //TODO
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            //(select du_isupvote from du_votes where du_u_id = @user) as user_voted
            if (dbCon.IsConnect())
            {
                string getVotings =
                    @"use mos; select d_name,d_filetype, du_d_guid,artist.u_name, sum(du_isupvote) as number_of_votes
from du_votes
inner join d_designs d on du_votes.du_d_guid = d.d_guid
inner join u_users artist on d.d_u_artist = artist.u_id
where d_approved = false
group by du_d_guid;";
                var cmd = new MySqlCommand(getVotings, dbCon.Connection);
                cmd.Parameters.AddWithValue("@user", userId);
                Console.WriteLine("Getting Votings");
                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    votings.Add(new Voting(reader.GetString(0), reader.GetString(1),
                        Guid.Parse(reader.GetString(2)), reader.GetString(3), reader.GetInt32(4)));
                }

                dbCon.Close();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
            throw;
        }

        return votings;
    }
}