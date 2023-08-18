"use strict";

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const themeText = document.querySelector(".toggle-text");
const themeIcon = document.querySelector(".mode-icon");
const nav = document.querySelector("nav");
const textBox = document.querySelector(".text-box");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");

const imageMode = function (mode) {
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
};

const toggleDarkLightMode = function (isLight) {
  document.documentElement.setAttribute(
    "data-theme",
    `${isLight ? "light" : "dark"}`
  );
  nav.style.backgroundColor = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = isLight
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  themeText.textContent = isLight ? "Light Mode" : "Dark Mode";
  if (isLight) themeIcon.classList.replace("fa-moon", "fa-sun");
  else themeIcon.classList.replace("fa-sun", "fa-moon");
  isLight ? imageMode("light") : imageMode("dark");
};

const switchTheme = function (event) {
  if (event.target.checked) {
    toggleDarkLightMode(false);
    localStorage.setItem("theme", "dark");
  }
  if (!event.target.checked) {
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(true);
  }
};

toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(false);
  }
  if (currentTheme === "light") toggleDarkLightMode(true);
}
