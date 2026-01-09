const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    // Reset index if out of bounds
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    // Update slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Requirement: Next / Previous buttons
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer(); // Restart timer on click
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
});

// Optional: Dots navigation logic
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        resetTimer();
    });
});

// Requirement: Auto-slide every 3 seconds
function startTimer() {
    slideInterval = setInterval(nextSlide, 3000);
}

function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}

// Initialize
startTimer();