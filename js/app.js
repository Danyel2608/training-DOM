let box1 = document.body.firstElementChild.firstElementChild;

let box2 = box1.nextElementSibling;
let box3 = box2.nextElementSibling;
// console.log(box1);
// console.log(box2);
// console.log(box3);

box1.classList.add("dark");
box1.classList.remove("dark");
box2.classList.add("dark");

// console.log(box3.classList.contains("dark"));

//Toogle = alternar si o no
box3.classList.toggle("dark");
box3.classList.toggle("dark");
box3.classList.toggle("dark");

//Crear atributo personalizado//(Siempre tiene que empezar con data-...)
//atributo dataSet:
let number = box3.dataset.boxNumber;
// console.log(number);

//modificar el contenido de un elemento
//con innerHTML al meter ese codigo se carga todo lo del html de antes
// console.log(box3.dataset.month);
// document.body.firstElementChild.innerHTML="<h1>Wow!</h1>";
// console.log(document.querySelector("section").innerHTML);

//obtener el elemento seleccionado
//reemplaza incluso el elemento ademas del contenido
// console.log(document.querySelector("section").outerHTML);
// document.querySelector("section").outerHTML="<h1>Wow!</h1>";

//modificar contenido

// document.body.insertAdjacentHTML("afterbegin", "<nav>navigation</nav>");

// document
//   .querySelector("nav")
//   .insertAdjacentHTML("afterbegin", "<h1>Main Header</h1>");

// document
//   .querySelector("nav")
//   .insertAdjacentHTML("beforeend", '<a href="https://google.es">GOOGLE</a>');

// document
//   .querySelector("nav")
//   .insertAdjacentHTML("afterend", "<p>This is a paragraph</p>");

//Crear nuevos nodos
//Al final:
let header = document.createElement("h1");
header.append("Hello world!!");
document.body.append(header);
//Al principio:
header.prepend("!!");

//con before y after lo podemos hacer con nodos y elementos,no hay limitacion
document.querySelector("h1").firstChild.before("!!");
// document.querySelector("h1").lastChild.after("!!");

let paragraph = document.createElement("p");
paragraph.textContent = "writting a paragraph";
document.body.append(paragraph); //Otra forma
// document.querySelector("h1").after(paragraph);

//Reemplazar
document.querySelector("h1").replaceWith(paragraph);

//Borrar
// paragraph.remove();
// body.remove();

//modificar los estilos y linea de los elementos

paragraph.style.textAlign = "center";
paragraph.style.textTransform = "capitalize"; 
//Capitalize es la primera letra de cada palabra en mayuscula.
paragraph.style.backgroundColor = "black"; 
paragraph.style.color = "white"; 
paragraph.style.padding = "2em";

//crear un CLASE a atributo
paragraph.setAttribute("class","light");
paragraph.setAttribute("class","main");

//Mostrar las clases de un elemento
console.log(paragraph.getAttribute("class"));

paragraph.classList.add("light");

console.log(paragraph.style.cssText);