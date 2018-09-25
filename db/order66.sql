delete from cart
where id = ${pID};

select c.id, a.cost, a.unique_id, image from cart c
join animals a on c.animal_id = a.id
where user_id = ${uID}
order by c.id desc;
