using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using NUnit.Framework;
using SMOS.DataBase;

namespace MOS.Test;

public class Tests
{
    private static HttpClient client = new HttpClient();

    [SetUp]
    public void Setup()
    {
        Console.WriteLine("Setting up tests.");
    }

    [Test]
    public async void TestCapControllers()
    {
        //TODO
        //await client.PostAsync("api/AddUser",new MultipartFormDataContent().Add(new StringContent()))
        //await client.PostAsync("api/Login")
        //await client.PostAsync("api/AddCap",new HttpContentHeaders())
    }
}