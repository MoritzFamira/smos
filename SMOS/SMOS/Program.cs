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
        //TODO designs table; Julian if you read this let's pls talk about finalizing our database structure
        string schemaAndDatabaseTest = @"create database if not exists mos;
use mos;
set foreign_key_checks = 0;
create table if not exists d_designs(
    d_guid varchar(255) primary key not null,
    d_name varchar(50),
    d_u_artist int,
    # This could be done with another table and then an inner join; might make sense if that's a requirement for POS
    d_filetype varchar(10),
    d_approved bool,
    foreign key (d_u_artist) references u_users (u_id)
);
create table if not exists p_products(
    p_id int primary key not null auto_increment,
    p_name varchar(255),
    p_price int
);
create table if not exists u_users(
    u_id int primary key not null auto_increment,
    u_name varchar(255) not null unique,
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
  t_id int primary key not null auto_increment,
  t_name varchar(45),
  t_price int,
  t_size varchar(16),
  t_color varchar(16),
  t_material varchar(16),
  t_countryofmanufacturer varchar(16)
);
create table if not exists h_hoodies(
  h_id int primary key not null auto_increment,
  h_name varchar(45),
  h_price int,
  h_size varchar(16),
  h_color varchar(16),
  h_countryofmanufacturer varchar(16),
  h_material varchar(16),
  h_hood bool
);
create table if not exists c_caps(
  c_id int primary key not null auto_increment,
  c_name varchar(45),
  c_price int,
  c_color varchar(16),
  c_material varchar(16),
  c_countryofmanufacturer varchar(16)
);
create table if not exists c_cups(
  c_id int primary key not null auto_increment,
  c_name varchar(45),
  c_price int,
  c_color varchar(16),
  c_countryofmanufacturer varchar(16)
);
create table if not exists m_mousepads(
  m_id int primary key not null auto_increment,
  m_name varchar(45),
  m_price int,
  m_height int,
  m_length int,
  m_countryofmanufacturer varchar(16)
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
    Console.WriteLine("Cannot connect to Database!\n"+e.StackTrace);
}


app.Run();
