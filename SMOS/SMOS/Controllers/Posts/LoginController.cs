using System.IdentityModel.Tokens.Jwt;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

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
        return Ok(token);
    }
}