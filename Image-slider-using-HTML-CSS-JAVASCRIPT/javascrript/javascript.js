let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function prevSlide() {
    slideIndex--;
        if (slideIndex < 0) {
    slideIndex = slides.length - 1;
    }
    showSlide();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
    slideIndex = 0;
    }
    showSlide();
}

function showSlide() {
    slides.forEach((slide, index) => {
    if (index === slideIndex) {
        slide.style.display = 'block';
    } else {
        slide.style.display = 'none';
    }
});
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide();