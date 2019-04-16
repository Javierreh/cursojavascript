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