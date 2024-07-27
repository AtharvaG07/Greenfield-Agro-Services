function flipCard() {
    var profileCard = document.getElementById("profileCard");
    profileCard.classList.add("flip");
    profileCard.querySelector(".flip-button-front").style.display = "none";
    profileCard.querySelector(".flip-button-back").style.display = "block";
  }

  function unflipCard() {
    var profileCard = document.getElementById("profileCard");
    profileCard.classList.remove("flip");
    profileCard.querySelector(".flip-button-front").style.display = "block";
    profileCard.querySelector(".flip-button-back").style.display = "none";

    // Pause the video when unflipping the card
    var video = profileCard.querySelector("video");
    if (video) {
      video.pause();
    }
  }

// marquee images 
  function pauseMarquee() {
    document.querySelector('marquee').stop();
}

function resumeMarquee() {
    document.querySelector('marquee').start();
}

function popImage(element) {
    element.style.transform = 'scale(1.2)';
}

function resetImage(element) {
    element.style.transform = 'scale(1)';
}