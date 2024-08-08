let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function moveToNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlidePosition();
}

function moveToPrevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    const newTransformValue = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.carousel-container').style.transform = newTransformValue;
}
