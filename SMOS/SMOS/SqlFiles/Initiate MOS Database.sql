create database if not exists mos;
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
    u_dateofcreation datetime
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
set foreign_key_checks = 1;