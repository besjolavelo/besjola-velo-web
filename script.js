document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    let slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };

    const setSlidePositions = () => {
        slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach(setSlidePosition);
    };

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
        moveToSlide(track, currentSlide, prevSlide);
    });

    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const nextSlide = currentSlide.nextElementSibling || slides[0];
        moveToSlide(track, currentSlide, nextSlide);
    });

    window.addEventListener('resize', setSlidePositions);

    slides[0].classList.add('current-slide');
    setSlidePositions();
});
