create database personas ;
use personas;
create table if not exists usuario{
    id_usuario int not null auto_increment,  
    nombre_usuario varchar(45) not null,
    paterno_usuario varchar(45) not null,
    materno_usuario varchar(45) not null,
    fecha_nacimiento_usuario  date not null,
    telefono_usuario  varchar(20) not null,
    carrera_usuario  varchar(45) not null,
    mail_usuario   varchar(45) not null,
    password_usuario varchar(45) not null,
    subio_archivos int default 0,
    dda_autorizo int default 0,
    rf_autorizo int default 0,
    habiltar_examen int default 0,
    calificaciones_usuario int default 0,
    rol int not null default 0


}ENGINE=InnoDB default  charset=latin1;