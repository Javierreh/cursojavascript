//controlador, que es donde podemos todas las funciones que no atacan directamente a las vistas

var contador = listaTareas.length+1;

function addTarea(pTitulo, pPrioridad) {
	var nuevaTarea = {idTarea: contador, titulo: pTitulo, prioridad: pPrioridad};

	listaTareas.push(nuevaTarea);

	contador++;
}

function borrarTarea(pId) {

	// for (var i = 0; i <listaTareas.length; i++) {

	// 	if (listaTareas[i].idTarea == pId) {
	// 		var registroBorrar = i;
	// 	}

	// }

	var tareaBuscada = listaTareas.find(function(tarea){
		return tarea.idTarea == pId;
	});

	var posicionBorrar = listaTareas.indexOf(tareaBuscada);

	listaTareas.splice(posicionBorrar, 1);

	pintarTareas(listaTareas);

}

function filtrarTareas(pPrioridad) {
	
	var listaTemporal = new Array();

	// for (tarea of listaTareas) {
	// 	if (tarea.prioridad == pPrioridad) {
	// 		listaTemporal.push(tarea);
	// 	}
	// }

	listaTemporal = listaTareas.filter(function(tarea){
		return tarea.prioridad == pPrioridad;
	});

	return listaTemporal;
}

function buscar(pPalabra) {

	var listaTemporal = new Array();

	var busqueda = pPalabra.toLowerCase();

	for (tarea of listaTareas) {
		if (tarea.titulo.toLowerCase().indexOf(busqueda) != -1) {
			listaTemporal.push(tarea);
		}
	}
	return listaTemporal;
}