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
