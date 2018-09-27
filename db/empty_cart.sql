delete from cart
where user_id = ${uID};

select * from cart 
where user_id = ${uID}