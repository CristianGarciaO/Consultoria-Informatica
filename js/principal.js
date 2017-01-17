
var oConsultoria = new Consultoria();


//Cargar Datos Prueba

oConsultoria.anadeAdministrador(new Administrador('Pedro','12121212E','Gonzalez Marin',653923909,'Calle Perico',1));
oConsultoria.anadeAdministrador(new Administrador('Juan','22334455G','Rosa Moreno',677331909,'Avda del Kiko',2));

oConsultoria.anadeCliente(new Cliente('Manolo', '11032393X', 'Cruz de la vega', 'Callejon del 7', 943382941, []));
oConsultoria.anadeCliente(new Cliente('Pepe', '44110022F', 'de Miguel', 'Calle Cuesta', 989556443, []));

oConsultoria.anadeIncidencia(new Incidencia(1,3,'Algoritmo erroneo', 'Pues eso, mal algoritmo', 2));

oConsultoria.anadeContrato(new Contrato('Panaderia Manolo', 5630.50, 2016-9-25, 2016-11-5,'11032393X'));


// LISTA DE EVENTOS

// Eventos de Capas

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
//Eventos Combos

document.getElementById('selectAdmin_ModAdm').addEventListener('change', muestraDatosDeEsteAdmin, false);



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

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.
    var oFormu = document.getElementById('formuNuevoCliente').querySelectorAll('input');
    for(var i=0; i<oFormu.length; i++){
        if(oFormu[i].classList.contains('error')){
            oFormu[i].classList.remove('error');
        }
    }
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

    //Cargar el combo
    cargaComboAdministradores('#administradores_NueInc');

}

function modificaIncidencia() {
    ocultarFormularios();
    document.getElementById('divFormModificaIncidencia').style.display = 'block';
    document.getElementById('formuModificaIncidencia').reset();

    //Cargar las incidencias existentes
    cargaComboIncidencias();
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

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.
    var oFormu = document.getElementById('formuNuevoAdmin').querySelectorAll('input');
    for(var i=0; i<oFormu.length; i++){
        if(oFormu[i].classList.contains('error')){
            oFormu[i].classList.remove('error');
        }
    }
}

function modificarAdministrador() {
    ocultarFormularios();
    document.getElementById('divFormModificarAdministrador').style.display = 'block';
    document.getElementById('formuModificarAdmin').reset();

    var oFormu = document.getElementById('formuModificarAdmin').querySelectorAll('input');
    for(var i=0; i<oFormu.length; i++){
        oFormu[i].setAttribute('readonly', 'readonly');
    }

    //Cargar los administradores existentes
    cargaComboAdministradores('#selectAdmin_ModAdm');
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
var oExRegNombre = /^[a-záéíóúñA-ZÑÁÉÍÓÚ]{3}([a-záéíóúñA-ZÑÁÉÍÓÚ\s]){0,30}$/; //Nombres (nombre mas corto permitido 3 caracteres
var oExRegApellido = /^[a-záéíóúñA-ZÁÉÍÓÚ]{4}([a-záéíóúñA-ZÑÁÉÍÓÚ\s]){0,30}/; //Apellidos
var oExRegDireccion = /^([a-záéíóúñA-ZÑÁÉÍÓÚ]{1})([a-záéíóúñA-ZÑÁÉÍÓÚ\s\d\.\,\º\ª\-\/]{0,39})$/; //Direccion
var oExRegDni = /^[0-9]{8}[A-Z]{1}$/;
var oExRegFechas = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; //Fechas: 2013-12-14 o 2013/12/14 o 2013.12.14
var oExRegPrecio = /^([0-9]{1,10}[\,\.][0-9]{1,2})$/;  //Precio con dos decimales obligatorios.
var oExRegAsunto = /^[a-záéíóúñA-ZÑÁÉÍÓÚ\s]{1,60}$/;  // Asunto
var oExRegNombreProyecto = /^[a-záéíóúñA-ZÑÁÉÍÓÚ\s]{1,20}$/;  // Nombre proyecto

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

// VALIDACIONES ******************************************************************************************************

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
       sErrores += "\nNOMBRE del Administrador incorrecto (formato: Máx 30 caracteres)";

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
        sErrores += "\nAPELLIDO del Administrador incorrecto (formato: Máx 30 caracteres)";

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
        sErrores += "\nDNI del Administrador incorrecto (formato: 8 digitos más letra mayuscula)";

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
        sErrores += "\nTELEFONO del Administrador incorrecto (formato: 9 digitos comenzando en 6 o 9)";

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
        sErrores += "\nDIRECCION del Administrador incorrecto (formato: 40 caracteres maximo)";

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
        //Comprobar si existe el trabajador

        var sMensaje = "";

        if(!oConsultoria.existeTrabajador(dni)){
            var codAdmin = oConsultoria.administradores.length + 1;
            var oAdministrador = new Administrador(nombre, dni, apellido, tlf, direccion, codAdmin);
            sMensaje = oConsultoria.anadeAdministrador(oAdministrador);
        }else{
            sMensaje = "Imposible añadir. El trabajador que intenta añadir al sistema ya estaba registrado";
        }

        alert(sMensaje);
    }


}


// MODIFICAR ADMINISTRADOR ********************************************
// ****************************************************************

document.querySelector('#guardar_ModAdm').addEventListener('click', validaFormModAdmin, false);

function validaFormModAdmin(oEvento){
    var oEvModAdmin = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var nombre = document.getElementById('nombreAdmin_ModAdm').value.trim();
    document.getElementById('nombreAdmin_ModAdm').value = nombre;

    if(validaNombre(nombre) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarAdmin').nombreAdmin.focus();
        }
        sErrores += "\nNOMBRE del Administrador incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuModificarAdmin').nombreAdmin.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuModificarAdmin').nombreAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var apellido = document.getElementById('apellidoAdmin_ModAdm').value.trim();
    document.getElementById('apellidoAdmin_ModAdm').value = apellido;


    if(validaApellido(apellido) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarAdmin').apellidoAdmin.focus();
        }
        sErrores += "\nAPELLIDO del Administrador incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuModificarAdmin').apellidoAdmin.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuModificarAdmin').apellidoAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    //DNI no hace falta validarlo. No se permite modificar el existente.

    var tlf = document.getElementById('telefonoAdmin_ModAdm').value.trim();
    document.getElementById('telefonoAdmin_ModAdm').value = tlf;

    if(validaTelefono(tlf) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarAdmin').telefonoAdmin.focus();
        }
        sErrores += "\nTELEFONO del Administrador incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById('formuModificarAdmin').telefonoAdmin.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuModificarAdmin').telefonoAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById('direccionAdmin_ModAdm').value.trim();
    document.getElementById('direccionAdmin_ModAdm').value = direccion;

    if(validaDireccion(direccion) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarAdmin').direccionAdmin.focus();
        }
        sErrores += "\nDIRECCION del Administrador incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById('formuModificarAdmin').direccionAdmin.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuModificarAdmin').direccionAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false){
        //Cancelar envio del formulario
        oEvModAdmin.preventDefault();
        //Mostrar errores
        alert(sErrores);
    }else{
        //Aqui estan los datos correctos, los guardamos
        //El trabajador ya existe en el sistema, no hace falta comprobarlo.
        //Coger el trabajador existente y cambiar los valores de sus atributos por los actuales.
        var select = document.querySelector('#selectAdmin_ModAdm');
        var codAdminSeleccionado = select.value;
        var oAdmin = oConsultoria.dameAdministrador(codAdminSeleccionado);

        oAdmin.nombreTrabajador = nombre;
        oAdmin.apellidosTrabajador = apellido;
        oAdmin.telefonoTrabajador = tlf;
        oAdmin.direccionTrabajador = direccion;

        var sMensaje;
        sMensaje = oConsultoria.anadeAdministrador(oAdmin);
        alert(sMensaje);
    }


}


// NUEVO CLIENTE **************************************************
// ****************************************************************

document.querySelector('#guardar_NueCli').addEventListener('click', validaFormNuevoCliente, false);

function validaFormNuevoCliente(oEvento){
    var oEvNuevoCliente = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var nombre = document.getElementById('nombreCliente_NueCli').value.trim();
    document.getElementById('nombreCliente_NueCli').value = nombre;

    if(validaNombre(nombre) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').nombreCliente.focus();
        }
        sErrores += "\nNOMBRE del Cliente incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuNuevoCliente').nombreCliente.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').nombreCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }



    var apellido = document.getElementById('apellidoCliente_NueCli').value.trim();
    document.getElementById('apellidoCliente_NueCli').value = apellido;


    if(validaApellido(apellido) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').apellidoCliente.focus();
        }
        sErrores += "\nAPELLIDO del Cliente incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuNuevoCliente').apellidoCliente.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').apellidoCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var dni = document.getElementById('dniCliente_NueCli').value.trim();
    document.getElementById('dniCliente_NueCli').value = dni;

    if(validaDni(dni) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').dniCliente.focus();
        }
        sErrores += "\nDNI del Cliente incorrecto (formato: 8 digitos más letra mayuscula)";

        //Marcar error
        document.getElementById('formuNuevoCliente').dniCliente.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').dniCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var tlf = document.getElementById('telefonoCliente_NueCli').value.trim();
    document.getElementById('telefonoCliente_NueCli').value = tlf;

    if(validaTelefono(tlf) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').telefonoCliente.focus();
        }
        sErrores += "\nTELEFONO del Cliente incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById('formuNuevoCliente').telefonoCliente.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').telefonoCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById('direccionCliente_NueCli').value.trim();
    document.getElementById('direccionCliente_NueCli').value = direccion;

    if(validaDireccion(direccion) == false){

        if(bValido == true){
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').direccionCliente.focus();
        }
        sErrores += "\nDIRECCION del Cliente incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById('formuNuevoCliente').direccionCliente.className = "form-control input-md error";

    }else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').direccionCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false){
        //Cancelar envio del formulario
        oEvNuevoCliente.preventDefault();
        //Mostrar errores
        alert(sErrores);
    }else{
        //Aqui estan los datos correctos, los guardamos
        //Comprobar si existe el cliente

        var sMensaje = "";

        if(!oConsultoria.existeCliente(dni)){
            var contratos = [];  //Array de contratos que pueda tener este cliente
            var oCliente = new Cliente(nombre, dni, apellido, direccion, tlf, contratos);
            sMensaje = oConsultoria.anadeCliente(oCliente);
        }else{
            sMensaje = "Imposible añadir. El Cliente que intenta añadir al sistema ya estaba registrado";
        }

        alert(sMensaje);
    }


}


// *******************************************************************************************************************
// Funciones Varias



//Cargar combo de Administradores en funcion del id
function cargaComboAdministradores(id){

    var miCombo = document.querySelector(id);
    var oOption = document.createElement('option');
    oOption.text = 'Seleccione un Admin';
    miCombo.add(oOption);
    for(var i=0; i<oConsultoria.administradores.length; i++){
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.administradores[i].nombreTrabajador + ' - ' + oConsultoria.administradores[i].codigoAdmin;
        oOption.value = oConsultoria.administradores[i].codigoAdmin;
        miCombo.add(oOption);
    }
}

//Completa los campos de texto
function muestraDatosDeEsteAdmin(){

    //Obtener valor del option seleccionado
    var select = document.querySelector('#selectAdmin_ModAdm');

    if(select.selectedIndex != 0){

        var codAdmin = select.value;
        var oAdmin = oConsultoria.dameAdministrador(codAdmin);

        //Extraer los valores de sus atributos y colocarlos en los campos de texto.

        var nomAdmin = document.querySelector('#nombreAdmin_ModAdm');
        nomAdmin.value = oAdmin.nombreTrabajador;
        nomAdmin.removeAttribute('readonly');

        var apeAdmin = document.querySelector('#apellidoAdmin_ModAdm');
        apeAdmin.value = oAdmin.apellidosTrabajador;
        apeAdmin.removeAttribute('readonly');

        //Este campo es unico(DNI), no debe poderse modificar. Dejamos el atributo readonly
        var dniAdmin = document.querySelector('#dniAdmin_ModAdm');
        dniAdmin.value = oAdmin.dniTrabajador;

        var tlfAdmin = document.querySelector('#telefonoAdmin_ModAdm');
        tlfAdmin.value = oAdmin.telefonoTrabajador;
        tlfAdmin.removeAttribute('readonly');

        var dirAdmin = document.querySelector('#direccionAdmin_ModAdm');
        dirAdmin.value = oAdmin.direccionTrabajador;
        dirAdmin.removeAttribute('readonly');

    }
}

//Cargar combo de Incidencias
function cargaComboIncidencias(){

    var miCombo = document.querySelector('#incidencia_ModInc');
    var oOption = document.createElement('option');
    oOption.text = 'Seleccione una Incidencia';
    miCombo.add(oOption);
    for(var i=0; i<oConsultoria.incidencias.length; i++){
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.incidencias[i].numeroIncidencia + ' - ' + oConsultoria.incidencias[i].asuntoIncidencia;
        oOption.value = oConsultoria.administradores[i].codigoAdmin;
        miCombo.add(oOption);
    }
}

