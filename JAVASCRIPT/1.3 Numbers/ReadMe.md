# JavaScript Numbers

1. Integer Numbers: These are whole numbers without any fractional component. They can be positive or negative.

   ```
   let integerNumber = 10;
   ```

2. Floating-Point Numbers: These are numbers with a fractional component, represented with decimal points.

   ```
   let floatNumber = 3.14;
   ```

3. Scientific Notation: JavaScript also supports scientific notation for representing very large or very small numbers.

   ```
   let scientificNumber = 5.2e6; // 5.2 * 10^6
   ```

4. NaN (Not-a-Number): This is a special value representing an unrepresentable value resulting from an invalid operation.

   ```
   let notANumber = "hello" / 5; // Results in NaN
   ```

5. Infinity and -Infinity: These are special values representing positive and negative infinity, respectively. They are the result of arithmetic operations that exceed the finite number range.
   ```
   let positiveInfinity = Infinity;
   let negativeInfinity = -Infinity;
   ```

# JavaScript Number Methods

1. `toFixed(number)`: Converts a number into a string, rounding the number to a specified number of decimal places and returns the result as a string.

   ```
   let num = 3.14159;
   console.log(num.toFixed(2)); // Outputs: "3.14"
   ```

2. `toString(number)`:Convert a number to a string:

   ```
   let num = 123.456;
   console.log(num.toString()); // Outputs: "123.456"
   ```

3. `parseInt(string)`: Parses a string argument and returns an integer.

   ```
   console.log(parseInt("10")); // Outputs: 10
   ```

4. `parseFloat(string)`: Parses a string argument and returns a floating-point number.

   ```
   console.log(parseFloat("3.14")); // Outputs: 3.14
   ```

5. `isNaN(value)`: Determines whether a value is NaN (Not-A-Number).

   ```
   console.log(isNaN("hello")); // Outputs: true
   console.log(isNaN(10)); // Outputs: false
   ```

6. `isFinite(value)`: Determines whether a value is a finite number.

   ```
   console.log(isFinite(5)); // Outputs: true
   console.log(isFinite(Infinity)); // Outputs: false
   ```

7. `Number.MAX_VALUE`: Returns the largest positive finite value representable in JavaScript.

   ```
   console.log(Number.MAX_VALUE);
   // Outputs: 1.7976931348623157e+308
   ```

8. `Number.MIN_VALUE`: Returns the smallest positive nonzero value representable in JavaScript.
   ```
   console.log(Number.MIN_VALUE); // Outputs: 5e-324
   ```
