var articulo = $('section article');
articulo.on('click', cargarLightbox);


function cargarLightbox() {
	var imagen = $(this).find('img').attr('src');
	var subtitulo = $(this).find('h4').text();
	var titulo = $(this).find('h3').text();

	$('body').append(`<div class="lightbox">
						<div class="manto">
							<div class="contenedor">
								<img src="${imagen}">
								<h4>${subtitulo}</h4>
								<h3>${titulo}</h3>
								<div class="cerrar">
									<img src="images/cerrar.png" alt="">
								</div>
							</div>
						</div>
					</div>`);

	$('.lightbox').fadeIn(400);
	$('.lightbox .contenedor').animate({'top': '50px'});

	$('.manto').css('height', document.body.clientHeight);

	$('.cerrar').on('click', cerrarLightbox);
	$(document).on('keydown', cerrarLightbox);
}


function cerrarLightbox(event) {

	if(event.keyCode == 27 || event.type == "click") {

		$('.lightbox .contenedor').animate({'top': '40px'});

		$('.lightbox').fadeOut(400, function() {
			$('.lightbox').remove();
		});
		
	}

	
}