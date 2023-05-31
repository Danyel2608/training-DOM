let verde = document.querySelectorAll(".dragtarget"); //los . son para clases
let azul = document.querySelector("#droptarget"); //Las # son para id
let carro=document.querySelector("#carro");

// verde.addEventListener("click", () => {
//   console.log("div verde");
// });
azul.addEventListener("click", () => {
  console.log("div azul");
});

let text = "";
let itemArrastrado = null;

verde.forEach((caja) => {
  caja.addEventListener("dragstart", (e) => {
    itemArrastrado = e.target;//Elemento donde se produce,
    //Lo qe contiene : lo guardo en una variable

    text=itemArrastrado.textContent;//Esto seria para mover el texto de dentro

    // console.log(itemArrastrado);
  });
});
//Ejemplo de los 3 eventos que ocurren en DRAG (arrastrar)
// verde.addEventListener("dragstart", (e) => {
//   console.log("dragstart");
//   itemArrastrado=e.target;
//   text=itemArrastrado.textContent
// });
// verde.addEventListener("drag", (e) => {
//   console.log("drag");
// });
// verde.addEventListener("dragend", (e) => {
//   console.log("dragend");
// });

//EJEMPLO DE DROP (soltar)
//Evento donde puede recibir a otro que sea arrastrado.
azul.addEventListener("dragenter", (e) => {
  console.log("dragenter");
  e.preventDefault();
});
azul.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("dragover");
});
azul.addEventListener("drop", (e) => {
  // console.log(e.target);
  // console.log("drop");
  console.log(itemArrastrado);
  let span=document.createElement("span")
  span.innerHTML=itemArrastrado.innerHTML;
  carro.appendChild(span)
  itemArrastrado.innerHTML="";
  e.target.textContent=text;//Esto seria para mover el texto de dentro
});
azul.addEventListener("dragleave", (e) => {
  console.log("dragleave"); 
});
