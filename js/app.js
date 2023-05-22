//Comenzar siempre con esto,que sirve para comprobar que esta todo bien.
//DOMContentLoaded= sin css.
document.addEventListener("DOMContentLoaded", () => {
  let icon = document.querySelector(".fa-solid");
  // console.log(icon)
  let header = document.querySelector("h1");
  icon.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    document.body.classList.toggle("tour");
    icon.classList.toggle("fa-champagne-glasses");
    icon.classList.toggle("fa-hand");
    icon.classList.toggle("spin");
    header.classList.toggle("smack");
    if (header.textContent.includes("UN VIP,UN VIP,EY!!")) {
      header.textContent = "SALUDEN A TITI!";
      console.log(header.textContent);
    } else  if (header.textContent.includes("SALUDEN A TITI!")) {
      header.textContent = "UN VIP,UN VIP,EY!!";
      console.log(header.textContent);
    } else {
      header.textContent = "UN VIP,UN VIP,EY!!";
    }
  });
});
