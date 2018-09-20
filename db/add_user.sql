insert into users (username, password, first_name, last_name, email, image)
values (${username}, ${hash}, ${firstname}, ${lastname}, ${email}, ${image});

select * from users
where username = ${username}