addEventListener("DOMContentLoaded", () => {
    const burguer = document.getElementById("bg-btn");
    const menu = document.querySelector(".menu")

    addEventListener("click", () => {
         menu.classList.toggle("active");
    })
})