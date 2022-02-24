using Microsoft.AspNetCore.Mvc;

namespace SMOS.Controllers.Upload;

[ApiController]
[Route("api/Upload")]
public class UploadController : ControllerBase
{
    [HttpPost(Name = "Upload")]
    public IActionResult UploadFile(IFormFile file)
    {
        //TODO way of finding path to upload folder
        /*var ctx = HttpContext.;
        var root = ctx.Server.MapPath();*/
        //var provider = new MultipartFormDataContent("~/Pages");
        try
        {
            Console.WriteLine("Datei: "+file.FileName);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return Ok();
    }
}