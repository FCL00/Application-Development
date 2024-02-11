// Callback Function Exercise

// 1. Create a function called "calculate" that takes two numbers and pass a callback function as arguments.
//    The callback function should perform a mathematical operation (e.g., add, subtract, multiply, divide) on the two numbers.
function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

// 2. Define callback functions for addition, subtraction, multiplication, and division.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// 3. Test the "calculate" function with different operations and log the results.
console.log("Addition:", calculate(5, 3, add));
console.log("Subtraction:", calculate(5, 3, subtract));
console.log("Multiplication:", calculate(5, 3, multiply));
console.log("Division:", calculate(5, 3, divide));