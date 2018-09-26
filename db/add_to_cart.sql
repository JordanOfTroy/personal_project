insert into cart (user_id, animal_id)
values(${uID}, ${pID});

select * from cart 
where user_id = ${uID}
