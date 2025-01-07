const fadeContainer = document.querySelector('.image-fade-container');
const images = fadeContainer.querySelectorAll('.fade-image');
let currentIndex = 0;

function fadeImages() {
    images[currentIndex].style.opacity = 0; // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    images[currentIndex].style.opacity = 1; // Show next image
}

let interval;

fadeContainer.addEventListener('mouseover', () => {
    interval = setInterval(fadeImages, 2000); // Start fading on hover
});

fadeContainer.addEventListener('mouseout', () => {
    clearInterval(interval); // Stop fading on hover out
});
