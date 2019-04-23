var imagen = $('.contenedor');

imagen.hover(mostrarInfo, ocultarInfo);

function mostrarInfo() {
	$('.contenedor .info').stop().animate({'left': '0px'}, 1000);
}

function ocultarInfo() {
	$('.contenedor .info').stop().animate({'left': '-400px'}, 1000);
}