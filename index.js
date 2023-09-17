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
    const fadeInDuration = 1500; // 1 second
    const fadeOutDuration = 1500; // 1 second
    const pauseDuration = 3000; // 2 seconds
    const totalImages = images.length;
    let currentIndex = 0;

    const imageElement = document.getElementById('image');

    function fadeInImage(index) {
      imageElement.src = images[index];
      imageElement.style.opacity = '1';
      setTimeout(() => {
        if (imageElement.style.opacity === '1') {
          fadeOutImage(index);
        }
      }, pauseDuration);
    }

    function fadeOutImage(index) {
      imageElement.style.opacity = '0';
      setTimeout(() => {
        if (imageElement.style.opacity === '0') {
          currentIndex = (currentIndex + 1) % totalImages;
          fadeInImage(currentIndex);
        }
      }, fadeOutDuration);
    }

    fadeInImage(currentIndex);