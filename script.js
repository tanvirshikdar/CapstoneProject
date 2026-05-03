/* ==========================================================================
   HOME PAGE SCRIPTS
   Handles the automatic image slider in the Ambience section.
   ========================================================================== */

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");
}

function changeSlide(n) {
    showSlides(slideIndex + n);
}

// Automatically change the slide every 1 second (1000ms)
setInterval(() => {
    changeSlide(1);
}, 1000);


/* ==========================================================================
   MENU PAGE SCRIPTS
   Handles the manual next/previous navigation for the menu images.
   ========================================================================== */

let currentMenuIndex = 0;
const menuPages = document.querySelectorAll(".menu-page");

function showMenuPage(n) {
    if (menuPages.length === 0) return;

    if (n >= menuPages.length) {
        currentMenuIndex = 0;
    }
    else if (n < 0) {
        currentMenuIndex = menuPages.length - 1;
    }
    else {
        currentMenuIndex = n;
    }
    menuPages.forEach(page => {
        page.classList.remove("active");
    })
    menuPages[currentMenuIndex].classList.add("active");
}

function changeMenuPage(n) {
    showMenuPage(currentMenuIndex + n);
}