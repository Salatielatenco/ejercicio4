<?php
     //print($_POST[''])
    require_once '../app/conexion.php'
    
    $conexion = conexion();
    $nombre=$_POST['bandera_nombre'];

    $query_insert = "iNSERT INTO personas(nombre)values(?)";
    echo 1;

    $insert_preparado=  $conexion->prepare($query_insert);

    $insert_preparado->bind_param('s',$nombre);

    $resultado_insert =$insert_preparado->execute();

    if($resultado_insert){
        echo 1;
    }else{
        echo 0;

    }

    $conexion->close();

    echo $_POST['nombre'];
    echo $_POST['password'];

?>