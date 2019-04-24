$('nav ul li a, #subir').on('click', irSeccion);

// $('#subir').on('click', irSeccion);

function irSeccion() {
	var seccion = $(this).attr('href');
	var distancia = $(seccion).offset().top;

	$('html, body').animate({scrollTop: distancia}, 2000)
}