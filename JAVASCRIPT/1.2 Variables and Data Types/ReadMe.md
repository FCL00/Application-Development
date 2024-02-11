# Variables

- there are 3 ways to initialize or declare a variable in javascript
- keywords: var, let, const

```
// let keyword
let myVar1 = "Let Variable";
let myVar2 = 0;
let myVar3 = true;
```

```
// const keyword
const DB_CONNECTION = mysql
const DB_HOST = 127.0.0.1
const DB_PORT = 3306
const DB_DATABASE = mockdb
const DB_USERNAME = root
const DB_PASSWORD = admin123
const myVar7 = 0;
const myVar8 = true;
```

```
// var keyword
var myVar1 = "Hello world";
var myVar2 = 0;
var myVar3 = false;
```

When to Use var, let, or const?

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

#

# DATA TYPES

```
// string
let str = "this is a string";

// number
let Length = 16;
let width = 2.4;

// Booleans
let x = true;
let y = false;

// Object:
const person = {}
const persons = { firstName: "John", lastName: "Doe" };

// Array:
const cars = []
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
const currentDate = new Date().getDay;

// null
let isNull = null;

// undefined
let UnDefined = undefined;
```

# How to check data type?

```
 console.log(typeof variableName);
```

# Variable Scope

```
let x = 100;
function myFunction(){
    let y = 10;
}
console.log(y);
```

# Javascript Variables Exercise

```
Can you write some code so that their values are switched around?

let a = "3";
let b = "8";

So that the variable "a" holds the value "8".
And the variable "b" holds the value "3".
When the code is run, it should output:

- a is 8
- b is 3
```
