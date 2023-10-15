'use strict';

const themeChange = document.querySelector(".theme-changer");
const themeChangeImg = document.querySelector(".theme-changer img")
const body = document.querySelector("body")

let isLight = true;

function handleTheme() {
    const body = document.querySelector('body');

    if(isLight) {

        themeChange.classList.remove("style-light");
        themeChange.classList.add("style-dark");

        body.classList.remove("style-light");
        body.classList.add("style-dark");

        themeChangeImg.src = "./light-dark/night.png"
        isLight = false;

    } else if (!isLight) {
        themeChange.classList.remove("style-dark");
        themeChange.classList.add("style-light");

        body.classList.remove("style-light");
        body.classList.remove("style-dark");

        themeChangeImg.src = "./light-dark/light.png"
        isLight = true;
    }
}

themeChange.addEventListener('click', handleTheme)