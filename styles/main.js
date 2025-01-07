const fadeContainer = document.querySelector('.image-fade-container');
const images = fadeContainer.querySelectorAll('.fade-image');
let currentIndex = 0;

function fadeImages() {
    images[currentIndex].style.opacity = 0; // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    images[currentIndex].style.opacity = 1; // Show next image
}

// Start the fading action immediately and repeat every 2 seconds
setInterval(fadeImages, 2000);
