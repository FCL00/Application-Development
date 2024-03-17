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
