using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;

namespace SMOS.Controllers.Posts;

[Authorize]
[Route("api/Vote")]
public class VoteOnDesignController
{
    [HttpPost(Name = "Vote")]
    public HttpResponseMessage Post([FromForm] int userId, [FromForm] string designGuid, [FromForm] bool isUpvote)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                // query that adds a vote for the specified design, by the specified user
                string addVote = @"use mos; 
                insert into du_votes ( du_u_id, du_d_guid, du_isupvote)
                value (@user,@design,@isupvote);";
                var cmd = new MySqlCommand(addVote, dbCon.Connection);

                // setting parameters for query
                cmd.Parameters.AddWithValue("@user", userId);
                cmd.Parameters.AddWithValue("@design", designGuid);
                cmd.Parameters.AddWithValue("@isupvote", isUpvote);

                Console.WriteLine("Adding Vote");
                cmd.ExecuteNonQuery();
                dbCon.Close();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
        }
        catch
        {
            Console.WriteLine("User already voted.");
            dbCon.Reset();
            try
            {
                if (dbCon.IsConnect())
                {
                    // query that removes a vote for the specified design, by the specified user
                    string removeVote = @"use mos; delete
                    from du_votes
                    where du_u_id = @user and du_d_guid = @design";
                    var cmd = new MySqlCommand(removeVote, dbCon.Connection);

                    // setting parameters for query
                    cmd.Parameters.AddWithValue("@user", userId);
                    cmd.Parameters.AddWithValue("@design", designGuid);

                    Console.WriteLine("Removing Vote");
                    cmd.ExecuteNonQuery();
                    dbCon.Close();
                    return new HttpResponseMessage(HttpStatusCode.Created);
                }
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.Conflict);
            }
        }

        return new HttpResponseMessage(HttpStatusCode.BadRequest);
    }
}