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

function toggleNavbar() {
    var navbarItems = document.getElementById("navbarItems");
    navbarItems.style.display = (navbarItems.style.display === "flex") ? "none" : "flex";
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
// Function to check if an element is in view
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to update the position of the footer-strip
  function updateFooterStripPosition() {
    var footer = document.querySelector('.footer');
    var footerStrip = document.querySelector('.footer-strip');
  
    if (isInViewport(footer)) {
      footerStrip.style.position = 'fixed';
      footerStrip.style.bottom = '0';
    } else {
      footerStrip.style.position = 'relative';
    }
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', function() {
    updateFooterStripPosition();
  });
  
  // Initial position check when the page loads
  window.addEventListener('load', function() {
    updateFooterStripPosition();
  });
  