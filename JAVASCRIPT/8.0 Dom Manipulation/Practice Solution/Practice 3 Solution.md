# Practice 3:

🚀 Objective:

You are tasked with creating a simple webpage that displays a list of fruits and adds a new fruit dynamically to the list. Your goal is to use JavaScript to achieve the following tasks:

Create a new list item (`<li>`) element.
Set the text content of the new list item to a predefined value (for example, "New Fruit").
Append the new list item to an existing unordered list (`<ul>`) element on the page.

```
// Create a new list item
const newFruitItem = document.createElement("li");

// Set the text content of the new list item
newFruitItem.textContent = "New Fruit";

// Append the new list item to the existing unordered list
const fruitList = document.getElementById("fruit-list");
fruitList.append(newFruitItem);
```
