class Animal {

	constructor (pNombre, pSexo) {
		this.nombre = pNombre;
		this.sexo = pSexo;
	}

	mostrar() {
		// return 'Mi nombre es ' + this.nombre + ' y mi sexo es ' + this.sexo;

		return `Mi nombre es ${this.nombre} y mi sexo es ${this.sexo}`;

	}

}


class Perro extends Animal { //todos los perros son animales

	constructor(pNombre, pSexo, pRaza) {
		super(pNombre, pSexo);
		this.raza = pRaza;
	}

}


class Pajaro extends Animal { //todos los pajaros son animales

	constructor(pNombre, pSexo, pVuela = true) {
		super(pNombre, pSexo);
		this.vuela = pVuela;
	}

}


let perro1 = new Perro('Bobby', 'M', 'Yorkshire');
console.log(perro1.mostrar());

let pinguino = new Pajaro('pingu', 'F', false);
let halcon = new Pajaro('rompehuesos', 'M');


console.log(pinguino.mostrar());
console.log(halcon.mostrar());