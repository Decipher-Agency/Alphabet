//NAVBAR HAMBURGER BUTTON
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button[aria-controls='mobile-menu']");
  const menu = document.getElementById("mobile-menu");

  button.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true" || false;

  this.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("hidden");
  });
});


// ! IMAGE JAVASCRIPT IN ABOUT SECTION

const images = [
  "./IMG/animation aquapirate.png" ,
  "./IMG/image-1.png" ,
  "./IMG/image-2.png" ,
  "./IMG/image-3.png" ,
  "./IMG/image-14.png" ,
  "./IMG/image-5.png" ,
  "./IMG/image-13.png" ,
  "./IMG/image-7.png" ,
  "./IMG/image-8.png" ,
];
const fadeInDuration = 1500; // 1,5 second
const fadeOutDuration = 1500; // 1,5 second
const pauseDuration = 3000; // 3 seconds
const totalImages = images.length;
let currentIndex = 0;

function fadeInImage(index) {
  document.querySelector('.fade-image').src = images[index];
  document.querySelector('.fade-image').style.opacity = '1';
  setTimeout(() => {
    fadeOutImage(index);
  }, pauseDuration);
}

function fadeOutImage(index) {
  document.querySelector('.fade-image').style.opacity = '0';
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    fadeInImage(currentIndex);
  }, fadeOutDuration);
}

fadeInImage(currentIndex);