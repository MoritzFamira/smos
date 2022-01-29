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
DBConnection dbCon = DBConnection.Instance();
dbCon.Reset();
try
{
    if (dbCon.IsConnect())
    {
        //TODO Check if the database is there
        string schemaAndDatabaseTest = @"create database if not exists mos;
use mos;
set foreign_key_checks = 0;
create table if not exists p_products(
    p_id int primary key not null auto_increment,
    p_name varchar(255),
    p_price int,
    p_mt_type int
);
create table if not exists u_users(
    u_id int primary key not null auto_increment,
    u_name varchar(255) not null,
    u_isadmin bool,
    u_dateofcreation datetime,
    u_password varchar(255)
);
create table if not exists s_submissions(
    s_id int primary key not null auto_increment,
    s_u_artist int,
    s_votes int,
    s_date datetime,
    #TODO
    foreign key (s_u_artist) references u_users (u_id)
);
create table if not exists t_tshirts(
  t_p_product int primary key not null auto_increment,
  t_size varchar(16),
  t_color varchar(16)
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
