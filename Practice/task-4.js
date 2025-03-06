/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

 */

const findLongestWord = function(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};

const sentence = "I am learning Programming to become a programmer";
const longestWordResult = findLongestWord(sentence);
console.log('Longest word:', longestWordResult); 
