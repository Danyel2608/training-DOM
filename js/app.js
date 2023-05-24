window.addEventListener("load", () => {
  let id = 0;
  let text = "";
  let alert = document.querySelector(".alert");
  let close = alert.firstElementChild;
  let input = document.querySelector("#task");
  let arrow = document.querySelector(".arrow");

  //   console.log(alert);
  //   console.log();
  close.addEventListener("click", () => {
    alert.classList.add("dismissible");
  });

  input.addEventListener("focus", () => {
    document.addEventListener("keydown", (event) => {
      if (event.code == "Enter" || event.code == "Numpudenter") {
        event.preventDefault();
      }
    });
  });

  arrow.addEventListener("click", (event) => {
    if (input.value.trim() == "") {
      //trim elimina los espacios al principio y al final del string.
      event.preventDefault();
      input.value = "";
      alert.classList.remove("dismissible");
    } else {
      let text = input.value;
      input.value = "";
      id =
        Number(document.querySelector("tbody")?.lastElementChild?.id) + 1 || 0;
      //Las ? son por si no hay nada que obvie esa parte
      //Crear una nueva fila:
      
      document.querySelector("tbody").appendChild(generateRow(id,text));
      if (!alert.classList.contains("dismissible")) {
        alert.classList.add("dismissible");
      } //Si escribo algo que no aparezca alert
    }
    //Interpolacion($) sirve para sustituir ese espacio por una variable o string que tengamos que poner ahi
    //solo cambia la primera columna de la tabla por $
  });
});
//Refactorizamos el código de la función:

const generateRow=(id,text)=>{
    let newrow = document.createElement("tr");
    newrow.setAttribute("id", id);
    newrow.innerHTML = `
    <td>
      <i class="fa-solid fa-circle-check fa-2x"></i>
      <span class="task" contenteditable="true"> 
      ${text} 
      </span>
      </td>
      <td>
      <span class="fa-stack fa-2x">
        <i class="fa-solid fa-square fa-stack-2x"></i>
        <i class="fa-solid fa-pencil fa-stack-1x fa-inverse"></i>
      </span>
      </td>
      <td>
      <span class="fa-stack fa-2x">
          <i class="fa-solid fa-square fa-stack-2x"></i>
          <i class="fa-solid fa-trash fa-stack-1x fa-inverse"></i>
      </span>
      </td>`;
      return newrow;
}
