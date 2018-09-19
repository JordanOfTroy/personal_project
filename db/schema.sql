drop table if exists cart;
drop table if exists users;
drop table if exists animals_morphs;
drop table if exists morphs;
drop table if exists animals;
drop table if exists reptile_types;  
drop table if exists sub_types;

create table reptile_types (
  id serial primary key,
  type text
);

create table sub_types (
  id serial primary key,
  scientific_name text,
  common_name text,
  adult_size decimal,
  life_span integer,
  temperment text,
  exp_level text
);

create table animals (
  id serial primary key,
  hatch_date date,
  gender text,
  unique_id text not null,
  type_id integer references reptile_types(id),
  sub_type_id integer references sub_types(id),
  cost decimal,
  image text
);

create table users (
  id serial primary key,
  username varchar(30),
  password varchar(30),
  first_name varchar(30),
  last_name varchar(30),
  image text
);

create table cart (
  id serial primary key,
  user_id integer references users(id),
  animal_id integer references animals(id)
);

create table morphs (
    id serial primary key,
    morph_name text
);

create table animals_morphs (
  id serial primary key,
  animal_id integer references animals(id),
  morph_id integer references morphs(id)
);

 

 
