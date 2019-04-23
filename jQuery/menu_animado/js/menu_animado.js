var boton = $('.menu li a');
boton.on('click', activarMarcador);

function activarMarcador(event) {
	event.preventDefault();

	var ancho = $(this).css('width');
	var position = $(this).offset().left;
	// var position = $(this).position().left;

	var url = $(this).attr('href');

	$('#marcador').animate({'width': ancho, 'margin-left': position}, 400, function() {
		window.location = url;
	});

}