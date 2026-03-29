const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("open");

    const expanded = burgerBtn.classList.contains("active");
    burgerBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerBtn.classList.remove("active");
      mobileMenu.classList.remove("open");
      burgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  if (dots[index]) dots[index].classList.add("active");

  currentSlide = index;
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = Number(dot.dataset.slide);
    showSlide(slideIndex);
  });
});

showSlide(0);