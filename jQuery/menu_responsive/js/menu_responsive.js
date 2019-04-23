var botonmenu = $('.botonmovil');
botonmenu.on('click', slideMenu);

var cerrado = true;

function slideMenu() {
	// $('header nav').slideToggle(400);

	var menu = $('header nav');

	if (cerrado == true) {
		menu.slideDown(300);
	}
	else {
		menu.slideUp(300);
	}

	cerrado = !cerrado;

}