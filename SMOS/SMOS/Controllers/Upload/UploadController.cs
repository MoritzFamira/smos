using System.Net;
using Microsoft.AspNetCore.Mvc;

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
                if (file.FileName.EndsWith(".png"))
                {
                    filetype = ".png";
                }

                if (file.FileName.EndsWith(".jpg"))
                {
                    filetype = ".jpg";
                }

                Guid guid = Guid.NewGuid();
                Console.WriteLine(guid);
                
                string filePath = Path.Combine(uploads,/* this parameter will be the file name */ guid.ToString()+filetype);
                Stream fileStream = new FileStream(filePath, FileMode.Create);
                file.CopyTo(fileStream);
                //await file.CopyToAsync(fileStream);
                fileStream.Close();
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