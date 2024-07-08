// 1. STRING MANIPULATION FUNCTIO
//A. Reversing a string
function reverseString(str) {

    return str.split("").reverse().join("");
}
reverseString("hello");
console.log(reverseString("hello"));

// function reverseString(str) {
//     // Step 1: Convert the string into an array of characters
//     let charArray = str.split('');

//     // Step 2: Reverse the array of characters
//     let reversedArray = charArray.reverse();

//     // Step 3: Convert the reversed array back to a string
//     let reversedStr = reversedArray.join('');

//     // Step 4: Return the reversed string
//     return reversedStr;
// }

// // Example usage:
// let originalString = "Hello, world!";
// let reversed = reverseString(originalString);
// console.log(reversed); // Output: "!dlrow ,olleH"





// B. Finding the length of a string
let text = "Find the length of this sentence!";
let length = text.length;

console.log(text.length)

// document.getElementById("demo").innerHTML = length;




//C. Capitalizing the first letter of each word
function capitalizeSentence(sentence) {
    // Step 1: Split the sentence into an array of words
    let words = sentence.split(' ');

    // Step 2: Iterate through the array and capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        // Split the word into first letter and rest of the letters
        let firstLetter = words[i].charAt(0).toUpperCase();
        let restOfWord = words[i].slice(1).toLowerCase();

        // Concatenate the capitalized first letter with the rest of the word
        words[i] = firstLetter + restOfWord;
    }

    // Step 3: Join the words back into a sentence
    let capitalizedSentence = words.join(' ');

    // Step 4: Return the capitalized sentence
    return capitalizedSentence;
}

// Example usage:
let sentence = "hello world! this is a test sentence.";
let capitalized = capitalizeSentence(sentence);
console.log(capitalized); // Output: "Hello World! This Is A Test Sentence."





//2. ARRAY FUNCTIONS

// A. Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// Maximun

let numbers = [10, 5, 8, 2, 7, 6, 9, 12, 50, 28];

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;

};

console.log("Maximum:", findMax(numbers));


// Minimum
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;

};

console.log("Minimum:", findMin(numbers));


//B. Sum

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;

};

console.log("Sum:", sumArray(numbers));



//C. Filter an Array

function filterArray(arr, condition) {
    return arr.filter(condition);
}

let filteredNumbers = filterArray(numbers, num => num % 2 === 0);

console.log(filteredNumbers);  


// Filter out strings longer than 3 characters
let words = ['apple', 'banana', 'orange', 'pear', 'grape'];

let filteredWords = filterArray(words, word => word.length > 3);

console.log(filteredWords);  // Output: ['apple', 'banana', 'orange']
    



//3. MATHEMATICAL FUNCTIONS

// A. Factorial
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

    console.log(factorial(10));
    console.log(factorial(5));



// B. Prime number Check
function isPrime(number) {
    // 1 and numbers less than or equal to 1 are not prime
    if (number <= 1) {
        return false;
    }
    
    // 2 and 3 are prime numbers
    if (number <= 3) {
        return true;
    }
    
    // Check if number is divisible by 2 or 3
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    
    // Check for prime numbers in the form of 6k ± 1
    // Optimized trial division by checking up to sqrt(number)
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    
    return true;
}

console.log (isPrime(9));
console.log (isPrime(7));
console.log (isPrime(39));
console.log (isPrime(2));



// C. Fibunacci Sequence
function fibonacciSequence(numTimes) {
    if (numTimes <= 0) {
        return [];
    }
    
    let sequence = [0, 1];  // Initialize the sequence with the first two Fibonacci numbers
    
    // Generate Fibonacci sequence up to numTerms terms
    while (sequence.length < numTimes) {
        let nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextFib);
    }
    
    return sequence;
};

console.log(fibonacciSequence(20));





