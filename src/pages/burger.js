const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Åbner/lukker menuen ved klik på hamburger-ikonet
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Lukker menuen, når et link klikkes
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
