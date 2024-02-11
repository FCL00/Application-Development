# Callback Functions

In JavaScript, a callback function is a function passed as an argument to another function, which is then invoked inside the outer function. Callbacks are commonly used in asynchronous programming, allowing you to execute code after an asynchronous operation completes.

## Basic Example

```
    // Synchronous example
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    function processUserInput(callback) {
        let userInput = "john doe";
        callback(userInput);
    }

    processUserInput(greet);

```
