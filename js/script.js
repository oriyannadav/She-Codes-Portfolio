const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerButton.addEventListener("click", () => {
    mobileNav.classList.toggle("display-none")
})

const video = document.querySelector("video");
// Slow it to 55% speed
video.playbackRate = 0.55;