/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0

 */

const countOccurrences = function(numbers, target) {
    let count = 0;
    for (const number of numbers) {
        if (number === target) {
            count++;
        }
    }
    return count;
};

const numbersArray = [5, 6, 11, 12, 98, 5];
const targetNumber1 = 5;
const targetNumber2 = 25;

const countResult1 = countOccurrences(numbersArray, targetNumber1);
console.log(`Occurrences of ${targetNumber1}:`, countResult1); 

const countResult2 = countOccurrences(numbersArray, targetNumber2);
console.log(`Occurrences of ${targetNumber2}:`, countResult2); 
