# List View Grid View Guide

You are tasked with implementing functionality to switch between displaying content in a flex layout and a grid layout by clicking buttons. The flex layout displays items in a column, while the grid layout displays items in a grid with four columns.

1. Select the necessary elements from the DOM:

   - Select the button element with the id `btnFlex` and assign it to the variable btnFlex.
   - Select the button element with the id `btnGrid` and assign it to the variable btnGrid.
   - Select the container element with the id `lists` and assign it to the variable lists.
   - Select the button element with the id `controlButton` and assign it to the variable `controlButton`.

2. Add event listeners to the buttons:

   - Add a click event listener to the `btnFlex` button:

     - When clicked, add the class `flex-container` to the lists container using `classList.add()`.
     - Remove the class `grid-container` from the lists container using `classList.remove()`.
     - Remove the class `grid-control` from the controlButton button using `classList.remove()`.

   - Add a click event listener to the btnGrid button:
     - When clicked, remove the class `flex-container` from the lists container using `classList.remove()`.
     - Add the class `grid-container` to the lists container using `classList.add()`.
     - Add the class `grid-control` to the controlButton button using `classList.add()`.

3. Ensure proper styling updates:

- The `flex-container` class should set the display property to flex and arrange items in a column.
- The `grid-container` class should set the display property to grid with four columns.
- The `grid-control` class should adjust margins for proper alignment.

# Solution

```
const controlButton = document.querySelector("#controlButton");
const btnFlex = document.querySelector("#btnFlex");
const btnGrid = document.querySelector("#btnGrid");
const lists = document.querySelector("#lists");

btnGrid.addEventListener("click", () => {
  lists.classList.remove("flex-container");
  lists.classList.add("grid-container");
  controlButton.classList.add("grid-control");
});

btnFlex.addEventListener("click", () => {
  lists.classList.add("flex-container");
  lists.classList.remove("grid-container");
  controlButton.classList.remove("grid-control");
});

```
