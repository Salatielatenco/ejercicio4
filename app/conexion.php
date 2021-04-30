<?php
    function conexion(){


        $conexion= new mysqli('localhost','root','','preregistro');

    
    if($conexion->connect_errno)
        echo'error en_la conexion'.$conexion->connect_error;

    
    $conexion->ser_charset("utf8")
    
    return $conexion

    }
?>