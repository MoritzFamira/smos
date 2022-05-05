using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using MySql.Data.MySqlClient;
using SMOS.DataBase;

namespace SMOS;

//Create JWT https://www.youtube.com/watch?v=vWkPdurauaA
public class JwtAuthenticationManager : IJwtAuthenticationManager
{
    private string Key { get; }
    
    public JwtAuthenticationManager(string key)
    {
        Key = key;
    }
    public string Authenticate(string username, string password)
    {
        var dbCon = DBConnection.Instance();
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string login = @"use mos; select * from u_users
where u_name like @name and u_password like sha2(@password,256);";
                var cmd = new MySqlCommand(login, dbCon.Connection);
                
                cmd.Parameters.AddWithValue("@name", username);
                cmd.Parameters.AddWithValue("@password", password);
                
                Console.WriteLine("Logging in");
                cmd.ExecuteNonQuery();
                dbCon.Close();
                
                //fragt nicht was das macht
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.ASCII.GetBytes(Key);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name,username)
                    }),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey),SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }
        }
        //TODO make sure the right status code is returned if login fails
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return null;
        
    }
}