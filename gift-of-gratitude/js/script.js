const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// function setScrollToTop() {
//     sessionStorage.setItem('scrollToTop', true);
// }

// index page only
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    const newTransform = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.slider').style.transform = newTransform;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

function autoSlide() {
    showSlide(slideIndex + 1);
    setTimeout(autoSlide, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', (event) => {
    showSlide(slideIndex);
    autoSlide();
});
