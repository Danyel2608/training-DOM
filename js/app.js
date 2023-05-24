window.addEventListener("load", () => {
  //Variables
  let id = 0;
  let text = "";
  let alert = document.querySelector(".alert");
  let close = alert.firstElementChild;
  let input = document.querySelector("#task");
  let arrow = document.querySelector(".arrow");
  let done = document.querySelectorAll(".fa-circle-check");
  let edit = document.querySelectorAll(".fa-pencil");
  let trash = document.querySelectorAll(".fa-trash");
  let task = document.querySelectorAll(".task");
  //----------------------------------------------------------------------------------//
  // Norificacion de error si no se escribe nada
  close.addEventListener("click", () => {
    alert.classList.add("dismissible");
  });

  //----------------------------------------------------------------------------------//

  //Texto (add a new task ) para escribir
  input.addEventListener("focus", () => {
    document.addEventListener("keydown", (event) => {
      if (event.code == "Enter" || event.code == "Numpudenter") {
        event.preventDefault();
      }
    });
  });
  //Flecha con marco azul y texto anterior para que salga o no la notificacion si no
  //se escribe nada y le damos a la flecha.
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

      document.querySelector("tbody").appendChild(generateRow(id, text));
      if (!alert.classList.contains("dismissible")) {
        alert.classList.add("dismissible");
      } //Si escribo algo que no aparezca alert
    }
    //Interpolacion($) sirve para sustituir ese espacio por una variable o string que tengamos que poner ahi
    //solo cambia la primera columna de la tabla por $
  });
  //----------------------------------------------------------------------------------//
  //como done es una lista de nodos y no es uno solo,se tiene que hacer asi:
  //Circulo Check Verde #Part1:
  done.forEach((item) => {
    item.addEventListener("click", (e) => {
      deleteTask(e);
    });
  });
  //Borrar on icono basurra #Part1
  trash.forEach((item) => {
    item.addEventListener("click", (e) => {
      removeRow(e);
    });
  });
  //Editar #Part 1
  edit.forEach((item) => {
    item.addEventListener("click", (e) => {
      editTask(e, false);
    });
  });
  //Bucle para todos los elementos con atributos .task
  task.forEach((item) => {
    item.addEventListener("focus", (e) => {
      editTask(e, true);
    });
  });
  //Editar #Part 2

  let editTask = (e, onFocus) => {
    if (onFocus) {
      console.log(e.target);
    } else {
      let editable =
        e.target.parentNode.parentNode.previousElementSibling.lastElementChild;
      editable.classList.add("editable");
      editable.focus();
    }
  };

  //Borrar on icono basurra #Part2
  let removeRow = (e) => {
    e.target.parentNode.parentNode.parentNode.remove();
  };
  //Circulo Check Verde #Part2:
  let deleteTask = (e) => {
    let task = e.target.nextElementSibling;
    text = task.innerHTML;
    if (text.includes("<del>")) {
      //pregunta si contiene <del>
      task.innerHTML = task.firstElementChild.textContent; //no hay del
      task.setAttribute("data-complete", "true");
    } else {
      task.innerHTML = `<del>${text}</del>`; //lo pone
      task.setAttribute("data-complete", "false");
    }
  };
  //----------------------------------------------------------------------------------//

  //Refactorizamos el código de la función:
  //Flecha con marco azul:
  const generateRow = (id, text) => {
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
  };
});
