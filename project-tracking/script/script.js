const buttonHamburguer = document.querySelector(".icon");
const menu = document.querySelector(".nav");
let toggle = false;

buttonHamburguer.addEventListener("click", function () {
  buttonHamburguer.src = "./images/icon-close.svg";
  menu.classList.toggle("active");

  if (toggle == false) {
    buttonHamburguer.src = "./images/icon-close.svg";
  } else {
    buttonHamburguer.src = "./images/icon-hamburger.svg";
  }
  toggle = !toggle;
});
