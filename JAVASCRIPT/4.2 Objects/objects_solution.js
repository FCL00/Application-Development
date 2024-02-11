// Object Exercise Solution

















































// 1. Create an object representing a person with properties: name, age, and city.
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// 2. Add a new property "job" to the person object.
person.job = "Developer";

// 3. Access and log the value of the "name" property.
console.log("Name:", person.name);

// 4. Create an object representing a car with properties: name, model, and year.
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// 5. Add a method "start" to the car object that logs "Engine started!".
car.start = function() {
    console.log("Engine started!");
};

// 6. Access and invoke the "start" method of the car object.
car.start();

// 7. Create an object representing a rectangle with properties: width and height.
let rectangle = {
    width: 10,
    height: 5
};

// 8. Destructure the rectangle object to extract its width and height properties into variables.
let { width, height } = rectangle;

// 9. Log the width and height variables.
console.log("Width:", width);
console.log("Height:", height);