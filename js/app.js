window.addEventListener("load", () => {
  let id = 0;
  let text = "";
  let alert = document.querySelector(".alert");
  let close = alert.firstElementChild;
  let input = document.querySelector("#task");
  let arrow= document.querySelector(".arrow")
  //   console.log(alert);
  //   console.log();
  close.addEventListener("click", (event) => {
    close.classList.add("dismissible");
  });
  input.addEventListener("focus", () => {
    document.addEventListener("keydown", (event) => {
      if (event.code == "Enter" || event.code == "Numpudenter") {
        event.preventDefault();
      }
      console.log(event.code);
    });
  });
  
});
