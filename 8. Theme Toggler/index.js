'use strict';

const themeChange = document.querySelector(".theme__icon");
const themeInfo = document.querySelector(".theme__text");
const body = document.querySelector("body")

let isLight = true;

function handleTheme() {
    const body = document.querySelector('body');

    if(isLight) {

        themeChange.classList.remove("fa-sun");
        themeChange.classList.add("fa-moon")

        body.classList.remove("style-light");
        body.classList.add("style-dark");

        themeInfo.innerHTML = "You are now on dark mode."

        isLight = false;

    } else if (!isLight) {
        themeChange.classList.remove("fa-moon");
        themeChange.classList.add("fa-sun");

        body.classList.add("style-light");
        body.classList.remove("style-dark");

        themeInfo.innerHTML = "You are now on light mode."
        isLight = true;
    }
}

themeChange.addEventListener('click', handleTheme)