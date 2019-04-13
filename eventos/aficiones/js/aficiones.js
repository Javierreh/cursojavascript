var listaAficiones = new Array(); //multidimensional de objetos json

var boton = document.getElementById('btn');

boton.addEventListener('click', capturarDatos);

function capturarDatos(event) {
	event.preventDefault();
	
	var nombre = document.getElementById('nombre').value;
	var aficion = document.getElementById('aficion').value;

	guardar(nombre, aficion);

}

function guardar(pNombre, pAficion) {

	var registro = {nombre: pNombre, aficion: pAficion};
	listaAficiones.push(registro);

	pintarListado(registro);

	document.getElementById('nombre').value = "";
	document.getElementById('aficion').value = "";

}

function pintarListado(pRegistro) {

	var li = document.createElement('li');
	li.innerHTML = '<strong>' + pRegistro.nombre + ':</strong> ' + pRegistro.aficion;

	var listado = document.getElementById('listado');

	listado.appendChild(li);

}