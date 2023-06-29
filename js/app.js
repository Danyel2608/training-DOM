window.addEventListener("load", () => {
  //====================VARIABLES===================================
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
  let info = document.querySelector(".info");
  let start = document.querySelector(".start");
  let end = document.querySelector(".end");
  let body = document.querySelector(".body");
  let date = new Date();
  // console.log(date);
  start.innerHTML = date;
  // console.log(button3);
  //----------------------------------------------------------------------------------//
  // Norificacion de error si no se escribe nada
  close.addEventListener("click", () => {
    alert.classList.add("dismissible");
  });

  //====================INPUT PRINCIPAL + ARROW===================================

  //Texto (add a new task ) para escribir
  input.addEventListener("focus", (e) => {
    saveInput(e, true);
  });
  input.addEventListener("blur", (e) => {
    saveInput(e, false);
  });

  const saveInput = (e, onfocus) => {
    if (onfocus) {
      document.addEventListener("keydown", (e) => {
        if (e.code == "Enter" || e.code == "Numpudenter") {
          e.preventDefault();
        }
      });
    }
  };
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

      info.classList.remove("autoDismissible");
      setTimeout(() => {
        info.classList.add("autoDismissible");
      }, 5000);
    }
  });
  //Interpolacion($) sirve para sustituir ese espacio por una variable o string que tengamos que poner ahi
  //solo cambia la primera columna de la tabla por $

  //====================ARRAY PARA TODOS LOS ELEMENTOS ICONOS==================================
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
      removeRow(e, false);
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

  //==================== EVENTOS ICONOS CHECK,EDIT,TRASH===================================
  //Editar #Part 2

  const editTask = (e, onFocus) => {
    let editable = e;
    if (onFocus) {
      // console.log(editable.target);
      editable.target.classList.add("editable");
      document.addEventListener("keydown", (editable) => {
        // console.log(editable.code);
        if (editable.code == "Escape") {
          editable.target.classList.remove("editable");
          editable.target.blur(); //blur quita el foco

          if (editable.target.innerHTML == "") {
            editing = true;
            removeRow(editable, true);
          }
          //Borrar fila si hay espacios
          let empty = editable.target.textContent.replaceAll(" ", "");
          if (empty.trim() == "") {
            removeRow(editable, true);
          }
        }
      });

      editable.target.addEventListener("blur", () => {
        //si quito el foco pasa:
        editable.target.classList.remove("editable"); //si tiene algo
        if (editable.target.innerHTML == "") {
          //si está vacío
          // editing = true;
          removeRow(editable, true);
        }
        let empty = editable.target.textContent.replaceAll(" ", "");
        if (empty.trim() == "") {
          removeRow(editable, true);
        }
        let e1 =
          e.target.parentNode.parentNode.firstElementChild.nextElementSibling
            .nextElementSibling;
        date = new Date();
        e1.innerHTML = date;
      });
    } else {
      editable =
        e.target.parentNode.parentNode.previousElementSibling
          .previousElementSibling.previousElementSibling.lastElementChild;
      editable.classList.add("editable");
      editable.focus();
    }
  };

  //Circulo Check Verde #Part2:
  const deleteTask = (e) => {
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
  //Borrar on icono basurra #Part2
  const removeRow = (e, editing) => {
    if (editing) {
      //editing es buleano.
      e.target.parentNode.parentNode.remove();
    } else {
      e.target.parentNode.parentNode.parentNode.remove();
    }
  };
  //====================GENERAR ROW===================================
  //Refactorizamos el código de la función:
  //Flecha con marco azul:
  const generateRow = (id, text) => {
    let newrow = document.createElement("tr");
    newrow.setAttribute("id", id);
    newrow.classList.add("first");
    newrow.innerHTML = `
    <td>
      <i class="fa-solid fa-circle-check fa-2x"></i>
      <span class="task tarea" contenteditable="true" data-complete="false">
      ${text} 
      </span>
      </td>
      <td class="start">${date}</td>
      <td class="end"></td>
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

    newrow.firstElementChild.firstElementChild.addEventListener(
      "click",
      (e) => {
        deleteTask(e);
      }
    );
    newrow.firstElementChild.lastElementChild.addEventListener("click", (e) => {
      editTask(e, true);
    });
    newrow.lastElementChild.previousElementSibling.addEventListener(
      "click",
      (e) => {
        editTask(e, false);
      }
    );
    newrow.lastElementChild.firstElementChild.addEventListener("click", (e) => {
      removeRow(e, false);
    });
    return newrow;
  };

  //====================BOTONES===================================
  let button1 = document.querySelector(".button1");
  let button2 = document.querySelector(".button2");
  let button3 = document.querySelector(".button3");

  button1.addEventListener("click", () => {
    mostrarAll();
  });
  button2.addEventListener("click", () => {
    mostrarToDo();
  });
  button3.addEventListener("click", () => {
    mostrarDone();
  });

  function mostrarToDo() {
    let filtrer = document.getElementsByClassName("tarea");
    for (let index = 0; index < filtrer.length; index++) {
      let filtrerRow = filtrer[index];
      let text = filtrerRow.innerHTML;
      if (text.includes("<del>")) {
        let filtrerRows = filtrerRow.parentNode.parentNode;
        filtrerRows.classList.add("transparent");
      } else {
        let filtrerRows = filtrerRow.parentNode.parentNode;
        filtrerRows.classList.remove("transparent");
      }
    }
  }
  function mostrarDone() {
    let filtrer = document.getElementsByClassName("tarea");
    for (let index = 0; index < filtrer.length; index++) {
      let filtrerRow = filtrer[index];
      let text = filtrerRow.innerHTML;
      if (text.includes("<del>")) {
        let filtrerRows = filtrerRow.parentNode.parentNode;
        filtrerRows.classList.remove("transparent");
      } else {
        let filtrerRows = filtrerRow.parentNode.parentNode;
        filtrerRows.classList.add("transparent");
      }
    }
  }
  function mostrarAll() {
    let filtrer = document.getElementsByClassName("tarea");
    for (let index = 0; index < filtrer.length; index++) {
      let filtrerRow = filtrer[index];
      let text = filtrerRow.innerHTML;
      if (text.includes("<del>")) {
        let filtrerRows = filtrerRow.parentNode.parentNode;
        filtrerRows.classList.remove("transparent");
      } else {
        let filtrerRows = filtrerRow.parentNode.parentNode;
        filtrerRows.classList.remove("transparent");
      }
    }
  }
  //====================ATAJOS DE TECLADO===================================

  body.addEventListener("keydown", (e) => {
    if (e.key == "Tab") {
      e.preventDefault();
      input.value.trim() == ""
      input.value = ""
    }
  });

  body.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "Insert") {
      e.preventDefault();
      console.log(e.code);
      input =
        e.target.firstElementChild.nextElementSibling.firstElementChild
          .nextElementSibling.nextElementSibling.nextElementSibling
          .firstElementChild.firstElementChild;
      input.focus();
    }
    if (e.ctrlKey && e.shiftKey && e.code === "KeyS") {
      e.preventDefault();
      let textoEscrito = input.value;
      // console.log(textoEscrito);
      if (textoEscrito != "") {
        text = input.value;
        document.querySelector("tbody").appendChild(generateRow(id, text));
        info.classList.remove("autoDismissible");
        setTimeout(() => {
          info.classList.add("autoDismissible");
        }, 5000);
      } else if (textoEscrito == "") {
        alert.classList.remove("dismissible");
      }
    }
    if (e.ctrlKey && e.shiftKey && e.key == "F1") {
      e.preventDefault();
      let delet = document.getElementById("tbody");
      let firstRow = delet.firstElementChild;
      firstRow.remove();
    }
    if (e.ctrlKey && e.shiftKey && e.key == "F2") {
      e.preventDefault();
      let delet = document.getElementById("tbody");
      let lastRow = delet.lastChild;
      lastRow.remove();
    }
    if (e.ctrlKey && e.shiftKey && e.key == "F5") {
      e.preventDefault();
      let editR = document.getElementById("tbody");
      let editable = editR.firstElementChild.firstElementChild.lastElementChild;
      editable.classList.add("editable");
    }
    if (e.ctrlKey && e.shiftKey && e.key == "F6") {
      e.preventDefault();
      let editR = document.getElementById("tbody");
      let editable = editR.lastElementChild.firstElementChild.lastElementChild;
      editable.classList.add("editable");
    }
    if (e.ctrlKey && e.key == "Delete") {
      e.preventDefault();
      let deleteTable = document.querySelectorAll(".first");
      console.log(deleteTable);
      for (let index = 0; index < deleteTable.length; index++) {
        deleteTable[index].innerHTML = "";
      }
    }
  });
});
