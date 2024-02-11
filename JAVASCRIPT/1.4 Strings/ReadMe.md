# JavaScript String Methods

1. `length`: This property returns the length of a string.

   ```
   let str = "Hello";
   console.log(str.length); // Outputs: 5
   ```

2. `charAt(index)`: Returns the character at the specified index.

   ```
   let str = "Hello";
   console.log(str[0] + " " + str[1] + " " + str[2]);
   console.log(str.charAt(0)); // Outputs: "H"
   ```

3. `concat(str1, str2, ...)`: Combines two or more strings.

   ```
   let str1 = "Hello";
   let str2 = "World";

   console.log(str1.concat(" ", str2)); // Outputs: "Hello World"

   const newStr = str1 + " " + str2;
   const newString = `${str1} ${str2}`;
   ```

4. `indexOf(substring)`: Returns the index of the first occurrence of the specified substring.

   ```
   H e l l o   W O R L D
   0 1 2 3 4 5 6 7 8 9 10

   let str = "Hello World";
   console.log(str.indexOf("World")); // Outputs: 6
   ```

5. `substring(startIndex, endIndex)`: Extracts the characters between two specified indices (endIndex is optional).

   ```
   let str = "Hello World";
   console.log(str.substring(6)); // Outputs: "World"
   console.log(str.substring(0, 5));
   ```

6. `slice(startIndex, endIndex)`: Similar to substring but allows negative indices and works with arrays as well.

   ```
   let str = "Hello World";
   console.log(str.slice(-5)); // Outputs: "World"
   ```

7. `toUpperCase()`: Converts a string to uppercase.

   ```
   let str = "hello";
   console.log(str.toUpperCase()); // Outputs: "HELLO"
   ```

8. `toLowerCase()`: Converts a string to lowercase.

   ```
   let str = "HELLO";
   console.log(str.toLowerCase()); // Outputs: "hello"
   ```

9. `trim()`: Removes whitespace from both ends of a string.

   ```
   let str = "  Hello World  ";
   console.log(str.trim()); // Outputs: "Hello World"
   ```

10.  `replace(searchValue, replaceValue)`: Replaces a specified value with another value in a string.

      ```
      let str = "Hello World";
      console.log(str.replace("World", "Universe"));
      // Outputs: "Hello Universe"
      ```

11. Templates Strings were introduced with ES6 (JavaScript 2016). Templates are strings enclosed in backticks \`This is a template string`.

      ```
      let str1 = "Hello"
      let str2 = "John Doe"

      let newStr = `${str1} ${str2}`;

      console.log(newStr); 
      ```