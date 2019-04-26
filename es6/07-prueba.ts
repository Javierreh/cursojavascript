let verdadero: boolean = true;
let entero: number = 4;
let cadena: string = `Esto es un número ${entero}`;

let arrNum: number[] = [1, 2, 3, 4, 5];

let arrAny: any[] = ['hola', 4.5, true];

console.log(verdadero, entero, cadena);


function sumar(a: number, b: number): number {
	return a + b;
}

console.log(sumar(3, 4));


class Persona {

    nombre: string
    apellidos: string
    edad: number

    constructor(pNombre: string, pApellidos: string, pEdad: number) {
        this.nombre = pNombre
        this.apellidos = pApellidos
        this.edad = pEdad
    }

    mostrar(): string {
        return `${this.nombre} ${this.apellidos}`
    }
}