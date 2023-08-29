"use estrict";

const navModal = document.querySelector(".navigation__modal");
const modalContent = document.querySelector(".navigation__modal-content");
const logo = document.querySelector(".navigation__logo");
const nav = document.querySelector(".navigation__nav");
const navBtn = document.querySelector(".navigation__btn");

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
