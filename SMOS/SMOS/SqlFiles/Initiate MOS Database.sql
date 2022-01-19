create database if not exists mos;
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
set foreign_key_checks = 1;