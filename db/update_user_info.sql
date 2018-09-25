update users
set username=${username}, first_name=${firstName}, last_name=${lastName}, email=${email}
where id = ${id};


select * from users
where id = ${id};