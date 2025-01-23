const burger = document.querySelector(".burger__menu")
const nav = document.querySelector('.nav')
burger.addEventListener("click",function(){
    burger.classList.toggle("burger__active")
    nav.classList.toggle("nav__active")
})