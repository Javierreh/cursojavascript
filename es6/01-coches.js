class Coche {

	constructor(pMarca, pModelo, pColor) {

		this.marca = pMarca;
		this.modelo = pModelo;
		this.color = pColor;
		this.velocidad = 0;

	}

	acelerar(aumentoVel) {
		this.velocidad += aumentoVel;
	}

	frenar(decrementoVel) {
		this.velocidad -= decrementoVel;
		if (this.velocidad < 0) {
			this.velocidad = 0;
		}
	}

}

let coche1 = new Coche("Mercedes", "T100", "rojo");

console.log(coche1.velocidad);
coche1.acelerar(100);
console.log(coche1.velocidad);
coche1.frenar(30);
console.log(coche1.velocidad);

// let coches = new Array();
// coches.push(coche1);

