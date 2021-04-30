$(document).ready(function(){


    function valida_confirmacion_password(){
        if ($('#registro_password'.val() != $('#registro_password_confirmacion'))){
            swal('upps','las contraseñas  no coinciden favor de verificar' ,'warning');
            $('#registro_password_confirmacion').val("");
            return false;
        }else{
            registro_password=$('#registro_password').val()

            //apartir de aqui usaremos la nomenclatura ajax
            recolector_de_informacion="&registro_nombre=" + registro_nombre+
                                        "&registro_paternno=" + registro_paterno+
                                        "&registro_materno=" + registro_materno+
                                        "&registro_fecha_nacimiento" + regristro_fecha+
                                        "&registro_telefono" + registro_telefono+
                                        "&registro_carrera" + registro_carrera+
                                        "&registro_mail" + registro_email+
                                        "&registro_password" + registro_password;

            $.ajax({
                type:'POST',
                data:
                    recolector_de_informacion
                ,
                url: 'control/control_registro.php',
                success :  resultado=>{
                    
                }

            })                           
        }
    }

    function valida_confirmacion_email(){
        if ($('#registro_email'.val() != $('#registro_email_confirmacion'))){
            swal('upps','los email no coinciden favor de verificar' ,'warning');
            $('#registro_mail_confirmacion').val("");
            return false;
        }else{
            registro_email  = $('#registro_mail').val();
            valida_confirmacion_password()
        }
    }

    function valida_construccion_email(){
        cadena = s('#registro_mail').val();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(cadena)){
            //De ser positiva nos lanzamos a la siguiente validacion
            valida_confirmacion_email();
        }else{
            //de ser negativa avisamos
            swal('Upps', 'Ingresa un email valido por favor', 'warning');
            return false;
        }
    }

    function valida_seleccion_carrera(){
        carrera=$('#registro_carrera').val();
        carrera=carrera.toUpperCase();
        if(carrera=='SIS' || carerra=='IND'||  carre=='GES'){
            registro_carrera=carrera;
            valida_construccion_email();
        }
    }

    function valida_telefono(){
        telefono=$('#registro_telefono').val();
        telefono=parseInt(telefono);
        if( telefono<0){
            swal('alerta en el telefono','No existen numeros telefonicos NEGATIVOS ','warnig');
            return false;
        }else{
            telefono=telefono.toString();
            if(telefono.length >10 || telefono.length<10 ){
                swal('alerta en el telefono',
                'No debes de tener mas de 10 digitos y menos de 11 \n '
                + 'Recuerda que  en la zona metropolitana los numeros inician con 55 y 56 \n '+
                'Ejemplo: 5545456767',
                'warninf');
                return false;
        } //! se elimino un else 
        else{
            registro_telefono=$('#registro_telefono').val();
            valida_seleccion_carrera();
        }
    }
}



    function valida_fecha_nacimiento(){
        
        if($('#registro_fecha_de_nacimiento').val() !=""){
            fecha_ingresada=$('#registro_fecha_de_nacimiento').val().split("-");
            edad=2021-fecha_ingresada[0];
            if(edad<16 || edad>99){ //moficcacion
                swal('alerta en fecha de nacimiento','La fecha no es valida : eres muy joven o demasiado viejo ' ,'warning');
            return false;
            }else{
                regristro_fecha=$('#registro_fecha_de_nacimiento').val();
                valida_telefono();
            }
        }
    }    

    
    
    function valida_construccion_alfabetica(){
        cadena=$('#registro_nombre').val();
        regexp1=/[^\w\s]/gi;
        regexp2=/[^A-Z\s]/gi;

        resultado1 = cadena.match(regexp1);
        resultado2 = cadena.match(regexp2);

        if (resultado1 !=null || resultado2 !=null){
            if(resultado1 == null){
                resultado1="";
            }
            if(resultado2 == null){
                resultado2="";
            }
            swal('alerta en el nombre...','lo siguiente caracteres no son validos:\n\n'+
            resultado2 + resultado1,'warning');
            return false

        }else{
            //mofificscion
            registro_nombre = $('#registro_nombre').val().trim().toUpperCase();
            

            cadena=$('#registro_paterno').val();
            resultado1 = cadena.match(regexp1);
            resultado2 = cadena.match(regexp2);


            if (resultado1 !=null || resultado2 !=null){
                if(resultado1 == null){
                    resultado1="";
                }
                if(resultado2 == null){
                    resultado2="";
                }
                swal('alerta en el apellido paterno...','lo siguiente caracteres no son validos:\n\n'+
                resultado2 + resultado1,'warning');
                return false
    
        }else{
    
            registro_paterno= $('#registro_paterno').val().trim().toUpperCase();
            
            
            cadena=$('#registro_materno').val();
            resultado1 = cadena.match(regexp1);
            resultado2 = cadena.match(regexp2);


            if (resultado1 !=null || resultado2 !=null){
                if(resultado1 == null){
                    resultado1="";
                }
                if(resultado2 == null){
                    resultado2="";
                }
                swal('alerta en el apellido materno...','lo siguiente caracteres no son validos:\n\n'+
                resultado2 + resultado1,'warning');
                return false
    
            }else{
                registro_materno= $('#registro_materno').val().trim().toUpperCase();;
                

               // alert("texto listo");
                valida_fecha_nacimiento();
            }
            
        }
        
    }
}


    function valida_vacios(){

        if($('#registro_nombre' ).val()==""){
            swal('upps','ingresa tu "nombre" por favor','warnig');
            return false;
        }else if($('#registro_paterno').val()==""){
            swal('upps','ingresa tu "apellido paterno" por favor','warnig');
            return false;
        }else if($('#registro_materno').val()==""){
            swal('upps','ingresa tu "apellido materno" por favor','warnig');
            return false;
        }else if($('#registro_fecha_de_nacimiento').val()==""){
            swal('upps','ingresa tu "fecha" por favor','warnig');
            return false;
        }else if($('#registro_telefono').val()==""){
            swal('upps','ingresa tu "telefono" por favor','warnig');
            return false;
        }else if($('#registro_carrera').val()==""){
            swal('upps','ingresa tu "carrera" por favor','warnig');
            return false;
        }else if($('#registro_email').val()==""){
            swal('upps','ingresa tu "mail" por favor','warnig');
            return false;
        }else if($('#registro_password').val()==""){
            swal('upps','ingresa tu "password" por favor','warnig');
            return false;
        }else if($('#registro_password_confirmacion').val()==""){
            swal('upps','ingresa tu "confirmacion de password" por favor','warnig');
            return false;
        }else{
            swal('Yeah','Todos los campos tienen algun dato','success');
            valida_construccion_alfabetica();
        }


    
    
}
    
    $('#btn_registro_usuario').click(function(){

        valida_vacios();

    })
});
