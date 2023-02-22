const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.getElementById("#checkOut").addEventListener('click', takeMe);
function takeMe() {
    window.location.href="https://www.facebook.com/janmichael.caasi";
}

document.getElementById("#send").addEventListener('click', mailTo);
function mailTo() {
    window.location.href="mailto:janmichaelcaasi@gmail.com";
}