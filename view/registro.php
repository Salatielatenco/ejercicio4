<div class="container-fluid">
    <div class="row">
        <div class="col">
            <div class="display-4 text-center">
                REGISTRO PARA NUEVOS APSIRANTES
            </div>
        </div>
    </div>
    <div class="row justify-content-around py-4">
        <div class="col-sm-5 tm-1">
            <div style="font-size: 3rem;" class="lead">
                DATOS PERSONALES
            </div>
            <hr>
            <form id="formulario_registro_a">
            <div  class="form-group">
                <label for="registro_nombre" class="lead">Nombres(s)</label>
                <input
                type="text"
                class="form-control form_control-sm"
                id="registro_nombre"
                name="registro_nombre">
            </div>
            <div  class="form-group">
                <label for="registro_paterno" class="lead">Paterno</label>
                <input
                type="text"
                class="form-control form_control-sm"
                id="registro_paterno"
                name="registro_paterno">
            </div>
            <div  class="form-group">
                <label for="registro_materno" class="lead">Materno</label>
                <input
                type="text"
                class="form-control form_control-sm"
                id="registro_materno"
                name="registro_materno">
            </div>
            <div class="form-group">
                <label for="registro_fecha_de_nacimiento " class="lead">Fecha de Nacimiento</label>
                <input
                type="date"
                class="form_control form_control_sm"
                id="registro_fecha_de_nacimiento"
                name="registro_fecha_de_nacimiento">
            </div>
            <div class ="form_group">
            <label for="registro_telefono" class="lead">telefono de contancto(preferencia movil)</label>
            <input
                type="number"
                class="form_control form_control_sm"
                id="registro_telefono"
                name="registro_telefono">
            </div>
            <div class ="form_group">
            <label for="registro_carrera" class="lead">Carrera de tu eleccion</label>
            <select name="registro_carrera" id="registro_carrera" class="form-control  form_control-sm">
            <option value="">seleccionar</option>
            <option value="ges">Ingenieria en gestion empresarial</option>
            <option value="ind">Ingenieria en Industrial</option>
            <option value="SIS">Ingenieria en Sistemas compuntacionales</option>
            </select>
            
            </div>
        </form>
        </div>
        <div class="col-sm-5 tm-1">
            <div style="font-size: 3rem;" class="lead">
                Datos Para iniciar sesion
            </div>
            <hr>
            <form id="formulario_registro_b">
            <div  class="form-group">
                <label for="registro_mail" class="lead">Mail personal</label>
                <input
                type="email"
                class="form-control form_control-sm"
                id="registro_email"
                name="registro_email">
            </div>
            <div  class="form-group">
                <label for="registro_password" class="lead">Password</label>
                <input
                type="password"
                class="form-control form_control-sm"
                id="registro_password"
                name="registro_password">
            </div>
            <div  class="form-group">
                <label for="registro_password_confirmacion" class="lead">confirmacion <strong>password</strong></label>
                <input
                type="password"
                class="form-control form_control-sm"
                id="registro_password_confirmacion"
                name="registro_password_confirmacion">
            </div>
            <div  class="form-group">
                <span class="btn btn-success btn-block " id="btn_registro_usuario">
                    <span class="lead"> Registrarse</span>
                </span>
            </div>
            <div  class="form-group">
                <a class="btn btn-dark btn-block " id="btn_cancelar_usuario">
                    <span class="lead"> Cancelar</span>
                </a>
            </div>
        </form>
    </div>

</div>

<script src="manager/manager_registro.js"></script>
