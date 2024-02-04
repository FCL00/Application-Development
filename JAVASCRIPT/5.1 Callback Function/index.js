// Synchronous example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  let userInput = "john doe";

  callback(userInput);
}

processUserInput(greet);
