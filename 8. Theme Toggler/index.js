'use strict';

const themeChange = document.querySelector(".theme-changer");
const themeChangeImg = document.querySelector(".theme-changer img")
const body = document.querySelector("body")



function handleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle("style-light");
    body.classList.toggle("style-dark");

    themeChange.classList.toggle("style-light");
    themeChange.classList.toggle("style-dark");

    if(body.classList.contains("style-dark")) {
        themeChangeImg.src = "./assets/light-dark/night.png"
    } else if (body.classList.contains("style-light")) {
        themeChangeImg.src = "./assets/light-dark/light.png"
    }
}

themeChange.addEventListener('click', handleTheme)