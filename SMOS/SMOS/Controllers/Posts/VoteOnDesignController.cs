using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;

namespace SMOS.Controllers.Posts;

//[Authorize]
[Route("api/Vote")]
public class VoteOnDesignController
{
    //TODO might want to change the return type to something more useful
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
                string addVote = @"use mos; 
insert into du_votes ( du_u_id, du_d_guid, du_isupvote)
    value (@user,@design,@isupvote);";
                var cmd = new MySqlCommand(addVote,dbCon.Connection);
                
                
                cmd.Parameters.AddWithValue("@user", userId);
                cmd.Parameters.AddWithValue("@design", designGuid);
                cmd.Parameters.AddWithValue("@isupvote", isUpvote);
                Console.WriteLine("Adding Vote");
                cmd.ExecuteNonQuery();
                dbCon.Close();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("User already voted." + e.StackTrace);
            return new HttpResponseMessage(HttpStatusCode.Conflict);
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return new HttpResponseMessage(HttpStatusCode.BadRequest);
    }

    
}