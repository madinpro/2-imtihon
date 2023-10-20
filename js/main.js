var elButton = document.querySelector(".btn");
var elButtonMenu = document.querySelector(".btn__menu");
var elButtonExit = document.querySelector(".btn__exi");
var elNav = document.querySelector(".nav__list");
var elButtonbtn__ikki = document.querySelector(".btn__ikki")


elButton.addEventListener("click", () => {
    elButtonMenu.classList.toggle("btn__menu--exit")
    elButtonExit.classList.toggle("btn__exi--menu")
    elNav.classList.toggle("nav__block--block")
    elButtonbtn__ikki.classList.toggle("btn__ikki--btn")
 
})

