var cesta = document.getElementById('cesta');
var escenario = document.getElementById('escenario');
var bolitas = document.getElementsByClassName('bolita');

var cestaPositionLeft = 200;
var lifes = 10;
var score = 0;

// 

////////////////

//version con el movimiento del raton

// escenario.addEventListener('mousemove', moverCesta);

// function moverCesta(event) {

// 	var posicionX = event.layerX -= (cesta.clientWidth / 2);

// 	cesta.style.left = posicionX + "px";

// 	if (posicionX > (escenario.clientWidth - cesta.clientWidth) - 6) {
// 		cesta.style.left = "400px"
// 	}

// 	if (posicionX < 0) {
// 		cesta.style.left = "0px";
// 	}
// }

//////////////////


document.addEventListener('keydown', moverCesta);

function moverCesta(event) {

	switch(event.key) {
		case "ArrowLeft":
			cestaPositionLeft -= 20;
			cesta.style.left = cestaPositionLeft + "px";

			if (cestaPositionLeft < 0) {
				cesta.style.left = "0px";
				cestaPositionLeft = 0;
			}
		break;

		case "ArrowRight":
			cestaPositionLeft += 20;
			cesta.style.left = cestaPositionLeft + "px";

			if (cestaPositionLeft >= (escenario.clientWidth - cesta.clientWidth)) {
				cesta.style.left = "400px";
				cestaPositionLeft = 400;
			}
		break;
	}
}


function getBolita() {

	var bolita = document.createElement('div');

	bolita.setAttribute('style', 'width: 25px; height: 25px; border: 2px solid black; border-radius: 50%; position: absolute; top: 0px; box-sizing: border-box;');
	bolita.className = "bolita";

	var randomBackgroundColor = getColor();
	bolita.style.backgroundColor = randomBackgroundColor;

	var randomLeft = getPositionX();
	bolita.style.left = randomLeft;

	escenario.appendChild(bolita);

}


function getColor() {
	var color = "";

	var red = parseInt(Math.random() * 256);
	var green = parseInt(Math.random() * 256);
	var blue = parseInt(Math.random() * 256);

	var color = "rgb(" + red + "," + green + "," + blue + ")";

	return color;
}


function getPositionX() {
	var position = parseInt(Math.random() * 24) * 25 + "px";
	return position;
}



function moverBolitas() {

	for (bolita of bolitas) {

		var bolitaTopPosition = bolita.style.top;
		bolitaTopPosition = Number(bolitaTopPosition.substring(0, bolitaTopPosition.length-2));
		bolitaTopPosition += 10;
		bolita.style.top = bolitaTopPosition + "px";

		var bolitaLeftPosition = bolita.style.left;
		bolitaLeftPosition = Number(bolitaLeftPosition.substring(0, bolitaLeftPosition.length-2));


		if (bolitaTopPosition > 550 && bolitaTopPosition < 600 &&
			bolitaLeftPosition + 25 > cestaPositionLeft && bolitaLeftPosition < cestaPositionLeft + 200) {

			bolita.remove();
			score++;
			console.log(score);



		}

		if (bolita.style.top == "620px") {
			bolita.remove();

			lifes--;

		} 

	}
}


setInterval(moverBolitas, 100);

setInterval(getBolita, 800);