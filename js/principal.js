
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
    document.getElementById('divFormNuevoAdministrador').style.display = 'block';
    document.getElementById('formuNuevoProyecto').reset();
}