/**
 * Task-5:
Generate a random number between 10 to 20.

 */

const generateRandomNumber = function() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
};

const randomNumber = generateRandomNumber();
console.log('Random number between 10 and 20:', randomNumber);
