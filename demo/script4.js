let currentSlide = 0;

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const header = document.getElementById("header");
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-item');
    const button = document.querySelector('.button');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
        navbar.classList.add("scrolled", "centered");
        navItems.forEach(item => item.style.marginRight = "20px");
        button.style.opacity = "0";
        button.style.width = "0"; // Hide the button and reduce its space
        button.style.pointerEvents = "none"; // Disable button interaction
    } else {
        header.classList.remove("scrolled");
        navbar.classList.remove("scrolled", "centered");
        navItems.forEach(item => item.style.marginRight = "35px");
        button.style.opacity = "1";
        button.style.width = "auto"; // Restore the button and its space
        button.style.pointerEvents = "auto"; // Enable button interaction
    }
}



// Add smooth scroll animation
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add smooth scroll to the 'Learn More' button
// const learnMoreButton = document.querySelector('.carousel-button');
// learnMoreButton.addEventListener('click', function () {
//     smoothScroll('#yourTargetElementID', 1000); 
// });

const videoElements = document.querySelectorAll('.testimonial-video');

videoElements.forEach(video => {
    const parentCard = video.closest('.testimonial-card');
    parentCard.addEventListener('mouseenter', () => {
        video.controls = false;
        video.play();
    });

    parentCard.addEventListener('mouseleave', () => {
        video.pause();
        video.controls = true;
    });
});
