'use strict';

const btnNumbers = document.querySelectorAll(".numbers__number");
const btnOperators = document.querySelectorAll(".numbers__number--operator");
const btnReset = document.querySelector(".numbers__number--c");
const btnEquals = document.querySelector(".numbers__number--equals");
const inputArea = document.querySelector(".calculator__inputArea");

btnNumbers.forEach((num) => num.addEventListener('click', () => {
    inputArea.value = inputArea.value + num.innerHTML;
}));

btnOperators.forEach((operator) => operator.addEventListener('click', () => {
    inputArea.value = inputArea.value + operator.innerHTML;
}));

btnReset.addEventListener('click', () => {
    inputArea.value = " ";
    console.log("Cleared!")
})

btnEquals.addEventListener('click', () => {
    try {
        let inputValue = inputArea.value;
        console.log(typeof inputValue); // Añadir esto para depuración
        let operation = eval(inputValue);
        console.log(`The result is ${operation}`);
        inputArea.value = operation;
    } catch (error) {
        console.error(`Error: ${error}`);
        inputArea.value = "Error";
    }
});
