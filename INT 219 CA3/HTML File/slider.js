const sliders = document.querySelectorAll(".slider");
const slides = document.querySelectorAll(".slide");
const prevButtons = document.querySelectorAll(".prevBtn");
const nextButtons = document.querySelectorAll(".nextBtn");

// Loop through each slider
sliders.forEach((slider, index) => {
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider(slider, currentIndex);
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider(slider, currentIndex);
  }

  // Add event listeners for next and previous buttons for this slider
  nextButtons[index].addEventListener("click", nextSlide);
  prevButtons[index].addEventListener("click", previousSlide);

  // Initial update for this slider
  updateSlider(slider, currentIndex);
});

function updateSlider(slider, currentIndex) {
  let divider = 3;
  const offset = -currentIndex * (100 / divider);

  slider.style.transform = `translateX(${offset}%)`;
}

