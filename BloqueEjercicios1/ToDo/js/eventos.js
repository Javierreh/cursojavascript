//son las vistas de la aplicacion

var btnGuardar = document.getElementById('guardar');

btnGuardar.addEventListener('click', recogerTarea);

function recogerTarea(event) {

	event.preventDefault();

	var titulo = document.getElementById('tituloTarea').value;
	var prioridad = document.getElementById('prioridad').value;

	document.getElementById('mensaje').innerText = "";

	if (titulo != "" && prioridad != "") {
		addTarea(titulo, prioridad);
		pintarTareas(listaTareas);
	}
	else {
		document.getElementById('mensaje').innerText = "Tienes que rellenar todos los campos!";
	}

}


//fitros

var filtroPrioridad = document.getElementById('prioridadFilter');

filtroPrioridad.addEventListener('change', recogerPrioridad);

function recogerPrioridad(event) {

	// console.log(event.target.value);

	var prioridad = event.target.value;

	if (event.target.value != "") {
		var listaFiltrada = filtrarTareas(prioridad);
		pintarTareas(listaFiltrada);
	}
	else {
		pintarTareas(listaTareas);
	}

}


var busqueda = document.getElementById('search');

busqueda.addEventListener('keyup', recogerBusqueda);

function recogerBusqueda(event) {

	var palabraBuscar = event.target.value;
	
	var listaBusqueda = buscar(palabraBuscar);

	pintarTareas(listaBusqueda);

}
