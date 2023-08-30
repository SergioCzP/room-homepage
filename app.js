"use estrict";

const navModal = document.querySelector(".navigation__modal");
const modalContent = document.querySelector(".navigation__modal-content");
const logo = document.querySelector(".navigation__logo");
const nav = document.querySelector(".navigation__nav");
const navBtn = document.querySelector(".navigation__btn");

// Slider
const slides = [...document.querySelectorAll(".slider__slide")];
const slideImages = slides.filter(
  (slide) => !slide.classList.contains("information__section")
);
const slideInfos = slides.filter((slide) =>
  slide.classList.contains("information__section")
);
const btnLeft = document.querySelector(".btns__left");
const btnRight = document.querySelector(".btns__right");

let curSlide = 0;
const maxSlide = slides.length / 2;

console.log(slides);
console.log(slideImages);
console.log(slideInfos);

const goToSlide = function (slide) {
  slideImages.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
  slideInfos.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

const init = function () {
  goToSlide(0);
};

init();

// Event handlers
btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

navBtn.addEventListener("click", function () {
  navModal.classList.toggle("navigation__modal-active");
  modalContent.classList.toggle("modal-active");
  logo.classList.toggle("logo-active");
  nav.classList.toggle("nav-active");
  if (String(navBtn.firstElementChild.src).includes("close")) {
    navBtn.firstElementChild.src = "images/icon-hamburger.svg";
  } else {
    navBtn.firstElementChild.src = "images/icon-close.svg";
  }
});
