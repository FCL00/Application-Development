const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");

function showBox1() {
  box1.classList.remove("hidden");
  box2.classList.add("hidden");
  box3.classList.add("hidden");
}
function showBox2() {
  box1.classList.add("hidden");
  box2.classList.remove("hidden");
  box3.classList.add("hidden");
}

function showBox3() {
  box1.classList.add("hidden");
  box2.classList.add("hidden");
  box3.classList.remove("hidden");
}

btn1.addEventListener("click", showBox1);
btn2.addEventListener("click", showBox2);
btn3.addEventListener("click", showBox3);
