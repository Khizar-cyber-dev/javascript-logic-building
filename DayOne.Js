/*
 * ============================================================
 * DAY 01 — JAVASCRIPT LOGIC BUILDING
 * ============================================================
 *
 * Focus:
 * - Strings
 * - Loops
 * - Conditions
 * - Array manipulation
 * - Maps
 * - Basic algorithms
 * - Problem-solving without relying on shortcuts
 *
 * Goal:
 * Understand the logic behind each problem instead of
 * memorizing solutions.
 * ============================================================
 */


/* ============================================================
   1. PLAIN PALINDROME CHECKER
   ============================================================ */

/*
 * A palindrome reads the same forward and backward.
 *
 * Example:
 * "madam"  → true
 * "hello"  → false
 */

function isPalindrome(string) {
    const value = string.toLowerCase().trim();
    const reversed = value.split("").reverse().join("");

    return value === reversed;
}


// --------------------
// Palindrome with Loop
// --------------------

function isPalindromeLoop(string) {
    const value = string.toLowerCase().trim();
    const length = value.length;

    let reversed = "";

    for (let i = length - 1; i >= 0; i--) {
        reversed += value[i];
    }

    return value === reversed;
}

// Examples:
// console.log(isPalindrome("madam"));       // true
// console.log(isPalindromeLoop("Racecar")); // true



/* ============================================================
   2. NUMERIC FIZZBUZZ
   ============================================================ */

/*
 * Print numbers from 1 to N.
 *
 * Multiples of 3 → "Fizz"
 * Multiples of 5 → "Buzz"
 * Multiples of 3 and 5 → "FizzBuzz"
 * Otherwise → the number itself
 */

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example:
// fizzBuzz(15);



/* ============================================================
   3. STRING ANAGRAM DETECTOR
   ============================================================ */

/*
 * Two strings are anagrams when they contain the same
 * characters with the same frequency.
 *
 * Example:
 * "listen"  +  "silent"   → true
 * "triangle" + "integral" → true
 */


/*
 * -------------------------
 * Approach 1 — Using Sort
 * -------------------------
 */

function areAnagrams(str1, str2) {
    const normalize = (str) =>
        str.toLowerCase().trim().split("").sort().join("");

    return normalize(str1) === normalize(str2);
}


/*
 * -----------------------------------------
 * Approach 2 — Using Maps and Loops
 * -----------------------------------------
 *
 * No sort() is used here.
 */

function areAnagramsLoop(str1, str2) {
    const normalize = (str) => str.toLowerCase().trim();

    const mapStr1 = new Map();
    const mapStr2 = new Map();


    // Count characters in the first string
    for (let char of normalize(str1)) {
        if (mapStr1.has(char)) {
            mapStr1.set(char, mapStr1.get(char) + 1);
        } else {
            mapStr1.set(char, 1);
        }
    }


    // Count characters in the second string
    for (let char of normalize(str2)) {
        if (mapStr2.has(char)) {
            mapStr2.set(char, mapStr2.get(char) + 1);
        } else {
            mapStr2.set(char, 1);
        }
    }


    // Different number of unique characters
    // means they cannot be anagrams.
    if (mapStr1.size !== mapStr2.size) {
        return false;
    }


    // Compare character frequencies
    for (let [char, count] of mapStr1) {
        if (mapStr2.get(char) !== count) {
            return false;
        }
    }

    return true;
}

// Examples:
// console.log(areAnagrams("listen", "silent"));         // true
// console.log(areAnagramsLoop("Triangle", "Integral")); // true



/* ============================================================
   4. MISSING NUMBER FINDER
   ============================================================ */

const numberLoop = [10, 4, 2, 8, 7, 1];


/*
 * ------------------------------------------------------------
 * Approach 1 — Finding a Missing Number in a Sorted List
 * ------------------------------------------------------------
 *
 * This approach relies on the numbers being sorted.
 */

for (let i = 1; i <= numberLoop.length + 1; i++) {
    if (i !== numberLoop[i - 1]) {
        // console.log("Missing Number:", i);
        break;
    }
}


/*
 * ------------------------------------------------------------
 * Approach 2 — Finding a Missing Number in an Unsorted List
 * ------------------------------------------------------------
 *
 * Calculate:
 *
 * Expected Sum - Actual Sum = Missing Number
 */

let arraySum = 0;
let missingSum = 0;
let theMissingNum = 0;


// Calculate the actual sum of the array
for (let i = 1; i <= numberLoop.length; i++) {
    arraySum += numberLoop[i - 1];
}


// Calculate the expected sum from 1 to N
for (let i = 1; i <= numberLoop.length + 1; i++) {
    missingSum += i;
}


theMissingNum = missingSum - arraySum;

// Examples:
// console.log("Array Sum:", arraySum);
// console.log("Expected Sum:", missingSum);
// console.log("Missing Number:", theMissingNum);



/*
 * ---------------------------------------
 * Approach 3 — Using the Reduce Method
 * ---------------------------------------
 */

function findMissingNumber(arr) {
    const n = arr.length + 1;

    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = arr.reduce(
        (acc, num) => acc + num,
        0
    );

    return expectedSum - actualSum;
}

// Example:
// console.log(findMissingNumber(numberLoop));



/*
 * ------------------------------------------------------------
 * Approach 4 — Finding Multiple Missing Numbers
 * in a Sorted List
 * ------------------------------------------------------------
 */

const max = Math.max(...numberLoop);

let missingNumbers = [];
let missingIndexNumber = 0;


for (let i = 1; i <= max; i++) {
    if (i !== numberLoop[i - 1 - missingIndexNumber]) {
        missingNumbers.push(i);
        missingIndexNumber++;
    }
}

// Example:
// console.log("Missing Numbers:", missingNumbers);



/*
 * ------------------------------------------------------------
 * Approach 5 — Finding Multiple Missing Numbers
 * in an Unsorted List
 * ------------------------------------------------------------
 *
 * Store every number in a Map first.
 * Then check which numbers from 1 to max are missing.
 */

let map = new Map();
let missingNum = [];


// Store all existing numbers in the Map
for (let i = 0; i <= numberLoop.length - 1; i++) {
    map.set(numberLoop[i], 0);
}


// Find numbers that do not exist in the Map
for (let i = 1; i <= max; i++) {
    if (map.get(i) === undefined) {
        missingNum.push(i);
    }
}


// Final result
console.log("Missing Numbers:", missingNum);
