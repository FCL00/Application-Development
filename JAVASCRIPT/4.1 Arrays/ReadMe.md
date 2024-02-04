# Module: Arrays in JavaScript

- An array is a data structure that stores a collection of elements.
- Declaration and initialization

  ```
    // Creating an array
    let numbers = [1, 2, 3, 4, 5];
  ```

## Accessing Elements

- Elements in an array are accessed by their index (starting from 0).

  ```
    let firstElement = numbers[0];
  ```

## Modifying Elements or Updating Elements

    ```
        numbers[2] = 10; // Updating the third element to 10
    ```

## Adding Elements to the End

    ```
        numbers.push(6); // Adding 6 to the end
    ```

## Removing Elements from the End

    ```
        let removedElement = numbers.pop(); // Removing the last element
    ```

## Array Iteration using For Loop

    ```
        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i]);
        }
    ```
