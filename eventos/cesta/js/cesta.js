var cesta = document.getElementById('cesta');
var escenario = document.getElementById('escenario');
var bolitas = document.getElementsByClassName('bolita');

var scoreDisplay = document.getElementById('score');
var hearts = document.getElementsByClassName('hearts');

var heartsDiv = document.getElementById('heartsDiv');

var cestaPositionLeft = 200;
var lifes = 5;
var score = 0;

var generacionBolitas = setInterval(getBolita, 800);
var movimientoBolitas = setInterval(moverBolitas, 100);


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
			
			cesta.style.backgroundColor = bolita.style.backgroundColor;
			bolita.remove();
			score++;
			scoreDisplay.innerText = score;
		}

		if (bolita.style.top == "620px") {
			bolita.remove();
			lifes--;
			removeLife();

		} 
	}
}

function removeLife() {

	switch(lifes) {
		case 4:
			hearts[0].className = "fas fa-heart-broken hearts brokenHearts";
		break;

		case 3:
			hearts[1].className = "fas fa-heart-broken hearts brokenHearts";
		break;

		case 2:
			hearts[2].className = "fas fa-heart-broken hearts brokenHearts";
		break;

		case 1:
			hearts[3].className = "fas fa-heart-broken hearts brokenHearts";
		break;

		case 0:
			hearts[4].className = "fas fa-heart-broken hearts brokenHearts";
			gameOver();
		break;

	}

}


function gameOver() {

	clearInterval(generacionBolitas);
	clearInterval(movimientoBolitas);


	var gameOverDiv = document.createElement('div');
	gameOverDiv.innerHTML = "<h1 style='font-size: 60px'>GAME OVER</h1>";

	gameOverDiv.setAttribute('style', 'padding: 60px 100px; border: 2px solid black; background-color: lightgreen; color: darkgreen; border-radius: 5%; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -80%)');


	var scoreDiv = document.createElement('div');
	scoreDiv.innerHTML = "<h2 style='font-size: 30px'>Score: " + score + "</h2>";

	scoreDiv.setAttribute('style', 'padding: 15px 25px; border: 2px solid black; background-color: green; color: white; border-radius: 15%; text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, 20%)');


	escenario.appendChild(gameOverDiv);
	escenario.appendChild(scoreDiv);

}

















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









//ejemplo de uso de nextSibiling como insertBefore...
// heartsDiv.insertBefore(brokenHeart, hearts.nextSibling);


///la otra forma de las vidas: eiminarlas y crear un nuevo elemento con las clases

// hearts[0].remove();
	// var brokenHeart = document.createElement('i');
	// brokenHeart.className = "fas fa-heart-broken brokenHearts";
	
	// heartsDiv.appendChild(brokenHeart);