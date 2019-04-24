var contenedor = $('.contenedor');

contenedor.hover(mostrarInfo, ocultarInfo);

function mostrarInfo() {
	$(this).find('.info').animate({'left': '0px'}, 600);
	$(this).find('.imagen').addClass('rotar');
}

function ocultarInfo() {
	$(this).find('.info').stop().animate({'left': '400px'}, 600);
	$(this).find('.imagen').removeClass('rotar');
}