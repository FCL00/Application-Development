# Practice 1:

🚀 Objective:

You are tasked with creating a simple webpage that displays information about different types of fruits. Your goal is to select specific elements from the DOM using JavaScript to achieve the following tasks:

- Use getElementById() to:
  - Retrieve the `<h1>` element with the id "main-heading".
- Use querySelector() to:

  - Retrieve the first `<div>` element with the class "fruit".
  - Retrieve the first `<p>` element within a `<div>` with the class "fruit".
  - Retrieve the `<span>` element with the class "fruit-name" within - the first `<div>` with the class "fruit".

- Use querySelectorAll() to:

  - Retrieve all `<div>` elements with the class "fruit".
  - Retrieve all `<p>` elements within `<div>` elements with the class "fruit".
  - Retrieve all `<span>` elements with the class "fruit-name" within `<div>` elements with the class "fruit".

# Solution

```
// Retrieve elements using getElementById
const mainHeading = document.getElementById("main-heading");

// Retrieve elements using querySelector
const firstFruitDiv = document.querySelector(".fruit");
const firstFruitParagraph = firstFruitDiv.querySelector("p");
const firstFruitNameSpan = firstFruitDiv.querySelector(".fruit-name");

// Retrieve elements using querySelectorAll
const allFruitDivs = document.querySelectorAll(".fruit");
const allFruitParagraphs = document.querySelectorAll(".fruit p");
const allFruitNameSpans = document.querySelectorAll(".fruit-name");

// Bonus: Display the total count of elements with class "fruit"
const fruitCount = allFruitDivs.length;
console.log("Total fruits:", fruitCount);
```
