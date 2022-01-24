create database if not exists mos;
use mos;
set foreign_key_checks = 0;
create table if not exists p_products(
    p_id int primary key not null auto_increment,
    p_name varchar(255),
    p_price int,
    p_mt_type int,
    foreign key (p_mt_type) references mt_merchtypes (mt_id)
);
create table if not exists mt_merchtypes (
    mt_id int primary key not null auto_increment,
    mt_name varchar(255)
);
create table if not exists u_users(
    u_id int primary key not null auto_increment,
    u_name varchar(255) not null,
    u_isadmin bool,
    u_dateofcreation datetime
);
create table if not exists s_submissions(
    
);
set foreign_key_checks = 1;