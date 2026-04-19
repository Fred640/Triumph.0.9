const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const header = document.querySelector(".header");

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("open");

    const expanded = burgerBtn.classList.contains("active");
    burgerBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      burgerBtn.classList.remove("active");
      mobileMenu.classList.remove("open");
      burgerBtn.setAttribute("aria-expanded", "false");

      if (!href || !href.startsWith("#")) {
        return;
      }

      event.preventDefault();

      const target = document.querySelector(href);
      if (!target) return;

      const headerHeight = header ? header.offsetHeight : 90;
      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

      setTimeout(() => {
        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      }, 250);
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      const headerHeight = header ? header.offsetHeight : 90;
      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
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