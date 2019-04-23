$('.menu li').hover(entrar, salir);

function entrar() {
	$(this).stop().animate({'margin-left': '0px'}, 500);
}

function salir() {
	$(this).stop().animate({'margin-left': '-30px'}, 500);
}