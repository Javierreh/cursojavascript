class Persona {

	constructor(pNombre, pApellidos, pEdad) {
		this.nombre = pNombre;
		this.apellidos = pApellidos;
		this.edad = pEdad;
	}

	mostrar() {
		return `\tNombre: ${this.nombre} - Apellidos: ${this.apellidos} - Edad: ${this.edad}`;
	}

}


class Vivienda {

	constructor(pPiso, pLetra) {
		this.piso = pPiso;
		this.letra = pLetra;
		this.inquilinos = [];
	}

	agregarInquilino(pPersona) {
		this.inquilinos.push(pPersona);
	}

	mostrar() {
		let res = `Vivienda. Piso ${this.piso}. Letra: ${this.letra}. Inquilinos:`;

		for (let i = 0; i < this.inquilinos.length; i++) {
			res += `\n${this.inquilinos[i].mostrar()}`;
		}

		return res;
	}

}


class Edificio {

	constructor(pCalle) {
		this.calle = pCalle;
		this.casas = [];
	}

	agregarCasa(pVivienda) {
		this.casas.push(pVivienda);
	}

	mostrar() {
		let res = `Edificio en la calle ${this.calle}`;
		for (let i = 0; i < this.casas.length; i++) {
			res += `\n${this.casas[i].mostrar()}`
		}
		return res;
	}

}


let persona1 = new Persona("Javi", "Arroyo Herrera", 28);
let persona2 = new Persona("Daniel", "García Herrera", 30);

let vivienda1 = new Vivienda(3, "A");

let edificio1 = new Edificio("Velazquez, 40");

vivienda1.agregarInquilino(persona1);
vivienda1.agregarInquilino(persona2);
// console.log(vivienda1);

edificio1.agregarCasa(vivienda1);

// console.log(vivienda1.mostrar());
console.log(edificio1.mostrar());




//Wes Bos - JavaScript 30
