/**
 * Task-3:
Write a function to count the number of vowels in a string.

 */

const countVowels = function(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
};

const vowelCountResult = countVowels('Hello World');
console.log('Number of vowels:', vowelCountResult); 
