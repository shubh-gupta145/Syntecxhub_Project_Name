const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let interval;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Show slide
function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

// Next
nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Prev
prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto Play
function startAutoPlay() {
  interval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);
}

function stopAutoPlay() {
  clearInterval(interval);
}

// Start autoplay
startAutoPlay();

// Pause on hover
document.querySelector(".slider").addEventListener("mouseover", stopAutoPlay);
document.querySelector(".slider").addEventListener("mouseout", startAutoPlay);