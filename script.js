const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval;



var  sliderNav = function(manual) {


    slides.forEach((slide)=> {
     slide.classList.remove("active");
    });

     slides[manual].classList.add("active");
     currentSlide = manual;
 }


// Function to move to the next slide automatically
const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderNav(currentSlide);
};



// Start auto-play with a set interval
slideInterval = setInterval(nextSlide, 4000); // Change slides every 3 seconds

// Function to reset the interval after manual navigation
function resetInterval() {
    clearInterval(slideInterval); // Clear the existing interval
    slideInterval = setInterval(nextSlide, 3000); // Restart the interval
}









//   review



const reviews = document.querySelector('.reviews');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateReviewPosition() {
    const reviewWidth = document.querySelector('.review').clientWidth;
    reviews.style.transform = `translateX(${-index * reviewWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < 2) {
        index++;
        updateReviewPosition();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateReviewPosition();
    }
});

window.addEventListener('resize', updateReviewPosition);
