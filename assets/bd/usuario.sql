create database codoacodo;
use codoacodo;
create table usuario(
id int(11) auto_increment,
nombre varchar(40),
apellido varchar(40),
edad tinyint(2),
fecha timestamp,
provincia varchar(30),
primary key(id)
);

insert into usuario (nombre, apellido, edad, fecha, provincia)
values ("Juan", "Perez", 25, "2023-06-05","Buenos Aires");

insert into usuario (nombre, apellido, edad, provincia)
values ("Lautaro", "Gomez", 22,"Buenos Aires"),
("Lautaro", "Gomez", 22,"Buenos Aires"),
("Laura", "Mendieta", 34, "Buenos Aires"),
("Micaela", "Rosario", 25, "Mendoza")
;

select * from usuario;