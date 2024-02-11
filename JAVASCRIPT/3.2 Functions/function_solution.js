// Function Exercise Solutions

















































// 1. Create a function called "greet" that logs "Hello, World!" to the console.
function greet() {
    console.log("Hello, World!");
}

// Call the function
greet();

// 2. Create a function called "add" that takes two parameters "a" and "b" and returns their sum.
function add(a, b) {
    return a + b;
}

// Call the function and log the result
console.log("Sum:", add(3, 4));

// 3. Create a function called "fullName" that takes two parameters "firstName" and "lastName" and returns the full name as a string.
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

// Call the function and log the result
console.log("Full Name:", fullName("John", "Doe"));

// 4. Create a function expression called "subtract" that takes two parameters "x" and "y" and returns their difference.
let subtract = function(x, y) {
    return x - y;
};

// Call the function expression and log the result
console.log("Difference:", subtract(10, 7));