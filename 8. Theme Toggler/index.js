'use strict';

const themeChange = document.querySelector(".theme-changer");
const themeChangeImg = document.querySelector(".theme-changer img")
const body = document.querySelector("body")



function handleTheme() {
    const body = document.querySelector('body');
    let isLight = true;


    if(isLight) {

        themeChange.classList.remove("style-dark");
        themeChange.classList.add("style-light");

        body.classList.remove("style-light");
        body.classList.add("style-dark");

        themeChangeImg.src = "./light-dark/night.png"

    } else if (!isLight) {
        themeChange.classList.remove("style-dark");
        themeChange.classList.add("style-light");

        body.classList.add("style-light");
        body.classList.remove("style-dark");

        themeChangeImg.src = "./light-dark/dark.png"
    }
}

themeChange.addEventListener('click', handleTheme)