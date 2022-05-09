﻿using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/GetCap")]
public class CapController : ControllerBase
{
    [HttpGet(Name = "GetCap")]
    public IEnumerable<Cap> Get()
    {
        List<Cap> caps = new List<Cap>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getCaps = @"use mos; select c_name,c_price,c_size,c_color,c_description
                 from c_caps";
                var cmd = new MySqlCommand(getCaps, dbCon.Connection);
                Console.WriteLine("Getting Caps");
                var reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    caps.Add(new Cap(reader.GetInt32(0), reader.GetString(1), reader.GetInt32(2),reader.GetString(3),
                        reader.GetString(4),reader.GetString(5)));
                }
                dbCon.Close();
            }

            
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }
        return caps;
    }
}