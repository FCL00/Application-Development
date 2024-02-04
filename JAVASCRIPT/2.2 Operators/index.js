//=========================== Arithmetic  Operators ==================================

let num1 = 10;
let num2 = 3;

// addition
console.log(num1 + num2); // 13

//  substraction
console.log(num1 - num2); // 7

//  mutiplications
console.log(num1 * num2); // 30

// division
console.log(num1 / num2); // 3.3333...

// remainder
console.log(num1 % num2); // 1

//=========================== Comparison Operators ==================================
let a = 5;
let b = "5";

console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality) | same data type and same value
console.log(a != b); // false (loose inequality)
console.log(a !== b); // true (strict inequality) | same data type and same value

console.log(a > 3); // true
console.log(a < 3); // false
console.log(a >= 5); // true
console.log(a <= 5); // true

//=========================== logical Operators ==================================
let x = true;
let y = false;

console.log(x && y); // false (AND) | needs both condition to be true
console.log(x || y); // true (OR) | only need one to be true
console.log(!x); // false (NOT) | not true

//=========================== Ternary Operator ==================================
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";

console.log(message);
