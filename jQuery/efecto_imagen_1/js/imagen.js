var imagen = $('.contenedor');

imagen.hover(mostrarInfo, ocultarInfo);

function mostrarInfo() {
	$(this).find('.info').stop().animate({'left': '0px'}, 600);
}

function ocultarInfo() {
	$(this).find('.info').stop().animate({'left': '-400px'}, 600);
}