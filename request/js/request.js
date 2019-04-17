var url = "https://jsonplaceholder.typicode.com/posts";

var contenedorBlog = document.getElementsByClassName('blog');
var miBlog = contenedorBlog[0];

var pedido = new XMLHttpRequest();

//abrir la url que me pasan desde el objeto xmlrequest

pedido.open('GET', url, true); //el true es para que lo coja en formato procesado y no en bruto

//envio

pedido.send();

//tengo que estar atento al posible cambio de los estados de mi pedido a traves de un evento

pedido.addEventListener('readystatechange', cargarArchivo);

function cargarArchivo(event) {

	if (event.target.readyState == 4 && event.target.status == 200) { //error 500 esta caido el servidor, 404: ha conectado pero no ha conseguido la url... 200 que todo perfect

		//paso la cadena de caracteres JSON a un JSON real

		var listaPost = new Array();

		listaPost = JSON.parse(event.target.response);
		pintarPost(listaPost);
		// console.log(listaPost);
	}
	
}

function pintarPost(pListaPost) {
	miBlog.innerHTML = "";

	for (post of pListaPost) {

		var estado = (post.id % 2 == 0) ? 'par' : 'impar';

		var numImg = parseInt(Math.random() * 6) + 1;

		miBlog.innerHTML += `<article class="post ${estado}">

			<h2 title="${post.title}">${post.title.substring(0, 20)}...</h2>
			<div class="imagen">
				<img src="images/imagen_${numImg}.jpg" alt="">
			</div>
			<div class="content">
				${post.body}
			</div>
		
		</article>`;
	}
}