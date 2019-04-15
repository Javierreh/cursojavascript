class Profesor {

	constructor(pNombre, pApellidos, pExp) {
		this.nombre = pNombre;
		this.apellidos = pApellidos;
		this.experiencia = pExp;
	}

	mostrarProfesor() {
		return `PROFESOR (nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia: ${this.experiencia})`;
	}

}

//Bloque 1

let profesor1 = new Profesor('Ramón', 'García', 5);
let profesor2 = new Profesor('Rosa', 'Martinez', 9);
// console.log(profesor1.mostrarProfesor());
// console.log(profesor2.mostrarProfesor());


//////////////

class Asignatura {

	constructor(pNombre, pProfesor) {
		this.nombre = pNombre;
		this.profesor = pProfesor;
	}

	mostrarAsignatura(boolean) {
		let res = `ASIGNATURA (nombre: ${this.nombre})`;

		if (boolean == true) {
			res += `\nAsignatura impartida por:\n${this.profesor.mostrarProfesor()}`;
			return res;
		}
		else {
			return res;
		}
	}

}

// Bloque 2

let algebra = new Asignatura('Álgebra', profesor1);
let electronica = new Asignatura('Electrónica', profesor2); 
let fisica = new Asignatura('Física', profesor2);
// console.log(algebra.mostrarAsignatura(false));
// console.log(electronica.mostrarAsignatura(true)); 
// console.log(fisica.mostrarAsignatura(true));


/////////////

class Estudiante {

	constructor(pNombre, pApellidos) {
		this.nombre = pNombre;
		this.apellidos = pApellidos;
		this.asignaturas = [];
	}

	agregarAsignatura(pAsignatura) {
		this.asignaturas.push(pAsignatura);
	}

	mostrarEstudiante() {
		let res = `ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})\nEstas son las asignaturas que cursa:\n`;
		for (let i = 0; i < this.asignaturas.length; i++) {
			res += `${this.asignaturas[i].mostrarAsignatura()}\nAsignatura impartida por:\n${this.asignaturas[i].profesor.mostrarProfesor()}\n`;
		}
		return res;
	}

}

// Bloque 3

let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')
estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)

estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)
// console.log(estudiante1.mostrarEstudiante());
// console.log(estudiante2.mostrarEstudiante());
// console.log(estudiante3.mostrarEstudiante());


// 

class Universidad {

	constructor(pNombre) {
		this.nombre = pNombre;
		this.alumnos = [];
	}

	agregarAlumno(pEstudiante) {
		this.alumnos.push(pEstudiante);
	}

	obtenerAlumnosAsignatura(pAsignatura) {
		let contador = 0;
		for (let i = 0; i < this.alumnos.length; i++) {
			for (let j = 0; j < this.alumnos[i].asignaturas.length; j++) {
				if (this.alumnos[i].asignaturas[j].nombre == pAsignatura) {
					contador++;
				}
			}
		}
		return contador;
	}

	mostrarUniversidad() {
		let res = `UNIVERSIDAD(nombre: ${this.nombre})\n`;

		for (let i = 0; i < this.alumnos.length; i++) {
			res += this.alumnos[i].mostrarEstudiante();
		}


		return res;
	}

}

// Bloque 4

let uni1 = new Universidad('UC3M');
uni1.agregarAlumno(estudiante1);
uni1.agregarAlumno(estudiante2);
uni1.agregarAlumno(estudiante3);
console.log(uni1.mostrarUniversidad());
console.log(uni1.obtenerAlumnosAsignatura('Electrónica'));
