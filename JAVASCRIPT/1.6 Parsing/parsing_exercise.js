// 1. Parse the string "10" to an integer.
let integerString = "10";
let integerValue = parseInt(integerString);
console.log("1. Parsed integer:", integerValue);

// 2. Parse the string "3.14" to a floating-point number.
let floatString = "3.14";
let floatValue = parseFloat(floatString);
console.log("2. Parsed float:", floatValue);

// 3. Parse the string "2022-01-15" to a Date object.
let dateString = "2022-01-15";
let dateObject = new Date(dateString);
console.log("3. Parsed Date object:", dateObject);

// 4. Automatically convert the string "5" to a number during multiplication.
let numericString = "5";
let multiplicationResult = numericString * 2;
console.log("4. Multiplication result:", multiplicationResult);

// 5. Automatically convert the string "8.2" to a number during addition.
let additionResult = "8.2" + 2;
console.log("5. Addition result:", additionResult);

// 6. Automatically convert the string "2.5" to a number during division.
let divisionResult = 10 / "2.5";
console.log("6. Division result:", divisionResult);