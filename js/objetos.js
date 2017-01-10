/**
 * Created by Alex on 27/12/2016.
 *
 * OBJETO PRINCIPAL:
 *  CONSULTORIA
 *
    OBJETOS ALEX:
        Contrato
        Cliente
        Publicidad
        Administrador
        Incidencias

 */


//OBJETO PRINCIPAL -- CONSULTORIA

//Se trata de mantener la información recogida en este objeto, de manera que se pueda acceder
//desde el a todos los objetos (como en la biblioteca)

function Consultoria(){

    //Cristian
    this.trabajadores = [ ];
    this.programadores = [ ];
    this.analistas = [ ];
    this.proyectos = [ ];
    this.tareas = [ ];

    //Alex
    this.administradores = [ ];
    this.incidencias = [ ];
    this.clientes = [ ];
    this.contratos = [ ];
    this.publicidades = [ ];

}

//************************************************************************************************************
//OBJETOS ALEX ***********************************************************************************************
//************************************************************************************************************

// CONTRATO

function Contrato(nombreProyecto, precio, fechaInicio, fechaFin, dniCliente) {
    this.nombreProyecto = nombreProyecto;
    this.precio = precio;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.dniCliente = dniCliente;        //Para relacionar cada contrato al cliente que le corresponde

}


//---------------------------------------------------------

// CLIENTE

function Cliente(nombreCliente, dniCliente, apellidosCliente, direccionCliente, telefonoCliente, contratosCliente) {
    this.nombreCliente = nombreCliente;
    this.dniCliente = dniCliente;
    this.apellidosCliente = apellidosCliente;
    this.direccionCliente = direccionCliente;
    this.telefonoCliente = telefonoCliente;
    this.contratosCliente = contratosCliente;    //Lista de contratos que puede tener el cliente
                                                 // (nombres de los contratos,que son los nombres de los proyectos asociados);
}


//---------------------------------------------------------

// PUBLICIDAD

function Publicidad(codigoPublicidad, tipoPublicidad, descripcionPublicidad, codigoAdministrador, dniCliente) {
    this.codigoPublicidad = codigoPublicidad;
    this.tipo = tipoPublicidad;
    this.descripcionPublicidad = descripcionPublicidad;
    this.codigoAdministrador = codigoAdministrador;          //Codigo del administrador que ha realizado la publicidad
    this.dniCliente = dniCliente;                            //Dni del cliente para el que se ha realizado esta publicidad
}


//---------------------------------------------------------
// ADMINISTRADOR

function Administrador(codigoAdmin) {
    Trabajador.call(this, nombreTrabajador, dniTrabajador, apellidosTrabajador, telefonoTrabajador, direccionTrabajador);
    this.codigoAdmin = codigoAdmin;       //Codigo de 2 cifras para distinguir a los trabajadores administradores.

}

// Herencia Trabajador-Administrador

Administrador.prototype = Object.create(Trabajador.prototype);
Administrador.prototype.constructor = Administrador;


//---------------------------------------------------------

// INCIDENCIA

function Incidencia(codigoIncidencia, prioridadIncidencia, asuntoIncidencia, descripcionIncidencia, codAdmin){
    this.codigoIncidencia = codigoIncidencia;
    this.prioridadIncidencia = prioridadIncidencia;
    this.asuntoIncidencia = asuntoIncidencia;
    this.descripcionIncidencia = descripcionIncidencia;
    this.codAdmin = codAdmin;                //Codigo del administrador que la abre;
}





//************************************************************************************************************
//OBJETOS CRISTIAN *******************************************************************************************
//************************************************************************************************************