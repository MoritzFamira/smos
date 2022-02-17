using Microsoft.AspNetCore.Mvc;

namespace SMOS.Controllers.Upload;


public class UploadController:Controller
{
    [HttpPost]  
    public HttpResponseMessage Upload( file)  
    {  
        if (file != null && file.ContentLength > 0)  
            try 
            {  //Server.MapPath takes the absolute path of folder 'Uploads'
                //TODO 
                string path = Path.Combine(Directory.GetCurrentDirectory(),  
                    Path.GetFileName(file.FileName));  
                //Save file using Path+fileName take from above string
                file.SaveAs(path);  
                ViewBag.Message = "File uploaded successfully";  
            }  
            catch (Exception ex)  
            {  
                ViewBag.Message = "ERROR:" + ex.Message.ToString();  
            }  
        else 
        {  
            ViewBag.Message = "You have not specified a file.";  
        }  
    }
    
}