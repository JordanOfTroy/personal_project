drop table if exists reptile_types;
create table reptile_types (
  id serial primary key,
  type text
);

drop table if exists sub_types;
create table sub_types (
  id serial primary key,
  scientific_name text,
  common_name text,
  adult_size decimal,
  life_span integer,
  temperment text,
  exp_level text
);

drop table if exists animals;
create table animals (
  id serial primary key,
  hatch_date date,
  gender text,
  uniqui_id text not null,
  type_id integer references reptile_types(id),
  sub_type_id integer references sub_types(id),
  image text
);

drop table if exists users;
create table users (
  id serial primary key,
  username varchar(30),
  password varchar(30),
  first_name varchar(30),
  last_name varchar(30),
  image text
);

drop table if exists cart;
create table cart (
  id serial primary key,
  user_id integer references users(id),
  animal_id integer references animals(id)
);

drop table if exists morphs;
create table morphs (
  id serial primary key,
  name text,
  description text
);

drop table if exists animals_morphs;
create table animals_morphs (
  id serial primary key,
  animal_id integer references animals(id),
  morph_id integer references morphs(id)
);