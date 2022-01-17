using Microsoft.Extensions.FileProviders;
using MySql.Data.MySqlClient;
using SMOS.DataBase;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseFileServer(new FileServerOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "Pages")),
    RequestPath = ""
});

//TODO Establish connection to MySQL Database & Make sure all the tables are initialized
var dbCon = DBConnection.Instance();
if (dbCon.IsConnect())
{
    //TODO Check if the database is there
    string schemaAndDatabaseTest = "CREATE DATABASE IF NOT EXISTS mos;USE mos;";
    var cmd = new MySqlCommand(schemaAndDatabaseTest, dbCon.Connection);
    Console.WriteLine("Creating Database");
    cmd.ExecuteReader();
    dbCon.Close();
}

app.Run();
