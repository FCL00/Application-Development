// Solution: Manipulation String







































// Define a string
let str = "   Hello, welcome to JavaScript exercises!   ";

// 1. Print the length of the string
console.log("1. Length of the string:", str.length);

// 2. Print the character at index 10
console.log("2. Character at index 10:", str.charAt(10));

// 3. Concatenate the string with another string
let additionalString = " Let's practice string methods.";
let concatenatedStr = str.concat(additionalString);
console.log("3. Concatenated string:", concatenatedStr);

// 4. Find the index of the word "JavaScript"
let index = str.indexOf("JavaScript");
console.log("4. Index of 'JavaScript':", index);

// 5. Extract the substring from index 15 to 25
let substring = str.substring(15, 25);
console.log("5. Substring:", substring);

// 6. Convert the string to uppercase
let uppercaseStr = str.toUpperCase();
console.log("6. Uppercase string:", uppercaseStr);

// 7. Trim the whitespace from both ends of the string
let trimmedStr = str.trim();
console.log("7. Trimmed string:", trimmedStr);

// 8. Replace "exercises" with "problems"
let replacedStr = str.replace("exercises", "problems");
console.log("8. Replaced string:", replacedStr);