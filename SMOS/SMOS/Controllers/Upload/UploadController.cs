using System.Net;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;

namespace SMOS.Controllers.Upload;

[ApiController]
[Route("api/Upload")]
public class UploadController : ControllerBase
{
    [HttpPost(Name = "Upload")]
    //int artist is a user ID
    public HttpResponseMessage UploadFile([FromForm] IFormFile file,[FromForm] int artist)
    {
        try
        {
            Console.WriteLine("Datei: "+file.FileName);
            //TODO check if file is right file type etc.
            //Console.WriteLine(Directory.GetCurrentDirectory());
            string uploads = Path.GetFullPath(Directory.GetCurrentDirectory())+"/Pages/Uploads";
            if (file.Length > 0) {
                //TODO handle different filetypes (.jpeg, .jpg, .png, ...)
                string filetype = "";
                switch (file.FileName.Split('.')[file.FileName.Split().Length-1])
                {
                    case "png":
                        filetype = ".png";
                        break;
                    case "jpg":
                        filetype = ".jpg";
                        break;
                    default:
                        return new HttpResponseMessage(HttpStatusCode.ExpectationFailed);
                }
                Guid guid = Guid.NewGuid();
                Console.WriteLine(guid);
                
                string filePath = Path.Combine(uploads,/* this parameter will be the file name */ guid.ToString()+filetype);
                Stream fileStream = new FileStream(filePath, FileMode.Create);
                file.CopyTo(fileStream);
                //await file.CopyToAsync(fileStream);
                fileStream.Close();
                
                var dbCon = DBConnection.Instance();
                //this is needed to reset the connection
                dbCon.Reset();
                try
                {
                    if (dbCon.IsConnect())
                    {
                        string addDesign = @"use mos; 
                        insert into d_designs (d_guid,d_u_artist,d_filetype,d_approved)
                        VALUE (@guid,@artist,@filetype,@approved);";
                        var cmd = new MySqlCommand(addDesign, dbCon.Connection);
                
                        cmd.Parameters.AddWithValue("@guid", guid.ToString());
                        cmd.Parameters.AddWithValue("@artist", artist);
                        cmd.Parameters.AddWithValue("@filetype", filetype);
                        cmd.Parameters.AddWithValue("@approved", false);
                        Console.WriteLine("Adding Design");
                        cmd.ExecuteNonQuery();
                        dbCon.Close();
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine($"Cannot connect to Database!\n{e}");
                    return new HttpResponseMessage(HttpStatusCode.Conflict);
                }
            }
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }
    }
}