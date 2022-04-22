﻿using System.Net;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Posts;

[ApiController]
[Route("api/AddCup")]
public class AddCupController : ControllerBase
{
    [HttpPost(Name = "AddCup")]
    public HttpResponseMessage Post([FromForm] string color,[FromForm] string countryofmanufacturer,[FromForm] string name,[FromForm] int price)
    {
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string addProduct = @"use mos; 
insert into c_cups (c_id,c_name,c_price,c_color,c_countryofmanufacturer)
VALUE (null,@name,@price,@color,@countryofmanufacturer);";
                var cmd = new MySqlCommand(addProduct,dbCon.Connection);
                
                
                cmd.Parameters.AddWithValue("@color", color);
                cmd.Parameters.AddWithValue("@countryofmanufacturer", countryofmanufacturer);
                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@price", price);
                Console.WriteLine("Adding Cup");
                cmd.ExecuteNonQuery();
                dbCon.Close();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
            return new HttpResponseMessage(HttpStatusCode.Conflict);
        }

        return new HttpResponseMessage(HttpStatusCode.OK);
    }
    
}