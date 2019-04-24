var contenedor = $('.contenedor');

contenedor.on('mouseover', zoom);

var zoom = 1;

function zoom() {
	$(this).on('wheel', function(event) {
		// console.log(event.originalEvent.wheelDelta);
		var delta = event.originalEvent.wheelDelta;

		if (delta > 0) {
			zoom += 0.01;
			$('.contenedor').find('.imagen').draggable({disabled: false});
			// if ($('.contenedor').)
			// $('.contenedor').find('.imagen').draggable({containment: '.contenedor'});
		}
		else if (delta < 0 && zoom > 1) {
			zoom -= 0.01;
			$('.contenedor').find('.imagen').draggable({disabled: true});
		}

		$('.contenedor').find('.imagen').css('transform', 'scale('+zoom+')');

	});

		
	
	
}

$(this)