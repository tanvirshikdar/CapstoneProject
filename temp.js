let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides(n) {
    if (slides.length === 0) return;

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

if (slides.length > 0) {
    setInterval(() => {
        changeSlide(1);
    }, 4000);
}

const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        console.log("Reservation Details:");
        console.log("Name:", name);
        console.log("Date:", date);
        console.log("Time:", time);
        console.log("Guests:", guests);

        alert(`Reservation for ${name} on ${date} at ${time} for ${guests} guests submitted! (This is a demo)`);
    });
}

let currentMenuIndex = 0;
const menuPages = document.querySelectorAll(".menu-page");

function showMenuPage(n) {
    if (menuPages.length === 0) return;

    if (n >= menuPages.length) {
        currentMenuIndex = 0;
    } else if (n < 0) {
        currentMenuIndex = menuPages.length - 1;
    } else {
        currentMenuIndex = n;
    }

    menuPages.forEach(page => {
        page.classList.remove("active");
    });

    menuPages[currentMenuIndex].classList.add("active");
}

function changeMenuPage(n) {
    showMenuPage(currentMenuIndex + n);
}

document.addEventListener('keydown', (event) => {
    if (menuPages.length > 0) {
        if (event.key === 'ArrowLeft') {
            changeMenuPage(-1);
        } else if (event.key === 'ArrowRight') {
            changeMenuPage(1);
        }
    }
});