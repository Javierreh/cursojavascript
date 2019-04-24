$('nav ul li a, #subir').on('click', irSeccion);

// $('#subir').on('click', irSeccion);

function irSeccion() {
	var seccion = $(this).attr('href');
	var distancia = $(seccion).offset().top;

	$('html, body').animate({scrollTop: distancia}, 2000)
}

// EFECTO PARALLAX

$(window).scroll(function() {
	var barraScroll = $(window).scrollTop();

	var escala = 90 + barraScroll;
	//el alto que se mueve el scroll desde el top
	// console.log(barraScroll);

	$('body').css('background-position', 'center -'+barraScroll/10+'px');
	// $('body').css('background-size', escala+"%");
})