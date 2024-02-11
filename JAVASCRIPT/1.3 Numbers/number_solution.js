// Solution: Working with numbers







































// 1. format the PI into 2 decimal places
let PI = 3.1415926535;
console.log("1. PI:", PI.toFixed(2));

// 2. Parse the string "100" to an integer.
let parsedInteger = "100";
console.log("2. Parsed integer:", parseInt(parsedInteger));

// 3. Parse the string "3.14" to a float.
let parsedFloat = "3.14";
console.log("3. Parsed float:", parsedFloat(parsedFloat));

// 4. Check if the value of 10 is a finite number.
const num1 = 10;
console.log("4. Is 10 a finite number?", isFinite(10));

// 5. Check if the value of Infinity is a finite number.
console.log("5. Is Infinity a finite number?", isFinite(Infinity));

// 6. Check if the value of NaN is NaN.
const num3 = isNaN(NaN);
console.log("6. Is NaN NaN?", num3);