'use strict';

/**
 * Generates a number between 1 to 20.
 * @returns {number} an integer number.
 */
let getRandomNumber = () => {
    return Math.trunc((Math.random() * 20) + 1);
};

let secretNumber = getRandomNumber();
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const setScore = function(score) {
    document.querySelector('.score').textContent = score;
};

const resetScore = function() {
    score = 20;
};

const setHighScore = (score) => {
    document.querySelector('.highscore').textContent = score;
};

const setSecretNumber = (content) => {
    document.querySelector('.number').textContent = content;
};

const setBackgroundColor = (color) => {
    document.querySelector('body').style.backgroundColor = color;
};

const setSecretNumberBoxWidth = (rem) => {
    document.querySelector('.number').style.width = rem;
};

const getIntegerGuessValue = () => {
    return Number(document.querySelector('.guess').value);
};

const resetGuessValue = () => {
    document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = getIntegerGuessValue();

    if (guess === 0) {
        displayMessage('⛔️ No Number!');
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            setScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            setScore(0);
        }
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        setSecretNumber(secretNumber);

        setBackgroundColor('#60b347');
        setSecretNumberBoxWidth('30rem');

        if (score > highscore) {
            highscore = score;
            setHighScore(highscore);
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    resetScore();
    secretNumber = getRandomNumber();
    
    displayMessage('Start guessing...');
    setScore(score);
    setSecretNumber('?');
    resetGuessValue();
    
    setSecretNumberBoxWidth('15rem');
    setBackgroundColor('#222');
});