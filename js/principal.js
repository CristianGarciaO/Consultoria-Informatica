
var oConsultoria = new Consultoria();



// LISTA DE EVENTOS

document.getElementById('eventNuevoCliente').addEventListener('click', nuevoCliente, false);

document.getElementById('eventModificaCliente').addEventListener('click', modificaCliente, false);

document.getElementById('eventNuevaIncidencia').addEventListener('click', nuevaIncidencia, false);

document.getElementById('eventModificaIncidencia').addEventListener('click', modificaIncidencia, false);

document.getElementById('eventNuevaPublicidad').addEventListener('click', nuevaPublicidad, false);

document.getElementById('eventEliminarPublicidad').addEventListener('click', eliminarPublicidad, false);

document.getElementById('eventNuevoContrato').addEventListener('click', nuevoContrato, false);

document.getElementById('eventModificarContrato').addEventListener('click', modificarContrato, false);

document.getElementById('eventNuevoAdmin').addEventListener('click', nuevoAdministrador, false);

document.getElementById('eventModificarAdmin').addEventListener('click', modificarAdministrador, false);

document.getElementById('eventNuevoProyecto').addEventListener('click', nuevoProyecto, false);

document.getElementById('eventModificaProyecto').addEventListener('click', modificarProyecto, false);

document.getElementById('eventNuevaTarea').addEventListener('click', nuevaTarea, false);

document.getElementById('eventModificaTarea').addEventListener('click', modificaTarea, false);

document.getElementById('eventNuevoAnalista').addEventListener('click', nuevoAnalista, false);
// FUNCIONES PARA MANEJO DE CAPAS

function ocultarFormularios() {

    document.getElementById('divFormNuevoCliente').style.display = 'none';
    document.getElementById('divFormModificaCliente').style.display = 'none';
    document.getElementById('divFormNuevaIncidencia').style.display = 'none';
    document.getElementById('divFormModificaIncidencia').style.display = 'none';
    document.getElementById('divFormNuevaPublioidad').style.display = 'none';
    document.getElementById('divFormEliminaPublicidad').style.display = 'none';
    document.getElementById('divFormNuevoContrato').style.display = 'none';
    document.getElementById('divFormModificarContrato').style.display = 'none';
    document.getElementById('divFormNuevoAdministrador').style.display = 'none';
    document.getElementById('divFormModificarAdministrador').style.display = 'none';
    document.getElementById('divFormNuevoProyecto').style.display='none';
    document.getElementById('divFormModificaProyecto').style.display='none';
    document.getElementById('divFormNuevaTarea').style.display='none';
    document.getElementById('divFormModificaTarea').style.display='none';
    document.getElementById('divFormNuevoAnalista').style.display='none';
}

function nuevoCliente() {
    ocultarFormularios();
    document.getElementById('divFormNuevoCliente').style.display = 'block';
    document.getElementById('formuNuevoCliente').reset();
}

function modificaCliente() {
    ocultarFormularios();
    document.getElementById('divFormModificaCliente').style.display = 'block';
    document.getElementById('formuModificaCliente').reset();
}

function nuevaIncidencia() {
    ocultarFormularios();
    document.getElementById('divFormNuevaIncidencia').style.display = 'block';
    document.getElementById('formuNuevaIncidencia').reset();
}

function modificaIncidencia() {
    ocultarFormularios();
    document.getElementById('divFormModificaIncidencia').style.display = 'block';
    document.getElementById('formuModificaIncidencia').reset();
}


function nuevaPublicidad() {
    ocultarFormularios();
    document.getElementById('divFormNuevaPublioidad').style.display = 'block';
    document.getElementById('formuNuevaPublicidad').reset();
}


function eliminarPublicidad() {
    ocultarFormularios();
    document.getElementById('divFormEliminaPublicidad').style.display = 'block';
    document.getElementById('formuElimiarPublicidad').reset();
}


function nuevoContrato() {
    ocultarFormularios();
    document.getElementById('divFormNuevoContrato').style.display = 'block';
    document.getElementById('formuNuevoContrato').reset();
}

function modificarContrato() {
    ocultarFormularios();
    document.getElementById('divFormModificarContrato').style.display = 'block';
    document.getElementById('formuModificarContrato').reset();
}


function nuevoAdministrador() {
    ocultarFormularios();
    document.getElementById('divFormNuevoAdministrador').style.display = 'block';
    document.getElementById('formuNuevoAdmin').reset();
}

function modificarAdministrador() {
    ocultarFormularios();
    document.getElementById('divFormModificarAdministrador').style.display = 'block';
    document.getElementById('formuModificarAdmin').reset();
}


function nuevoProyecto() {
    ocultarFormularios();
    document.getElementById('divFormNuevoProyecto').style.display = 'block';
    document.getElementById('formuNuevoProyecto').reset();
}


function modificarProyecto() {
    ocultarFormularios();
    document.getElementById('divFormModificaProyecto').style.display = 'block';
    document.getElementById('formuModificaProyecto').reset();
}

function nuevaTarea() {
    ocultarFormularios();
    document.getElementById('divFormNuevaTarea').style.display = 'block';
    document.getElementById('formuNuevaTarea').reset();
}
function modificaTarea() {
    ocultarFormularios();
    document.getElementById('divFormModificaTarea').style.display = 'block';
    document.getElementById('formuModificaTarea').reset();
} 

function nuevoAnalista() {
    ocultarFormularios();
    document.getElementById('divFormNuevoAnalista').style.display = 'block';
    document.getElementById('formuNuevoAnalista').reset();
}

// EXPRESIONES REGULARES Y FUNCIONES *******************************************************************************

var oExRegTelefono = /^([9|6]{1})[0-9]{8}/;  // Teñefonos
var oExRegNombre = /^[a-záéíóúA-ZÁÉÍÓÚ]{3}([a-záéíóúA-ZÁÉÍÓÚ\s]){0,30}$/; //Nombres (nombre mas corto permitido 3 caracteres
var oExRegApellido = /^[a-záéíóúA-ZÁÉÍÓÚ]{4}([a-záéíóúA-ZÁÉÍÓÚ\s]){4,30}$/; //Apellidos
var oExRegDireccion = /^([a-záéíóúA-ZÁÉÍÓÚ]{1})([a-záéíóúA-ZÁÉÍÓÚ\s\d\.\,\:\º\ª\-]{0,39})$/; //Direccion
var oExRegDni = /^[0-9]{8}[A-Z]{1}$/;
var oExRegFechas = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; //Fechas: 2013-12-14 o 2013/12/14 o 2013.12.14
var oExRegPrecio = /^([0-9]{1,10}[\,\.][0-9]{1,2})$/;  //Precio con dos decimales obligatorios.
var oExRegAsunto = /^[a-záéíóúA-ZÁÉÍÓÚ\s]{1,60}$/;  // Asunto
var oExRegNombreProyecto = /^[a-záéíóúA-ZÁÉÍÓÚ\s]{1,20}$/;  // Nombre proyecto

function validaNombre(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegNombre.test(cadena);
    }
    return resultado;
}

function validaNombreProyecto(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegNombreProyecto.test(cadena);
    }
    return resultado;
}

function validaTelefono(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegTelefono.test(cadena);
    }
    return resultado;
}

function validaApellido(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegApellido.test(cadena);
    }
    return resultado;
}

function validaDireccion(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegDireccion.test(cadena);
    }
    return resultado;
}

function validaDni(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegDni.test(cadena);
    }
    return resultado;
}

function validaFechas(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegFechas.test(cadena);
    }
    return resultado;
}

function validaPrecio(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegPrecio.test(cadena);
    }
    return resultado;
}

function validaAsunto(cadena){
    var resultado = false;
    if(cadena != ""){
        resultado = oExRegAsunto.test(cadena);
    }
    return resultado;
}


// *******************************************************************************************************************



// NUEVO ADMINISTRADOR ********************************************
// ****************************************************************

document.querySelector('#guardar_NueAdm').addEventListener('click', validaFormNuevoAdmin, false);

function validaFormNuevoAdmin(oEvento){
    var oEvNuevoAdmin = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var nombre = document.getElementById('nombreAdmin_NueAdm').value.trim();
    document.getElementById('nombreAdmin_NueAdm').value = nombre;

   if(validaNombre(nombre) == false){

       if(bValido == true){
           bValido = false;
           //Este campo obtiene el foco
           document.getElementById('formuNuevoAdmin').nombreAdmin.focus();
       }
       sErrores += "\nNOMBRE del Administrador incorrecto (formato: Máx 30 caracteres";

       //Marcar error
       document.getElementById('formuNuevoAdmin').nombreAdmin.className = "form-control input-md error";

   }else {
       //Desmarcar error
      document.getElementById('formuNuevoAdmin').nombreAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
   }



    var apellido = document.getElementById('apellidoAdmin_NueAdm').value.trim();
    document.getElementById('apellidoAdmin_NueAdm').value = apellido;


    if(validaApellido(apellido) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').apellidoAdmin.focus();
        }
        sErrores += "\nAPELLIDO del Administrador incorrecto (formato: Máx 30 caracteres";

        //Marcar error
        document.getElementById('formuNuevoAdmin').apellidoAdmin.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').apellidoAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var dni = document.getElementById('dniAdmin_NueAdm').value.trim();
    document.getElementById('dniAdmin_NueAdm').value = dni;

    if(validaDni(dni) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').dniAdmin.focus();
        }
        sErrores += "\nDNI del Administrador incorrecto (formato: 8 digitos más letra mayuscula";

        //Marcar error
        document.getElementById('formuNuevoAdmin').dniAdmin.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').dniAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var tlf = document.getElementById('telefonoAdmin_NueAdm').value.trim();
    document.getElementById('telefonoAdmin_NueAdm').value = tlf;

    if(validaTelefono(tlf) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').telefonoAdmin.focus();
        }
        sErrores += "\nTELEFONO del Administrador incorrecto (formato: 9 digitos comenzando en 6 o 9";

        //Marcar error
        document.getElementById('formuNuevoAdmin').telefonoAdmin.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').telefonoAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById('direccionAdmin_NueAdm').value.trim();
    document.getElementById('direccionAdmin_NueAdm').value = direccion;

    if(validaDireccion(direccion) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').direccionAdmin.focus();
        }
        sErrores += "\nTELEFONO del Administrador incorrecto (formato: 9 digitos comenzando en 6 o 9";

        //Marcar error
        document.getElementById('formuNuevoAdmin').direccionAdmin.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').direccionAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false){
        //Cancelar envio del formulario
        oEvNuevoAdmin.preventDefault();
        //Mostrar errores
        alert(sErrores);
    }else{
        //Aqui estan los datos correctos, los guardamos
        var s = "Guardado";

        var codAdmin = oConsultoria.administradores.length + 1;

        var oAdministrador = new Trabajador(nombre, dni, apellido, tlf, direccion, codAdmin);

        oConsultoria.añadeTrabajador(oAdministrador);

         alert(s);
    }


}

