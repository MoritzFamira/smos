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
dbCon.Server = "localhost";
dbCon.DatabaseName = "";
dbCon.UserName = "root";
dbCon.Password = "";
try
{
    if (dbCon.IsConnect())
    {
        //TODO Check if the database is there
        string schemaAndDatabaseTest = @"create database if not exists mos;
        use mos;
        set foreign_key_checks = 0;
        create table if not exists p_products(
            p_id int primary key,
            p_name varchar(255),
            p_price int,
            p_mt_type int,
            foreign key (p_mt_type) references mt_merchtypes (mt_id)
        );
        create table if not exists mt_merchtypes (
            mt_id int primary key,
            mt_name varchar(255)
        );
        set foreign_key_checks = 1;";
        var cmd = new MySqlCommand(schemaAndDatabaseTest, dbCon.Connection);
        Console.WriteLine("Creating Database");
        cmd.ExecuteReader();
        dbCon.Close();
    }
}
catch (Exception e)
{
    Console.WriteLine("Cannot connect to Database!");
}


app.Run();
