var imagen = $('.contenedor');

imagen.hover(mostrarInfo, ocultarInfo);

function mostrarInfo() {
	$(this).find('.info').stop().fadeIn(500);
}

function ocultarInfo() {
	$(this).find('.info').stop().fadeOut(500);
}