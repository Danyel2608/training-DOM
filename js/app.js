//cogiendo referencia de nav del html
let nav = document.querySelector("nav");
// console.log(nav);

//Seleccionar elemntos con clase
let active = document.querySelector(".active");
// console.log(active);

//Seleccionar multiples elementos con la misma etiqueta
let headersAndParagraphs = document.querySelectorAll("p,h1");

// console.log(headersAndParagraphs[0].innerText);//se
//accede a u elemento de corchetes y a si contenido con
// .innText

//accediendo a elementos hijos mediante children[elemento hijo]
//desde nav hasta a con active que es el 1 <a>
// console.log(nav.children[0].children[0].children[0]);

//Acceder al elemento 1º enlace y luego a su texto con textContent o innerText
// console.log(nav.firstElementChild.firstElementChild.firstElementChild.textContent);

//Dos formas de acceder a un hermano del li que contenia el texto anterior
// console.log(nav.firstElementChild.firstElementChild.firstElementChild.parentNode.parentNode.children[1].innerText);
// console.log(nav.firstElementChild.firstElementChild.firstElementChild.parentNode.nextElementSibling.firstElementChild.firstChild);

//Volver uno atrás: si fuese innerText no podria
// console.log(nav.firstElementChild.firstElementChild.firstElementChild.parentNode.nextElementSibling.firstElementChild.firstChild.parentNode);

// console.log(
//   headersAndParagraphs[0].nextElementSibling.nextElementSibling
//     .nextElementSibling
// );
// console.log(headersAndParagraphs[2]);
// let main = document.querySelector("#first");
// console.log(main);

//LLEGAR A LINK3
// console.log(nav.firstElementChild.lastElementChild.firstElementChild.firstChild);

//IGNORANDO ELLLL TEXTO
// console.log(nav.firstElementChild.childElementCount);
// console.log(nav.firstElementChild.children.length);

//SIN IGNORAR EL TEXTO
// console.log(nav.firstElementChild.childNodes);

// console.log(nav.firstElementChild.firstChild.nodeValue);

//NOMBRE DE NODO EN MAYUSCULA
// console.log(nav.firstElementChild.nodeName);

// console.log(nav.firstElementChild.firstChild.nextSibling.nextSibling.previousSibling);

