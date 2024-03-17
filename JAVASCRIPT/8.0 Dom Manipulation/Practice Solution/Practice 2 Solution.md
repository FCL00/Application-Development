# Practice 2

🚀 Objective:

- Change the background color of the 3 divs to red, green, and blue.
- Add the text "red", "green", and "blue" respectively to each div.
- Change the href attribute of the anchor tag `<a></a>` to something - different from the original.
- Also, ensure to add some text to the anchor tag.
- Obtain an image online and set the `src` attribute of the image tag to that image link.

# Solution

```
const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");
const blueDiv = document.getElementById("blue");

redDiv.style.backgroundColor = "red";
greenDiv.style.backgroundColor = "green";
blueDiv.style.backgroundColor = "blue";

const anchorTag = document.querySelector("a");
anchorTag.textContent = "this is a link to an image";
anchorTag.setAttribute(
  "href",
  "https://images.unsplash.com/photo-1707058665464-c11b94b7ecd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

const imageTag = document.querySelector("img");

imageTag.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1707058665464-c11b94b7ecd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

imageTag.style.height = "500px";

```
