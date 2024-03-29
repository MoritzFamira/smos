﻿using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using SMOS.DataBase;
using SMOS.Model;

namespace SMOS.Controllers.Gets;

[ApiController]
[Route("api/gett-shirt")]
public class TShirtController : ControllerBase
{
    [HttpGet(Name = "gett-shirt")]
    public IEnumerable<TShirt> Get()
    {
        List<TShirt> tShirts = new List<TShirt>();
        var dbCon = DBConnection.Instance();
        //this is needed to reset the connection
        dbCon.Reset();
        try
        {
            if (dbCon.IsConnect())
            {
                string getProducts = @"use mos; select t_id,t_name,t_price,t_size,t_color, t_description
                 from t_tshirts";
                var cmd = new MySqlCommand(getProducts, dbCon.Connection);
                Console.WriteLine("Getting TShirts");
                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    tShirts.Add(new TShirt(reader.GetInt32(0), reader.GetString(1), ((double) reader.GetInt32(2)) / 100,
                        reader.GetString(3).Split(',').ToList(), reader.GetString(4).Split(',').ToList(),
                        reader.GetString(5)));
                }

                dbCon.Close();
            }
        }
        catch (Exception e)
        {
            Console.WriteLine($"Cannot connect to Database!\n{e}");
        }

        return tShirts;
    }
}