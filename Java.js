// crear un elemento

let elementoCreado = document.createElement ( 'h1');

// Agregar atributos

elementoCreado.id =  'IDdediv ';

// Añadir texto

elementoCreado.textContent =  'hola mundo ';
elementoCreado.innerHTML =  `<em>El dinero</em> es importante pero es peligroso `;

let cuerpo = document.querySelector( 'body');

cuerpo.appendChild(elementoCreado);

