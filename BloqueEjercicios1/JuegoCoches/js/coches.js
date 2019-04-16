var flipao = document.getElementById('flipao');
var ferrari = document.getElementById('ferrari');
var mercedes = document.getElementById('mercedes');
var mensaje = document.getElementById('mensaje');
var avanceFlipao = 0;
var avanceFerrari = 0;
var avanceMercedes = 0;
var posicionFinal = 675;

var nitro = 3;


var intervalo1 = setInterval(acelerarFerrari, 100);
var intervalo2 = setInterval(acelerarMercedes, 100);

document.addEventListener('keydown', acelerarFlipao);

function acelerarFlipao(event) {

	switch(event.keyCode) {

		case 32: 
			// avanzando cuando tocas space
			avanceFlipao += 15;
		break;

		case 78:
			if (nitro > 0 && nitro <= 3) {
				avanceFlipao += 40;
				nitro--;
			}
		break;
	
	}

	if (avanceFlipao <= posicionFinal) {

		flipao.style.marginLeft = avanceFlipao + 'px';

	}
	else {
		pararTodo();
		mensaje.innerText = "Ha ganado el flipao";
	}

}

function acelerarFerrari() {
	avanceFerrari += 10;

	ferrari.style.marginLeft = avanceFerrari + "px";

	if (avanceFerrari >= posicionFinal) {
		pararTodo();
		mensaje.innerText = "Ha ganado Ferrari";
		
	}
}


function acelerarMercedes() {
	var randomMargin = Math.round(Math.random() * 20)
	avanceMercedes += randomMargin;

	mercedes.style.marginLeft = avanceMercedes + "px";

	if (avanceMercedes >= posicionFinal) {
		pararTodo();
		mensaje.innerText = "Ha ganado Mercedes";
		
	}
}


function pararTodo() {
	clearInterval(intervalo1);
	clearInterval(intervalo2);
	document.removeEventListener('keydown', acelerarFlipao);
}


