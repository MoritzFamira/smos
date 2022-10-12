use
mos;
insert into u_users (u_id, u_name, u_isadmin, u_dateofcreation, u_password)
    value (1,"MOS",false,current_date,"asdöflkjqwerpoiuyxcv,mn");

insert into t_tshirts (t_id, t_name, t_price, t_size, t_color, t_description)
    value (null,"T-shirt",1999,"XS,S,M,L,XL,XXL","Black,White,Red","Basic t-shirt made from 100% cotton.");

insert into h_hoodies (h_id, h_name, h_price, h_size, h_color, h_description)
    value (null,"Hoodie",3999,"S,M,L,XL","Black,White","Basic hoodie made from 100% cotton.");

insert into m_mousepads (m_id, m_name, m_price, m_size, m_color, m_description)
    value (1,"Mousepad",999,"30cmx40cm","Black,White","A great surface to use your mouse on. Ideal for computer gaming.");

insert into c_cups (c_id, c_name, c_price, c_size, c_color, c_description)
    value (1,"Mug",1499,"Normal","Black,White","A great way to enjoy your morning coffee.");

insert into c_caps (c_id, c_name, c_price, c_size, c_color, c_description)
    value (null,"Cap",1999,"S,M,L","Black,White","Protect your face from the sun and look cool while doing it!");

insert into d_designs (d_guid, d_name, d_u_artist, d_filetype, d_approved)
    value ("blank","Blank",1,".png",true);