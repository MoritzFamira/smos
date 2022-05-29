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
    public IEnumerable<Voting> Get()
    {
        List<Voting> votings = new List<Voting>();
        //TODO
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getVotings = @"use mos; select du_d_guid,d_u_artist, sum(du_isupvote),d_filetype
from du_votes
inner join d_designs d on du_votes.du_d_guid = d.d_guid
group by du_d_guid";
                var cmd = new MySqlCommand(getVotings, dbCon.Connection);
                Console.WriteLine("Getting Votings");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    votings.Add(new Voting(Guid.Parse(reader.GetString(0)),reader.GetInt32(1),reader.GetInt32(2)));
                }
                dbCon.Close();
            }

            
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return votings;
    }
}