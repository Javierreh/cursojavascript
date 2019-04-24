var flechaDer = $('.fa-chevron-right');
var contador = 1;
flechaDer.on('click', moverDer);

function moverDer() {
	// $('img').animate({'margin-left': '-600px'});
	$('img').remove();
	contador++;
	$('.contenedor').append('<img src="images/imagen_'+contador+'.jpg" alt="">')

}


