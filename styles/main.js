const fadeContainer = document.querySelector('.image-fade-container');
const images = fadeContainer.querySelectorAll('.fade-image');
let currentIndex = 0; 

function fadeImages() {
    images[currentIndex].style.opacity = 0; 
    currentIndex = (currentIndex + 1) % images.length; 
    images[currentIndex].style.opacity = 1; 
}

let interval;

fadeContainer.addEventListener('mouseover', () => {
    interval = setInterval(fadeImages, 2000); 
});

fadeContainer.addEventListener('mouseout', () => {
    clearInterval(interval);
});
