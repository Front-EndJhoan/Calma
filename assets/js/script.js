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

function animateOnScroll() {
    const sections = document.querySelectorAll('.hero, .needs-section, .about, .testimonials, .download');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

