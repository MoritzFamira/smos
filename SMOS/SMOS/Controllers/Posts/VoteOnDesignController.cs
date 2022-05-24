using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SMOS.Controllers.Posts;

//[Authorize]
[Microsoft.AspNetCore.Components.Route("api/Vote")]
public class VoteOnDesignController
{
    //TODO might want to change the return type to something more useful
    [HttpPost(Name = "Vote")]
    public HttpResponseMessage PostVote([FromForm] int userId, [FromForm] string designGuid, [FromForm] bool isUpvote)
    {
        return new HttpResponseMessage(HttpStatusCode.Created);
    }

    
}