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


/**** METODOS PARA ORDENAR ARRAYS ****/
/*
 atributo = nombre del atributo o propiedad entre ' '
 tipoOrdenacion = Ascendente (1) o Descendente (-1)
 ingnoreCase = Si se desea ingnorar mayusculas o no (pasar true o false)
*/

/*! Ordenar elementos del ARRAY por una propiedad numérica. */
Array.prototype.ordenaArrayInteger = function(atributo,tipoOrdenacion){
    // Primero se verifica que la propiedad tipoOrdenacion tenga un dato válido.
    if (tipoOrdenacion!=-1 && tipoOrdenacion!=1) tipoOrdenacion=1;
    this.sort(function(a,b){
        // La función de ordenamiento devuelve la comparación entre atributo de a y b.
        // El resultado será afectado por tipoOrdenacion.
        return (a[atributo]-b[atributo])*tipoOrdenacion;
    })
};
/*! Ordenar elementos del ARRAY por una propiedad de tipo String */
Array.prototype.ordenaArrayString=function(atributo,tipoOrdenacion,ignoreCase){
    if (tipoOrdenacion!=-1 && tipoOrdenacion!=1) tipoOrdenacion=1;
    this.sort(function(a,b){
        var stringA=a[atributo],stringB=b[atributo];
        // Si un valor es null o undefined, se convierte a cadena vacía.
        if (stringA==null) stringA = '';
        if (stringB==null) stringB = '';
        // Si ignoreCase es true, se convierten ambas variables a minúsculas.
        if (ignoreCase==true){stringA=stringA.toLowerCase();stringB=stringB.toLowerCase()}
        var res = 0;
        if (stringA<stringB) res = -1;
        else if (stringA>stringB) res = 1;
        return res*tipoOrdenacion;
    })
};
/*! Ordenar elementos de ARRAY  */
Array.prototype.ordenaArrayDate=function(atributo,tipoOrdenacion){
    if (tipoOrdenacion!=-1 && tipoOrdenacion!=1) tipoOrdenacion=1;
    this.sort(function(a,b){
        var dateA=new Date(a[atributo]),dateB=new Date(b[atributo]);
        return (dateA-dateB)*tipoOrdenacion;
    })
};



/**** COMPROBAR EXISTENCIA TRABAJADOR ****/

Consultoria.prototype.existeTrabajador = function(iDni){
    /*Recibe un DNI y devuelve TRUE si existe o FALSE si no existe.*/
    var bEncontrado = false;

    for(var i=0; i< this.trabajadores.length && bEncontrado == false; i++){
        if(this.trabajadores[i].dniTrabajador == iDni){
            bEncontrado = true;
        }
    }
    return bEncontrado;
};

/**** COMPROBAR EXISTENCIA CLIENTE ****/

Consultoria.prototype.existeCliente = function(iDni){
    /*Recibe un DNI y devuelve TRUE si existe o FALSE si no existe.*/
    var bEncontrado = false;

    for(var i=0; i< this.clientes && bEncontrado == false; i++){
        if(this.clientes[i].dniCliente == iDni){
            bEncontrado = true;
        }
    }
    return bEncontrado;
};



//************************************************************************************************************
//OBJETOS ALEX ***********************************************************************************************
//************************************************************************************************************

// CONTRATO

function Contrato(sNombreProyecto, iPrecio, fechaInicio, fechaFin, iDniCliente) {
    this.nombreProyecto = sNombreProyecto;
    this.precio = iPrecio;
    this.fechaInicio = new Date(fechaInicio).toLocaleDateString();
    this.fechaFin = new Date(fechaFin).toLocaleDateString();
    this.dniCliente = iDniCliente;        //Para relacionar cada contrato al cliente que le corresponde

}


// Metodos Contrato
// ****************

Consultoria.prototype.anadeContrato= function(oContrato){
    this.contratos.push(oContrato);
};

Consultoria.prototype.contratosDeEsteCliente = function(iDniCliente, tipoOrdenacion){
    /*Devuelve listado de los contratos del cliente pasado por parametro, con la ordenacion que se le indique*/

    var listaContratos = [];
    for(var i=0; i<this.contratos.length; i++){
        if(this.contratos[i].codAdmin == iDniCliente){
            listaContratos.push(this.contratos[i]);
        }
    }
    listaContratos.ordenaArrayString('nombreProyecto', tipoOrdenacion, true);
    return listaContratos;
};


//---------------------------------------------------------

// CLIENTE

function Cliente(sNombreCliente, iDniCliente, sApellidosCliente, sDireccionCliente, iTelefonoCliente, aContratosCliente) {
    this.nombreCliente = sNombreCliente;
    this.dniCliente = iDniCliente;
    this.apellidosCliente = sApellidosCliente;
    this.direccionCliente = sDireccionCliente;
    this.telefonoCliente = iTelefonoCliente;
    this.contratosCliente = aContratosCliente;    //Lista de contratos que puede tener el cliente
                                                 // (nombres de los contratos,que son los nombres de los proyectos asociados);
}

// Metodos Cliente
// ***************

Consultoria.prototype.anadeCliente= function(oCliente){
    this.clientes.push(oCliente);
    var sMensaje = "Guardado";
    return sMensaje;
};




//---------------------------------------------------------

// PUBLICIDAD

function Publicidad(codigoPublicidad, tipoPublicidad, descripcionPublicidad, codigoAdministrador, dniCliente) {
    this.codigoPublicidad = codigoPublicidad;
    this.tipo = tipoPublicidad;
    this.descripcionPublicidad = descripcionPublicidad;
    this.codigoAdministrador = codigoAdministrador;          //Codigo del administrador que ha realizado la publicidad
    this.dniCliente = dniCliente;                            //Dni del cliente para el que se ha realizado esta publicidad
}


// Metodos Publicidad
// ******************

Consultoria.prototype.anadePublicidad = function(oPublicidad){
    this.publicidades.push(oPublicidad);
};

//---------------------------------------------------------
// ADMINISTRADOR

function Administrador(nombreTrabajador, dniTrabajador, apellidosTrabajador, telefonoTrabajador, direccionTrabajador, codigoAdmin) {
    Trabajador.call(this, nombreTrabajador, dniTrabajador, apellidosTrabajador, telefonoTrabajador, direccionTrabajador);
    this.codigoAdmin = codigoAdmin;       //Codigo de 2 cifras para distinguir a los trabajadores administradores.

}

// Herencia Trabajador-Administrador

Administrador.prototype = Object.create(Trabajador.prototype);
Administrador.prototype.constructor = Administrador;


// Metodos Administrador
// *********************

Consultoria.prototype.anadeAdministrador = function(oAdministrador){
    this.administradores.push(oAdministrador);
    this.trabajadores.push(new Trabajador(oAdministrador.nombreTrabajador, oAdministrador.dniTrabajador,
                    oAdministrador.apellidosTrabajador, oAdministrador.telefonoTrabajador,
                    oAdministrador.direccionTrabajador));
    var sMensaje = "Guardado";
    return sMensaje;
};



//---------------------------------------------------------

// INCIDENCIA

function Incidencia(iNumeroIncidencia, sPrioridadIncidencia, sAsuntoIncidencia, sDescripcionIncidencia, iCodAdmin){
    this.numeroIncidencia = iNumeroIncidencia;
    this.prioridadIncidencia = sPrioridadIncidencia;
    this.asuntoIncidencia = sAsuntoIncidencia;
    this.descripcionIncidencia = sDescripcionIncidencia;
    this.codAdmin = iCodAdmin;                //Codigo del administrador que la abre;
}


// Metodos Incidencia
// ******************

Consultoria.prototype.anadeIncidencia = function(oIncidencia){
    this.incidencias.push(oIncidencia);
};



Consultoria.prototype.incidenciasDeEsteAdmin = function(iCodAdmin, tipoOrdenacion){
    /*Devuelve listado de las incidencias ordenado por numero de incidencia (segundo paramentro)
    del administrador que se le pasa como primer parametro*/

    var listaIncidencias = [];
    for(var i=0; i<this.incidencias.length; i++){
        if(this.incidencias[i].codAdmin == iCodAdmin){
            listaIncidencias.push(this.incidencias[i]);
        }
    }
    listaIncidencias.ordenaArrayInteger('numeroIncidencia', tipoOrdenacion);
    return listaIncidencias;
};



//---------------------------------------------------------


//************************************************************************************************************
//OBJETOS CRISTIAN *******************************************************************************************
//************************************************************************************************************

// TRABAJADOR

function Trabajador(sNombreTrabajador, iDniTrabajador, sApellidosTrabajador, iTelefonoTrabajador,sDireccionTrabajador){
    this.nombreTrabajador = sNombreTrabajador;
    this.dniTrabajador = iDniTrabajador;
    this.apellidosTrabajador = sApellidosTrabajador;
    this.telefonoTrabajador = iTelefonoTrabajador;
    this.direccionTrabajador = sDireccionTrabajador;
}

// Metodos Trabajador
// ******************

Consultoria.prototype.anadeTrabajador = function(oTrabajador){
    this.trabajadores.push(oTrabajador);
};

Trabajador.prototype.InnerHTML = function(){

    

};


//---------------------------------------------------------

// PROYECTOS

function Proyecto(sNombreProyecto, aAnalistasProyecto, aTareasProyecto){
    this.nombreProyecto = sNombreProyecto;
    this.analistasProyecto = aAnalistasProyecto;
    this.tareasProyecto = aTareasProyecto;
}

Consultoria.prototype.añadeProyecto = function(oProyecto){
    this.proyectos.push(oProyecto);
};

// TAREAS

function Tarea(sNombreTarea, dFechaIni, oProyecto,dFechaFin,bEstado){
    this.nombreProyecto = oProyecto;
    this.fechaInicio = dFechaIni;
    this.fechaFin = dFechaFin;
    this.nombreTarea=sNombreTarea;
    this.estado=bEstado;
}

Consultoria.prototype.añadeTarea = function(oTarea){
    this.tareas.push(oProyecto);
};


//ANALISTA

function Analista(idAnalista,oProgramadores){
    this.id = idAnalista;
    this.programadores = oProgramadores;

}
Consultoria.prototype.añadeAnalista = function(oAnalista){
    this.analistas.push(oAnalista);
};
// Herencia Trabajador-ANALISTA

Analista.prototype = Object.create(Trabajador.prototype);
Analista.prototype.constructor = Analista;





//PROGRAMADOR

function Programador(idProgramador,oAnalista){
    this.id = idProgramador;
    this.analista = oAnalista;

}
Consultoria.prototype.añadeProgramador = function(oProgramador){
    this.programadores.push(oProgramador);
};
// Herencia Trabajador-PROGRAMADOR

Programador.prototype = Object.create(Trabajador.prototype);
Programador.prototype.constructor = Programador;
