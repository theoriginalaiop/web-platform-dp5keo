// File: script.js

// Function to calculate the sum of two numbers
function calculateSum(num1, num2) {
  return num1 + num2;
}

// Function to display a greeting message
function greet(name) {
  console.log(`Hello, ${name}! Welcome to the website.`);
}

// Function to generate a random number between a given range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage of the functions
let result = calculateSum(5, 10);
console.log(`The sum is: ${result}`);

greet("aiop");

let randomNumber = generateRandomNumber(1, 100);
console.log(`Generated random number: ${randomNumber}`);
