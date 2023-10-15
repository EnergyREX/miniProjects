'use strict';

const guessButton = document.querySelector(".btn");
const titleElement = document.querySelector(".title");

const scoreElem = document.querySelector(".score");
const hiScoreElem = document.querySelector(".hiScore");

var score = 200;
var hiScore = 0;

function generateRandomNumber() {
    return Math.round(Math.random()*19);
}

let randomNumber = Math.round(Math.random()*20+1);
console.log(randomNumber);

function checkIsHigherScore() {
    if (score > hiScore) {
        return hiScore = score;
    } else {
        return hiScore;
    }
}

function isTheNumber() {
    let userInput = document.querySelector(".usr-input").value;
    if (randomNumber == userInput) {
        console.log("You won! It's the number");
        hiScore = checkIsHigherScore();
        titleElement.innerHTML = `You won! It's the number ${userInput}`
        hiScoreElem.innerHTML = `Your High Score: ${hiScore}`
    } else if (randomNumber > userInput) {
        console.log("It's a higher number!")
        titleElement.innerHTML = `It's a higher number!`
        score -= 20;
        scoreElem.innerHTML = `Your Score: ${score}`
    } else if (randomNumber < userInput) {
        console.log("It's a lower number!")
        titleElement.innerHTML = `It's a lower number!`
        score -= 20;
        scoreElem.innerHTML = `Your Score: ${score}`
    }
}

guessButton.addEventListener('click', isTheNumber);