$(document).ready(function(){
    let   nombre;
    let  password;
    $('#btn_sesion').click(function(){

        nombre=$('#nombre').val();
        password=$('#password').val();

        recolector="bandera_nombre"+nombre+"&bandera_password"+password;
        
        $.ajax({

            type:'POST',
            data: recolector,
            
            url: 'control/control_form.php',
            success : function(resultado){
                console.log(resultado)
            }
        });

    })
});