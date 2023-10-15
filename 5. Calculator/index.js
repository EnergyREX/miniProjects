'use strict';

const btnOperators = document.querySelectorAll(".btn .operator")
const btnNumbers = document.querySelectorAll(".btn .number")
const inputNumbers = document.querySelector(".input-area");



inputNumbers.addEventListener('keypress', () => {
    const pressedKey = event.key;
    if (pressedKey === '1' || btnOperators[0]) {
        inputNumbers.innerHTML = inputNumbers.innerHTML + '1';
    }
})
