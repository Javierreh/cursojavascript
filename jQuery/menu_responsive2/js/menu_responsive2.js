var botonmenu = $('.botonmovil');
botonmenu.on('click', slideMenu);

var cerrado = true;

function slideMenu() {
	// $('header nav').slideToggle(400);

	var menu = $('header nav');

	if (cerrado == true) {
		menu.animate({'margin-left': '0'});
	}
	else {
		menu.animate({'margin-left': '-100%'});
	}

	cerrado = !cerrado;

}