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


// // Array of image URLs
// const imageUrls = ["./IMG/animation aquapirate.png", 
// "./IMG/logo 3-03.png",
// "./IMG/IMG_1147-01.png",
// "./IMG/IMG_1420.JPG",
// "./IMG/show equilibre-01.png"]; 

// // Add more images as needed

// let currentIndex = 0;
// const imageElement = document.getElementById("image");

// function changeImage() {
//   // Fade out the current image
//   imageElement.style.opacity = 0;

//   // Wait for the fade out animation to complete
//   setTimeout(() => {
//     // Change the image source
//     imageElement.src = imageUrls[currentIndex];

//     // Increment the index or reset it to 0 if at the end
//     currentIndex = (currentIndex + 1) % imageUrls.length;

//     // Fade in the new image
//     imageElement.style.opacity = 1;
//   }, 5000); // Adjust the duration of the fade out/in animation as needed
// }

// // Initial image change
// changeImage();

// // Set an interval to change the image at regular intervals
// setInterval(changeImage, 5000); // Change image every 3 seconds (adjust as needed)

// function changeImage() {
//   // Remove the fade-in animation class and add the fade-out animation class
//   imageElement.classList.remove("animate-fade-in");
//   imageElement.classList.add("animate-fade-out");

//   // Wait for the fade-out animation to complete
//   setTimeout(() => {
//     // Change the image source
//     imageElement.src = imageUrls[currentIndex];

//     // Remove the fade-out animation class and add the fade-in animation class
//     imageElement.classList.remove("animate-fade-out");
//     imageElement.classList.add("animate-fade-in");

//     // Increment the index or reset it to 0 if at the end
//     currentIndex = (currentIndex + 1) % imageUrls.length;
//   }, 5000); // Adjust the duration of the fade-out/in animation as needed
// }

// ... (remaining code)

// Array of image URLs
const imageUrls = [
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

let currentIndex = 0;
const imageElement = document.getElementById("image");

function changeImageWithFade() {
  // Fade out the current image
  imageElement.style.transition = `opacity 1.5s ease-in-out`;
  imageElement.style.opacity = 0;

  // Wait for the fade-out animation to complete
  setTimeout(() => {
    // Change the image source
    imageElement.src = imageUrls[currentIndex];

    // Increment the index or reset it to 0 if at the end
    currentIndex = (currentIndex + 1) % imageUrls.length;

    // Fade in the new image
    imageElement.style.transition = `opacity 1.5s ease-in-out`;
    imageElement.style.opacity = 1;

    // Wait for 5 seconds before repeating
    setTimeout(changeImageWithFade, 5000); // 5 seconds
  }, 1500); // 1.5 seconds
}

// Initial image change (start with fade-in animation)
imageElement.style.opacity = 0; // Initially set to 0 for fade-in effect
changeImageWithFade(); // Start the process
