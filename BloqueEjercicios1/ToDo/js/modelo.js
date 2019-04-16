// modelo que son los datos de la aplcación

var listaTareas = new Array();

listaTareas = [	{idTarea: 1, titulo: "Estudiar Javascript", prioridad: 'urgente'},
				{idTarea: 2, titulo: "Dormir", prioridad: 'diaria'},
				{idTarea: 3, titulo: "Salir a comer", prioridad: 'mensual'}	];

function pintarTareas(pListaTareas) {

	var contenedorTareas = document.getElementById('tareas');
	contenedorTareas.innerHTML = "";

	for (tarea of pListaTareas) {

		var articulo = document.createElement('article');
		articulo.className = tarea.prioridad;
		articulo.dataset.id = tarea.idTarea;

		var tituloTarea = document.createElement('h2');
		var tituloTexto = document.createTextNode(tarea.titulo);
		var btnEliminar = document.createElement('a');
		btnEliminar.href = "#";
		btnEliminar.title = "Eliminar";
		btnEliminar.setAttribute('onclick', 'borrarTarea(' + tarea.idTarea + ')');

		var textoEliminar = document.createTextNode('Eliminar');

		//hemos creado todos los elementos los metemos cada una en su cajita

		btnEliminar.appendChild(textoEliminar);
		tituloTarea.appendChild(tituloTexto);
		articulo.appendChild(tituloTarea);
		articulo.appendChild(btnEliminar);

		//la tarea ya montada la tiro al contenedor de tareas

		contenedorTareas.appendChild(articulo);

	}

	if (pListaTareas.length == 0) {
	
		var sinArticulo = document.createElement('article');
		sinArticulo.style.backgroundColor = "lightgray";

		var titulo = document.createElement('h2');
		var texto = document.createTextNode('No hay tareas pendientes');

		titulo.appendChild(texto);
		sinArticulo.appendChild(titulo);
		contenedorTareas.appendChild(sinArticulo);

	}

}

pintarTareas(listaTareas);