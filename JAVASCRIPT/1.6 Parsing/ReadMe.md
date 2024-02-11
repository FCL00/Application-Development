# JavaScript Parsing
In JavaScript, parsing refers to converting a string into a different data type, such as a number or a date. Here's how you can perform parsing in JavaScript:

## Parsing to Integer:
To parse a string into an integer, you can use the parseInt() function. 
```
let integerString = "10";
let integerValue = parseInt(integerString);
console.log(integerValue); // Outputs: 10
```

## Parsing to Float:
To parse a string into a floating-point number, you can use the `parseFloat()` function.

```
let floatString = "3.14";
let floatValue = parseFloat(floatString);
console.log(floatValue); // Outputs: 3.14
```

## Parsing Dates:
To parse a string into a Date object, you can use the `Date` constructor.

```
let dateString = "2022-01-15";
let dateObject = new Date(dateString);
console.log(dateObject); 
// Outputs: Sat Jan 15 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
```

## Parsing Integer to String:
To parse a int into string.
```
let str = 10 + "";
console.log(str);
```

## String to Number Conversion 
When a string is used in a numeric context (e.g., arithmetic operations, comparisons with numbers), JavaScript attempts to convert it to a number.
```
let numericString = "10";
let result = numericString * 2; // "10" is automatically converted to 10
console.log(result); // Outputs: 20
```

## String Concatenation
If one of the operands of the + operator is a string, JavaScript converts the other operand to a string and concatenates them.

```
let concatenationResult = "Hello " + "World"; 
// Both operands are strings
console.log(concatenationResult); 
// Outputs: "Hello World"

let stringValue = "5";
// One operand is a string, so 2 is converted to "2" and concatenated
let additionResult = stringValue + 2; 
// Outputs: "52"
console.log(additionResult); 
```

## Number to String Conversion
When a number is used in a string context (e.g., using it with string concatenation), JavaScript converts it to a string.
```
let numberValue = 5;
// numberValue is automatically converted to "5"
let stringConcatenation = "Value: " + numberValue; 
// Outputs: "Value: 5"
console.log(stringConcatenation); 
```