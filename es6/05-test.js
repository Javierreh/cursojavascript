function contador(end, done) {
	
	let indice = 0;

	let interval = setInterval(() => {
		console.log(indice++);

		if (indice == end) {
			clearInterval(interval);
			done();
		}

	}, 1000);

}

// console.log("Inicio Script");
// contador(4, () => {
// 	console.log("Fin Script");
// });

console.log('Inicio de Script');

let prom = new Promise((resolve, reject) => {
	let indice = 0;
	let interval = setInterval(() => {
		console.log(indice++);
		if (indice == 5) {
			clearInterval(interval);
			resolve(indice);
		}
		else {
			clearInterval(interval);
			reject();
		}
	}, 1000);
});

prom.then((pIndice) => {
	console.log('Fin de Script' + pIndice);
}).catch(() => {
	console.log('Termina con error');
});



