'use strict';

const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

const themeChange = document.querySelector(".theme-changer");
const themeChangeImg = document.querySelector(".theme-changer img")
const bodySelector = document.querySelectorAll('body');

const data = [
    {
        "id": "1",
        "name": "Juan Antonio",
        "pfp": "./assets/pfp1.jpeg",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu neque ac ligula pellentesque sagittis. Fusce in erat venenatis, feugiat ipsum vel, congue dui. Nullam condimentum dignissim tortor et consequat."
    },
    {
        "id": "2",
        "name": "Alba Morales",
        "pfp": "./assets/pfp2.jpeg",
        "review": "The customer is very important, the customer will be followed by the customer. Neither football nor ligula are used for shooting. Fusce in erat venenatis, feugiat himself or, congue dui. No sauce dignissim tortor and result."
    },
    {
        "id": "3",
        "name": "Fernando Gonzalez",
        "pfp": "./assets/pfp3.jpeg",
        "review": "El servicio al cliente es importante, el servicio al cliente es importante. Por o no el fútbol con flechas en la garganta. Fusce fue envenenado, pero ni el propio Feugiat ni él se encontraban en casa. No hay inversión inmobiliaria."
    }
]

const sliderTitle = document.querySelector(".slider-title");
const usrPfp = document.querySelector(".user-pfp");
const usrReview = document.querySelector(".user-review");

let index = 0;

function handleChange() {
    sliderTitle.innerHTML = data[index].name;
    usrPfp.src = data[index].pfp;
    usrReview.innerHTML = data[index].review;
}

function handleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle("style-light");
    body.classList.toggle("style-dark");

    nextBtn.classList.toggle("style-light")
    nextBtn.classList.toggle("style-dark");

    prevBtn.classList.toggle("style-light")
    prevBtn.classList.toggle("style-dark");

    themeChange.classList.toggle("style-light");
    themeChange.classList.toggle("style-dark");

    if(body.classList.contains("style-dark")) {
        themeChangeImg.src = "./assets/light-dark/night.png"
    } else if (body.classList.contains("style-light")) {
        themeChangeImg.src = "./assets/light-dark/light.png"
    }
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % data.length;
    handleChange();
});
prevBtn.addEventListener('click', () => {
    index = (index - 1 + data.length) % data.length;
    handleChange();
});

themeChange.addEventListener('click', handleTheme);

handleChange();
