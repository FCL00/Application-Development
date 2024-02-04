# What is a Function?

In JavaScript, a function is a reusable block of code that performs a specific task or calculates a value. Functions are defined using the function keyword, and they can be invoked (called) multiple times throughout the code.

# Why Use Functions?

- Modularity: Functions allow us to break down our code into smaller, manageable pieces. Each function can perform a specific task, making the code more modular and easier to understand.

- Reusability: Once you define a function, you can use it multiple times in your code without rewriting the same logic. This promotes code reuse and reduces redundancy.

- Readability: Functions provide a way to encapsulate functionality with a meaningful name. This improves the readability of your code by making it clear what each part does.

# Basic Syntax:

Here's the basic syntax for defining and invoking a function:

```
    // Function definition
    function greet(name) {
        console.log("Hello, " + name + "!");
    }

    // Function invocation
    greet("John");  // Output: Hello, John!

```

# Return Statement:

- Functions can also return a value using the `return` statement.

```
    // Function definition with return statement
    function square(number) {
        return number * number;
    }

    // Function invocation
    let result = square(5);
    console.log(result);  // Output: 25

```

# Function Declaration vs. Function Expression:

```
    // Function Declaration
    function sayHello() {
        console.log("Hello!");
    }

    // invoke or call the function
    sayHello();



    // Function Expression
    const sayHello = function() {
        console.log("Hello!");
    };

    // invoke or call the function
    let message = sayHello();
    console.log(message); // Output: Hello!


```
