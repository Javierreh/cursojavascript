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
