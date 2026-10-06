/*

* ============================================================
* JavaScript Logic Building — Day 02
* ============================================================
*
* Focus:
* * String transformation
* * Tracking values through loops
* * Character classification
* * In-place array manipulation
* * Mathematical iteration
* * Array indexing with .at()
*
* Goal:
* Build problem-solving ability instead of memorizing solutions.
* ============================================================
  */

// ============================================================
// 1. Title Case Sentences
// ============================================================

let sentence = "The quick brown fox jumps over the lazy dog.";

function titleCase(str) {
let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    let upperCaseWord =
        words[i].charAt(0).toUpperCase() + words[i].slice(1);

    words[i] = upperCaseWord;
}

return words.join(" ");


}

console.log(titleCase(sentence));

// ============================================================
// 2. Find the Longest Word in a String
// ============================================================

let sentence2 = "The quick brown fox jumps over the lazy dog.";

function findLongestWord(str) {
let words = str.split(" ");
let longestWord = "";


for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

return longestWord;


}

console.log(findLongestWord(sentence2));

// ============================================================
// 3. Count Vowels & Consonants
// ============================================================

function countVowelsAndConsonants(str) {
const vowels = "aeiou";


let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (vowels.includes(char)) {
        vowelCount++;
    } else if (char >= "a" && char <= "z") {
        consonantCount++;
    }
}

return {
    vowels: vowelCount,
    consonants: consonantCount
};


}

console.log(countVowelsAndConsonants(sentence2));

// ============================================================
// 4. Primitive Array In-Place Reversal
// ============================================================

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArray(arr) {
for (let left = 0; left < arr.length / 2; left++) {


    let right = arr.length - 1 - left;

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

return arr;


}

console.log(reverseArray(array));

// ============================================================
// 5. Factorial Evaluation
// ============================================================

function factorial(n) {
if (n === 0 || n === 1) {
    return 1;
} else if (n < 0) {
    return "Factorial is not defined for negative numbers.";
}

for (let i = n - 1; i >= 1; i--) {
    n *= i;
}

return n;


}

console.log(factorial(5));

// ============================================================
// 6. Array Indexing with .at()
// ============================================================

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(newArray.at(-5)); // Accessing an element from the end using .at()
