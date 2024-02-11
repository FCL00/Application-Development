# Arithmetic  Operators
Arithmetic operators are used to perform arithmetic operations on numeric operands.
```
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

// modulo
console.log(num1 % num2); // 1
```

# Assignment Operators:
Assignment operators are used to assign values to variables.
```
let x = 5;

x += 3; // Equivalent to: x = x + 3;
console.log(x); // Outputs: 8

x -= 2; // Equivalent to: x = x - 2;
console.log(x); // Outputs: 6

x *= 4; // Equivalent to: x = x * 4;
console.log(x); // Outputs: 24

x /= 3; // Equivalent to: x = x / 3;
console.log(x); // Outputs: 8

x %= 5; // Equivalent to: x = x % 5;
console.log(x); // Outputs: 3
```
# Comparison Operators
Comparison operators are used to compare two values and return a Boolean result.
```
let a = 5;
let b = "5";

// true (loose equality)
console.log("loose equality: ", a == b); 

// false (strict equality) | same data type and same value
console.log("strict equality: ", a === b); 

// false (loose inequality)
console.log("loose inequality : ", a != b); 

// true (strict inequality) | same data type and same value
console.log(a !== b);

console.log(a > 3); // true
console.log(a < 3); // false
console.log(a >= 5); // true
console.log(a <= 5); // true
```
# Logical Operators
Logical operators are used to combine or manipulate Boolean values.
```
let x = true;
let y = false;

// Output: false (AND) | needs both condition to be true
console.log(x && y); 

// Output: true (OR) | only need one to be true
console.log(x || y); 

// Output: false (NOT) | not true
console.log(!x);
```
# Unary operators
Unary operators are used with a single operand.
```
let num = 5;

console.log(+num); // Unary plus: 5
console.log(-num); // Unary minus: -5
console.log(++num); // Increment: 6
console.log(--num); // Decrement: 5
console.log(!true); // Logical NOT: false
console.log(typeof num); // typeof operator: "number"
```

# Ternary Operator:
```
let age = 20;
let isAdult = (age >= 18) ? "Yes" : "No";

console.log(isAdult); // Outputs: "Yes"
```


<img src="https://preview.redd.it/ternary-operators-are-the-worst-unless-you-indent-them-right-v0-atsw1piantl91.jpg?auto=webp&s=67accd84a911451c63c09a75d02045220d6b6db5" alt="Meme"/>

<img src="https://user-images.githubusercontent.com/92839/53663629-15db7c00-3c1b-11e9-8802-473358327dab.png" alt="meme2"/>