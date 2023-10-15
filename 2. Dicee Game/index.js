'use strict';

console.log("Loaded JS")

var diceVal1;
var diceVal2;

const diceInfo1 = document.querySelectorAll(".diceInfo")[0];
const diceInfo2 = document.querySelectorAll(".diceInfo")[1];
const rollButton = document.querySelector(".rollButton")

function rollDices() {
    diceVal1 = Math.round(Math.random()*6 + 1);
    diceVal2 = Math.round(Math.random()*6 + 1);
    console.log(diceVal1, diceVal2)

    if (diceVal1 > diceVal2) {
        diceInfo1.innerHTML = `Dice number: ${diceVal1}. Dice 1 Wins!`
        diceInfo2.innerHTML = `Dice number: ${diceVal2}. Dice 2 Lost!`
    } else if (diceVal1 < diceVal2) {
        diceInfo1.innerHTML = `Dice number: ${diceVal1}. Dice 1 Lost!`
        diceInfo2.innerHTML = `Dice number: ${diceVal2}. Dice 2 Wins!`  
    } else {
        diceInfo1.innerHTML = `Dice number: ${diceVal1}. A tie!`
        diceInfo2.innerHTML = `Dice number: ${diceVal2}. A tie!` 
    }
}

rollButton.addEventListener('click', rollDices)