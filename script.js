/* ==================================
   RIF SOLUTION
   Modern JavaScript
================================== */

// =======================
// Navbar Shadow on Scroll
// =======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#002b55";
        header.style.padding = "15px 8%";

    } else {

        header.style.background = "#003a70";
        header.style.padding = "20px 8%";

    }

});

// =======================
// Scroll Reveal Animation
// =======================

const hiddenElements = document.querySelectorAll(".card, .about div, form");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));


// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


// =======================
// Contact Form
// =======================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Merci ! Votre message a été envoyé.");

    form.reset();

});