var faq = $('.faq h2');

faq.on('click', desplegar);

function desplegar() {
	// $('.faq p').slideUp(300);
	// $('.faq h2').removeClass('titulo');
	// $(this).next().slideToggle();....
	// ...
	

	$(this).toggleClass('titulo');

	var contenido = $(this).next();

	$('.faq p').slideUp(300);

	$('.faq h2').removeClass('titulo');

	if ($(this).next().css('display') == "none") {
		
		contenido.slideDown(300);
		$(this).addClass('titulo');

	}
	else {

		contenido.slideUp(300);
		$(this).removeClass('titulo');

	}
}