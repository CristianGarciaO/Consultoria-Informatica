//OBJETO PRINCIPAL -- CONSULTORIA

//Se trata de mantener la información recogida en este objeto, de manera que se pueda acceder
//desde el a todos los objetos (como en la biblioteca)

function Consultoria() {

    //Cristian
    this.trabajadores = [];
    this.programadores = [];
    this.analistas = [];
    this.proyectos = [];
    this.tareas = [];

    //Alex
    this.administradores = [];
    this.incidencias = [];
    this.clientes = [];
    this.contratos = [];
    this.publicidades = [];

}


/**** METODOS PARA ORDENAR ARRAYS ****/
/*
 atributo = nombre del atributo o propiedad entre ' '
 tipoOrdenacion = Ascendente (1) o Descendente (-1)
 ingnoreCase = Si se desea ingnorar mayusculas o no (pasar true o false)
 */

/*! Ordenar elementos del ARRAY por una propiedad numérica. */
Array.prototype.ordenaArrayInteger = function (atributo, tipoOrdenacion) {
    // Primero se verifica que la propiedad tipoOrdenacion tenga un dato válido.
    if (tipoOrdenacion != -1 && tipoOrdenacion != 1) tipoOrdenacion = 1;
    this.sort(function (a, b) {
        // La función de ordenamiento devuelve la comparación entre atributo de a y b.
        // El resultado será afectado por tipoOrdenacion.
        return (a[atributo] - b[atributo]) * tipoOrdenacion;
    })
};
/*! Ordenar elementos del ARRAY por una propiedad de tipo String */
Array.prototype.ordenaArrayString = function (atributo, tipoOrdenacion, ignoreCase) {
    if (tipoOrdenacion != -1 && tipoOrdenacion != 1) tipoOrdenacion = 1;
    this.sort(function (a, b) {
        var stringA = a[atributo], stringB = b[atributo];
        // Si un valor es null o undefined, se convierte a cadena vacía.
        if (stringA == null) stringA = '';
        if (stringB == null) stringB = '';
        // Si ignoreCase es true, se convierten ambas variables a minúsculas.
        if (ignoreCase == true) {
            stringA = stringA.toLowerCase();
            stringB = stringB.toLowerCase()
        }
        var res = 0;
        if (stringA < stringB) res = -1;
        else if (stringA > stringB) res = 1;
        return res * tipoOrdenacion;
    })
};
/*! Ordenar elementos de ARRAY  */
Array.prototype.ordenaArrayDate = function (atributo, tipoOrdenacion) {
    if (tipoOrdenacion != -1 && tipoOrdenacion != 1) tipoOrdenacion = 1;
    this.sort(function (a, b) {
        var dateA = new Date(a[atributo]), dateB = new Date(b[atributo]);
        return (dateA - dateB) * tipoOrdenacion;
    })
};


/**** COMPROBAR EXISTENCIA TRABAJADOR ****/

Consultoria.prototype.existeTrabajador = function (sDni) {
    /*Recibe un DNI y devuelve TRUE si existe o FALSE si no existe.*/
    var bEncontrado = false;

    for (var i = 0; i < this.trabajadores.length && bEncontrado == false; i++) {
        if (this.trabajadores[i].dniTrabajador == sDni) {
            bEncontrado = true;
        }
    }
    return bEncontrado;
};

/**** COMPROBAR EXISTENCIA CLIENTE ****/

Consultoria.prototype.existeCliente = function (sDni) {
    /*Recibe un DNI y devuelve TRUE si existe o FALSE si no existe.*/
    var bEncontrado = false;

    for (var i = 0; i < this.clientes && bEncontrado == false; i++) {
        if (this.clientes[i].dniCliente == sDni) {
            bEncontrado = true;
        }
    }
    return bEncontrado;
};

/***** COMPROBAR EXISTENCIA DE CONTRATO *****/

Consultoria.prototype.existeContrato = function (nombreProycto) {
    /*Recibe un nombre de proyecto y devuelve TRUE si existe o FALSE si no existe.*/
    var bEnc = false;

    for (var i = 0; i < this.contratos.length && bEnc == false; i++) {
        if (this.contratos[i].nombreProyecto == nombreProycto) {
            bEnc = true;
        }
    }
    return bEnc;
};


//************************************************************************************************************
//OBJETOS ALEX ***********************************************************************************************
//************************************************************************************************************


// TRABAJADOR

function Trabajador(sNombreTrabajador, iDniTrabajador, sApellidosTrabajador, iTelefonoTrabajador, sDireccionTrabajador) {
    this.nombreTrabajador = sNombreTrabajador;
    this.dniTrabajador = iDniTrabajador;
    this.apellidosTrabajador = sApellidosTrabajador;
    this.telefonoTrabajador = iTelefonoTrabajador;
    this.direccionTrabajador = sDireccionTrabajador;
}

// Metodos Trabajador
// ******************

Consultoria.prototype.anadeTrabajador = function (oTrabajador) {
    this.trabajadores.push(oTrabajador);
};


//---------------------------------------------------------


// CONTRATO

function Contrato(sNombreProyecto, iPrecio, fechaInicio, fechaFin, sDniCliente) {
    this.nombreProyecto = sNombreProyecto;
    this.precio = iPrecio;
    this.fechaInicio = new Date(fechaInicio).toLocaleDateString();
    this.fechaFin = new Date(fechaFin).toLocaleDateString();
    this.dniCliente = sDniCliente;        //Para relacionar cada contrato al cliente que le corresponde

}


// Metodos Contrato
// ****************

Consultoria.prototype.anadeContrato = function (oContrato) {
    this.contratos.push(oContrato);
    var sMensaje = "Guardado";
    return sMensaje;
};

Consultoria.prototype.contratosDeEsteCliente = function (sDniCliente, tipoOrdenacion) {
    /*Devuelve listado de los contratos del cliente pasado por parametro, con la ordenacion que se le indique*/

    var listaContratos = [];
    for (var i = 0; i < this.contratos.length; i++) {
        if (this.contratos[i].codAdmin == sDniCliente) {
            listaContratos.push(this.contratos[i]);
        }
    }
    listaContratos.ordenaArrayString('nombreProyecto', tipoOrdenacion, true);
    return listaContratos;
};

Consultoria.prototype.dameContrato = function (nombreDelContrato) {
    var bEnc = false;
    var oContrato;
    var i = 0;
    while (i < this.contratos.length && bEnc == false) {
        if (this.contratos[i].nombreProyecto == nombreDelContrato) {
            oContrato = this.contratos[i];
            bEnc = true;
        }
        i++;
    }
    return oContrato;
};


//---------------------------------------------------------

// CLIENTE

function Cliente(sNombreCliente, sDniCliente, sApellidosCliente, sDireccionCliente, iTelefonoCliente, aContratosCliente) {
    this.nombreCliente = sNombreCliente;
    this.dniCliente = sDniCliente;
    this.apellidosCliente = sApellidosCliente;
    this.direccionCliente = sDireccionCliente;
    this.telefonoCliente = iTelefonoCliente;
    this.contratosCliente = aContratosCliente;    //Lista de contratos que puede tener el cliente
    // (nombres de los contratos,que son los nombres de los proyectos asociados);
}

// Metodos Cliente
// ***************

Consultoria.prototype.anadeCliente = function (oCliente) {
    this.clientes.push(oCliente);
    var sMensaje = "Guardado";
    return sMensaje;
};

Consultoria.prototype.dameCliente = function (dniCli) {
    var bEnc = false;
    var oCliente;
    var i = 0;
    while (i < this.clientes.length && bEnc == false) {
        if (this.clientes[i].dniCliente == dniCli) {
            oCliente = this.clientes[i];
            bEnc = true;
        }
        i++;
    }
    return oCliente;
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

Consultoria.prototype.anadePublicidad = function (oPublicidad) {
    this.publicidades.push(oPublicidad);
    var sMensaje = "Guardado";
    return sMensaje;
};


Consultoria.prototype.eliminaPublicidad = function (oPublicidad) {

    function eliminaEstaPubli(array, publi) {
        var i = array.indexOf(publi);

        if (i !== -1) {
            array.splice(i, 1);
        }
    }

    var array = this.publicidades;
    eliminaEstaPubli(array, oPublicidad);


    var sMensaje = "Eliminada";
    return sMensaje;
};


Consultoria.prototype.damePublicidad = function (codPubli) {
    alert(codPubli);
    var bEnc = false;
    var oPubli;
    var i = 0;

    for (var i = 0; i < this.publicidades.length && bEnc == false; i++) {
        alert(this.publicidades[i].codigoPublicidad);
        if (this.publicidades[i].codigoPublicidad == codPubli) {
            oPubli = this.publicidades[i];
            bEnc = true;
        }
    }
    return oPubli;
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

Consultoria.prototype.anadeAdministrador = function (oAdministrador) {

    this.administradores.push(oAdministrador);
    this.trabajadores.push(oAdministrador);
    var sMensaje = "Guardado";
    return sMensaje;

};

Consultoria.prototype.dameAdministrador = function (codigoAdmin) {
    var bEnc = false;
    var oAdmin;
    var i = 0;
    while (i < this.administradores.length && bEnc == false) {
        if (this.administradores[i].codigoAdmin == codigoAdmin) {
            oAdmin = this.administradores[i];
            bEnc = true;
        }
        i++;
    }
    return oAdmin;
};


//---------------------------------------------------------

// INCIDENCIA

function Incidencia(iNumeroIncidencia, sPrioridadIncidencia, sAsuntoIncidencia, sDescripcionIncidencia, iCodAdmin, sEstado) {
    this.numeroIncidencia = iNumeroIncidencia;
    this.prioridadIncidencia = sPrioridadIncidencia;
    this.asuntoIncidencia = sAsuntoIncidencia;
    this.descripcionIncidencia = sDescripcionIncidencia;
    this.codAdmin = iCodAdmin;                //Codigo del administrador que la abre;
    this.estadoIncidencia = sEstado;
}


// Metodos Incidencia
// ******************

Consultoria.prototype.anadeIncidencia = function (oIncidencia) {
    this.incidencias.push(oIncidencia);
    var sMensaje = "Guardado";
    return sMensaje;
};

Consultoria.prototype.dameIncidencia = function (codigoIncidencia) {
    var bEnc = false;
    var oIncidencia;
    var i = 0;
    while (i < this.incidencias.length && bEnc == false) {
        if (this.incidencias[i].numeroIncidencia == codigoIncidencia) {
            oIncidencia = this.incidencias[i];
            bEnc = true;
        }
        i++;
    }
    return oIncidencia;
};

Consultoria.prototype.incidenciasDeEsteAdmin = function (iCodAdmin, tipoOrdenacion) {
    /*Devuelve listado de las incidencias ordenado por numero de incidencia (segundo paramentro)
     del administrador que se le pasa como primer parametro*/

    var listaIncidencias = [];
    for (var i = 0; i < this.incidencias.length; i++) {
        if (this.incidencias[i].codAdmin == iCodAdmin) {
            listaIncidencias.push(this.incidencias[i]);
        }
    }
    listaIncidencias.ordenaArrayInteger('numeroIncidencia', tipoOrdenacion);
    return listaIncidencias;
};

Consultoria.prototype.listarIncidencias = function(filtro){

    var oInfo = new Array();
    var oCabecera = ["Nº Incidencia", "Prioridad", "Asunto", "Descripción", "Código Admin", "Estado"];

    if(filtro == "Todas"){

        for(var i=0;i<this.incidencias.length; i++){
            //Meter un array en otro para hacerlo bidimensional
            oInfo[i] = new Array();
            //Cargar los datos
            oInfo[i][0] = this.incidencias[i].numeroIncidencia;
            oInfo[i][1] = this.incidencias[i].prioridadIncidencia
            oInfo[i][2] = this.incidencias[i].asuntoIncidencia;
            oInfo[i][3] = this.incidencias[i].descripcionIncidencia;
            oInfo[i][4] = this.incidencias[i].codAdmin;
            oInfo[i][5] = this.incidencias[i].estadoIncidencia;
        }

    }else{ //Solo sin cerrar

        for(var j=0; j<this.incidencias.length; j++){
            if(this.incidencias[j].estadoIncidencia == "Abierta"){
                //Meter un array en otro para hacerlo bidimensional
                oInfo[j] = new Array();
                //Cargar los datos
                oInfo[j][0] = this.incidencias[j].numeroIncidencia;
                oInfo[j][1] = this.incidencias[j].prioridadIncidencia
                oInfo[j][2] = this.incidencias[j].asuntoIncidencia;
                oInfo[j][3] = this.incidencias[j].descripcionIncidencia;
                oInfo[j][4] = this.incidencias[j].codAdmin;
                oInfo[j][5] = this.incidencias[j].estadoIncidencia;
            }
        }


    }

    var arraylistar = [];
    arraylistar[0] = oCabecera;
    arraylistar[1] = oInfo;
    return arraylistar;
}


//---------------------------------------------------------


//************************************************************************************************************
//OBJETOS CRISTIAN *******************************************************************************************
//************************************************************************************************************


//---------------------------------------------------------

// PROYECTOS

function Proyecto(sNombreProyecto, aAnalistasProyecto, aTareasProyecto) {
    this.nombreProyecto = sNombreProyecto;
    this.analistasProyecto = aAnalistasProyecto;
    this.tareasProyecto = aTareasProyecto;
}

Consultoria.prototype.anadeProyecto = function (oProyecto) {
    this.proyectos.push(oProyecto);
};

// TAREAS

function Tarea(iCodigo, sNombreTarea, dFechaIni, oProyecto, dFechaFin, bEstado) {
    this.codigoTarea = iCodigo;
    this.nombreProyecto = oProyecto;
    this.fechaInicio = dFechaIni;
    this.fechaFin = dFechaFin;
    this.nombreTarea = sNombreTarea;
    this.estado = bEstado;
}

Consultoria.prototype.anadeTarea = function (oTarea) {
    this.tareas.push(oTarea);
};
Consultoria.prototype.dameCodigos = function () {

};

//ANALISTA

function Analista(nombreTrabajador, dniTrabajador, apellidosTrabajador, telefonoTrabajador, direccionTrabajador, oProgramadores) {
    Trabajador.call(this, nombreTrabajador, dniTrabajador, apellidosTrabajador, telefonoTrabajador, direccionTrabajador);

    this.programadores = oProgramadores;

}
Consultoria.prototype.anadeAnalista = function (oAnalista) {
    this.analistas.push(oAnalista);
};
Consultoria.prototype.dameAnalista = function (dniTrabajador) {
    var bEnc = false;
    var oObjeto;
    var i = 0;
    while (i < this.analistas.length && bEnc == false) 
    {
        if (this.analistas[i].dniTrabajador == dniTrabajador) {
            oObjeto = this.analistas[i];
            bEnc = true;
        }
        i++;
    }
    
    return oObjeto;
};
// Herencia Trabajador-ANALISTA

Analista.prototype = Object.create(Trabajador.prototype);
Analista.prototype.constructor = Analista;


//PROGRAMADOR
function Programador(nombreTrabajador, dniTrabajador, apellidosTrabajador, telefonoTrabajador, direccionTrabajador, oAnalista) {
    Trabajador.call(this, nombreTrabajador, dniTrabajador, apellidosTrabajador, telefonoTrabajador, direccionTrabajador);
    this.analista = oAnalista;

}
Consultoria.prototype.anadeProgramador = function (oProgramador) {
    this.programadores.push(oProgramador);
};

Consultoria.prototype.dameListaProgramadores = function () {
   var array=[];
    var i = 0;
    //var programador=[];
    while (i < this.programadores.length) {
       // programador=new Programador(this.programadores[i]);
          array[i]=this.programadores[i];
        i++;
    }
    return array;
};


Consultoria.prototype.dameProgramador = function (dniTrabajador) {
    var bEnc = false;
    var oProg;
    var i = 0;
    while (i < this.programadores.length && bEnc == false) {
        if (this.programadores[i].dniTrabajador == dniTrabajador) {
            oProg = this.programadores[i];
            bEnc = true;
        }
        i++;
    }
    return oProg;
};


// Herencia Trabajador-PROGRAMADOR

Programador.prototype = Object.create(Trabajador.prototype);
Programador.prototype.constructor = Programador;

