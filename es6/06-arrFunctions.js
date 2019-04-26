let personas = [
    { nombre: 'Mario', apellidos: 'Girón', edad: 35 },
    { nombre: 'Rosa', apellidos: 'García', edad: 21 },
    { nombre: 'Antonio', apellidos: 'Martínez', edad: 65 },
    { nombre: 'Carlos', apellidos: 'Rodríguez', edad: 23 },
    { nombre: 'Esteban', apellidos: 'Martín', edad: 89 }
];

// map function

let personasMas5 = personas.map((item) => {
	let newItem = { nombre: item.nombre, apellidos: item.apellidos, edad:item.edad + 5 }
	return newItem;
});

// con spread operator

let personasMas5Bis = personas.map((item) => {
	let newItem = {...item, edad: item.edad + 5};
	return newItem;
});

// let personasMas5Bis = personas.map(item => ({...item, edad: item.edad + 5}));

// console.log(personasMas5Bis);
// console.log(personas);



// FILTER FUNCTION

// Conseguir un array con todas las personas mayores de 50 años

// let personasMas50 = personas.filter((item) => {
	// if (item.edad > 50) {
	// 	return true;
	// }
	// else {
	// 	return false;
	// }

	// return item.edad > 50;

// });

let personasMas50 = personas.filter(item => item.edad > 50);

// console.log(personasMas50);


// FIND FUNCTION
// Recuperar la persona con edad 65 

// let persona65 = personas.find((item) => {
// 	return item.edad === 65;
// });

let persona65 = personas.find(item => item.edad === 65);

// console.log(persona65);


// EVERY y SOME FUNCTION
console.log(personas.every(item => item.edad > 18));
console.log(personas.some(item => item.edad > 18));


// SORT FUNCTION
personas.sort((a, b) => {
	return a.edad - b.edad;
});

console.log(personas);