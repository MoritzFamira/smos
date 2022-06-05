using System.Net;
using System.Text.Json.Nodes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace SMOS.Controllers.Posts;

[ApiController]
[Route("api/Login")]
public class LoginController : ControllerBase
{
    private IJwtAuthenticationManager JwtAuthenticationManager { get; }
    public LoginController(IJwtAuthenticationManager jwtAuthenticationManager)
    {
        JwtAuthenticationManager = jwtAuthenticationManager;
    }
    [HttpPost(Name = "Login")]
    [AllowAnonymous]
    //this should at least return a user ID TODO this shouldn't work if the password is wrong
    public JsonObject Login([FromForm] string name,[FromForm] string password)
    {
        var token = JwtAuthenticationManager.Authenticate(name, password);
        if (token[1].Equals("0")) return new JsonObject(new []
        {
            KeyValuePair.Create<string,JsonNode?>("statusCode",403),
            KeyValuePair.Create<string,JsonNode?>("reasonPhrase","Forbidden")
        });
        var reply = new JsonObject(new[] {KeyValuePair.Create<string, JsonNode?>("jwt", token[0]),
            KeyValuePair.Create<string, JsonNode?>("userid",Int32.Parse(token[1])), });
        return reply;
    }
}