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

//Form field animation

let formInput = Array.from(document.querySelectorAll(".form-inputs"));
let labelEmail = document.querySelector(".label-email");
let labelMessage = document.querySelector(".label-message");

formInput.forEach(input => {
  input.addEventListener("focus", e => {
    if (e.target.id == "email") {
      labelEmail.classList.add("label-email-anim");
      labelEmail.style.color = "rgb(40, 40, 40)";
    } else {
      labelMessage.classList.add("label-message-anim");
      labelMessage.style.color = "rgb(40, 40, 40)";
    }
  });

  input.addEventListener("focusout", e => {
    if (e.target.id == "email" && e.target.value === "") {
      labelEmail.classList.remove("label-email-anim");
      labelEmail.style.color = "#666666";
    } else if (e.target.id == "message" && e.target.value === "") {
      labelMessage.classList.remove("label-message-anim");
      labelMessage.style.color = "#666666";
    }
  });
});

// Form validation
let submitBnt = document.querySelector(".submit");

submitBnt.addEventListener("submit", e => {
  e.preventdefault();
});
