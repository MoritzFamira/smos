using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace SMOS.Controllers.Upload;

[ApiController]
[Route("api/Upload")]
public class UploadController : ControllerBase
{
    [HttpPost(Name = "Upload")]
    public HttpResponseMessage UploadFile(IFormFile file)
    {
        try
        {
            Console.WriteLine("Datei: "+file.FileName);
            //TODO check if file is right file type etc.
            //Console.WriteLine(Directory.GetCurrentDirectory());
            string uploads = Path.GetFullPath(Directory.GetCurrentDirectory())+"/Pages/Uploads";
            if (file.Length > 0) {
                string filePath = Path.Combine(uploads, file.FileName);
                Stream fileStream = new FileStream(filePath, FileMode.Create);
                file.CopyTo(fileStream);
                //await file.CopyToAsync(fileStream);
                
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