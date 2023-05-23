// document.body.addEventListener("click", () => {
//   alert("This is the body");
// });
// document.querySelector("section").addEventListener("click", () => {
//   alert("This is the section");
// });
// document.querySelector("div").addEventListener("click", () => {
//   alert("This is the div");
// });

// //SALE EN CONSOLA LA TECLA QUE PULSE
// document.body.addEventListener("keydown", (event) => {
//   event.preventDefault(); //HACE QUE SI UNA TECLA TIENE POR DEFECTO UNA ACCION, QUE NO LA HAGA
//   //EJEMPLO F11 PANTALLA COMPLETA.
//   console.log(event.key);
//   console.log(event.code);
//   if (event.key == "Enter") {
//     alert("Hello World!!");
//   }
// });

// //TODO LO QUE ESTÁ DENTRO DE DOM PUEDE ESTAR ASOCIADO A EVENTOS
// //ALGUNOS YA VIENEN PREDEFINIDOS

//DOS EVENTOS A LA VEZ:
//La variavle event se creará en el navegador como un objeto con sus propiedades.
//La funcion manejadora es la funcion flecha.
// let time1 = 0.0,
//   time2 = 0.0;
// document.body.addEventListener("click", (event) => {
//   console.log(event);
//   document.body.style.backgroundColor = "black";
//   time1 = event.timeStamp;
//   console.log(time1);
//   console.log(event.currentTarget);
// });
// document.body.addEventListener("click", (event) => {
//   setTimeout(() => {
//     alert("Hello World!");
//     time2 = event.timeStamp;
//     console.log(time2);
//     console.log(time1 - time2);
//   }, 3000);
// });

//HAY ELEMENTOS QUE POR SÍ,YA ESTÁN PREDEFINIDOS,PERO PODEMOS CAMIARLO
//PARA QUE NO OCURRA:
console.log(document.forms);
document.forms[0].onsubmit = (event)=>{
  event.preventDefault();
  // console.log("Hello world!!");
}
