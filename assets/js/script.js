addEventListener("DOMContentLoaded", () => {
    const burguer = document.getElementById("bg-btn");
    const menu = document.querySelector(".menu")

    addEventListener("click", () => {
         menu.classList.toggle("active");
    })

    /** ---- NAV DINÁMICO ---- **/

     const nav = document.querySelector(".nav-bar");
 window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("nav-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
    }
 })
})