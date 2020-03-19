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
let submit = document.querySelector(".form");

formInput.forEach(input => {
  input.addEventListener("focus", e => {
    if (e.target.id == "email") {
      labelEmail.classList.add("label-email-anim");
      labelEmail.style.color = "rgb(40, 40, 40)";
      labelEmail.style.fontSize = "13px";
    } else {
      labelMessage.classList.add("label-message-anim");
      labelMessage.style.color = "rgb(40, 40, 40)";
      labelMessage.style.fontSize = "13px";
    }
  });

  input.addEventListener("focusout", e => {
    if (e.target.id == "email" && e.target.value === "") {
      labelEmail.classList.remove("label-email-anim");
      labelEmail.style.color = "#666666";
      labelEmail.style.fontSize = "1rem";
    } else if (e.target.id == "message" && e.target.value === "") {
      labelMessage.classList.remove("label-message-anim");
      labelMessage.style.color = "#666666";
      labelMessage.style.fontSize = "1rem";
    }
  });
});

// Form validation

const patterns = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

// Type Writing script

const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];

  //Check if deleting
  if (this.isDeleting) {
    //Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  //Check if word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    //Make a pause at end
    typeSpeed = this.wait;
    //Set delet to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    //Move to the next word
    this.wordIndex++;
    // Pasue before start typing
    typeSpeed = 500;
  }

  console.log(fullTxt);
  setTimeout(() => this.type(), typeSpeed);
};

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

//Init App
function init() {
  const txtElement = document.querySelector(".website");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWritter

  new TypeWriter(txtElement, words, wait);
}
