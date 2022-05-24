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
    //this should at least return a user ID
    public IActionResult Login([FromForm] string name,[FromForm] string password)
    {
        var token = JwtAuthenticationManager.Authenticate(name, password);
        if (token is null) return Unauthorized();
        var reply = new JsonObject(new[] {KeyValuePair.Create<string, JsonNode?>("jwt", token[0]),
            KeyValuePair.Create<string, JsonNode?>("userid",Int32.Parse(token[1])), });
        return Ok(reply);
    }
}