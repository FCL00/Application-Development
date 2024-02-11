# ES6 Modules

ES6 modules introduce a standard system for organizing and reusing code across multiple files. Modules allow you to split your code into smaller, more manageable pieces.

## Exporting from a Module

```
    // module.js
    export const PI = 3.14;

    export function squareArea(side) {
        return side * side;
    }
```

## Default Export

```
    // module.js
    const PI = 3.14;

    function squareArea(side) {
        return side * side;
    }

    export default { PI, squareArea };
```

## Importing from a Module

```
    // index.js
    import { PI, squareArea } from './module';

    console.log(PI);  // Outputs: 3.14
    console.log(squareArea(5));  // Outputs: 25
```

## Default Import

```
    // index.js
    import mathModule from './module';

    console.log(mathModule.PI);  // Outputs: 3.14
    console.log(mathModule.squareArea(5));  // Outputs: 25
```

## Combining Named and Default Imports

You can also combine named and default imports in the same import statement.

```
    // index.js
    import mathModule, { squareArea } from './module';

    console.log(mathModule.PI);  // Outputs: 3.14
    console.log(squareArea(5));  // Outputs: 25
```

## Renaming Imports and Exports

You can use the as keyword to rename imports when you use them in your code.

```
    // index.js
    import { PI as circlePI, squareArea as calculateSquareArea } from './module';

    console.log(circlePI);  // Outputs: 3.14
    console.log(calculateSquareArea(5));  // Outputs: 25
```

## Module Syntax in HTML

When using ES6 modules in a browser, be sure to use the type="module" attribute in your script tag.

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ES6 Modules Example</title>
  <script type="module" src="main.js" defer></script>
</head>
<body>
  <!-- Your HTML content here -->
</body>
</html>
```

Note: When using ES6 modules in a browser, be sure to use the type="module" attribute in your script tag.

## Github Repo

<a href="https://github.com/FCL00/APP-DEV/tree/main/JAVASCRIPT/6.2%20ES6%20Modules">ES6 Module Repo</a>
