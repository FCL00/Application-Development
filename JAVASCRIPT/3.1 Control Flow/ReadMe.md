# Control Flow

Control flow refers to the order in which statements are executed in a program. It determines the flow of the program based on certain conditions and control structures. In JavaScript, control flow is managed through various constructs like conditional statements (if, else if, else, switch) and loops (for, while, do-while).

Here's a breakdown of some key control flow concepts:

## Conditional Statements:

- If Statement: Executes a block of code if a specified condition is true.
- Else If Statement: Allows you to check multiple conditions if the previous condition is false.
- Else Statement: Specifies a block of code to be executed if none of the specified conditions are true.

  ```
      let temperature = 25;

      if (temperature > 30) {
          console.log("It's a hot day!");
      } else if (temperature <= 30 && temperature >= 20) {
          console.log("It's a pleasant day.");
      } else {
          console.log("It's a cold day.");
      }
  ```

## Switch Statement:

- Provides a concise way to handle multiple conditions based on the value of an expression.

  ```
      let day = "Monday";

      switch (day) {
          case "Monday":
              console.log("It's the start of the week.");
              break;
          case "Friday":
              console.log("TGIF!");
              break;
          default: console.log("It's a regular day.");
      }

  ```

## Loops

- For Loop: Repeats a block of code a specified number of times.
- While Loop: Repeats a block of code while a specified condition is true.
- Do-While Loop: Similar to a while loop, but the condition is checked after the block of code is executed.

### For Loop
```
    // Incrementing for loop
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // Decrementation for loop
    for (let j = 5; j > 0; j--) {
        console.log(j);
    }
```

### While Loop

```
    let counter = 0;

    while (counter < 3) {
        console.log(counter);
        counter++;
    }

```

### Do-While Loop

```
    let x = 0;

    do {
        console.log(x);
        x++;
    } while (x < 3);
```

<img src="https://i.redd.it/241916o91ar51.jpg" alt="Loop meme"/>