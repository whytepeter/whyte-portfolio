// Functionality for the Hamburger
const hamburger = document.querySelector(".hamburger--wrapper");
const navLinks = document.querySelector(".nav--list");
const links = document.querySelectorAll(".nav--list li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  hamburger.classList.toggle("anim-hamburger");
});
