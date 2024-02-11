// Control Flow Exercise Solution





































































// 1. Check if a number is even or odd and log the result.
let number = 15;
if (number % 2 === 0) {
    console.log("1. The number is even.");
} else {
    console.log("1. The number is odd.");
}

// 2. Determine the grade based on the score and log the result.
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("2. The grade is:", grade);

// 3. Use a switch statement to determine the day name based on the day number and log the result.
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log("3. The day is:", dayName);

// 4. Use a for loop to log the numbers from 1 to 5.
console.log("4. Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}