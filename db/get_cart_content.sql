select a.cost, a.unique_id, image from cart c
join animals a on c.animal_id = a.id
where user_id = ${id}
order by c.id desc;