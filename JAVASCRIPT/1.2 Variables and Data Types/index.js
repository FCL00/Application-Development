// ========================================= Variables =================================================
// there are 3 ways to initialize or declare a variable in javascript
// keywords: var, let, const

// var
var myVar1 = "Hello world";
var myVar2 = 0;
var myVar3 = false;

// let
let myVar4 = "Let Variable";
let myVar5 = 0;
let myVar6 = true;

// const
const API_KEY = "s5d6s5d6s5d6sdsad7s6d8";
const CSRF_TOKEN = "d5f6d5f6d5f6";
const myVar7 = 0;
const myVar8 = true;

// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

// ========================================= DATA TYPES =================================================

let Null = null;
let UnDefined = undefined;

// "string" or 'string'
let str = "this is a string";

// number
let Lenght = 16;
let width = 2.4;

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
const currentDate = new Date().getDay;

//========================================= Test your code =================================================

let a = 1;
let b = 2;
let sum = a + b;
console.log(sum);

// back tick
console.log(`this is a sum: ${a} + ${b} = ${sum}`);

// string
let fname = "Fernando";
let lname = "Lagahit";
console.log(fname);

// string concatenation
console.log(fname + " " + lname);
console.log(`${fname} ${lname}`);

// check the length of the strings
console.log(`fname length: ${fname.length}`);
console.log(`fname length: ${fname.length + lname.length}`);

// access the characters in the string
console.log("the first string of fname: " + fname[0]);
console.log("last string of fname is : " + fname[fname.length - 1]);

// boolean
let bool = true;
console.log(`boolean value: ${bool}`);

// array = [0, 1 , 2, ... ];
let arr = ["apple", "banana", "orange"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[1 + 1]);
console.log(arr[1 - 1]);

// object = { key : value }
let obj = { username: "myUsername", password: "incorrect password" };

console.log(obj.username);
console.log(obj.password);

// check the data type
console.log(typeof arr);

// ================== Javascript Variables Exercise ==================

// Can you write some code so that their values are switched around?

//     let a = "3";
//     let b = "8";

// So that the variable "a" holds the value "8".
// And the variable "b" holds the value "3".
// When the code is run, it should output:

// - a is 8
// - b is 3

// ====================== YOUR CODE GOES HERE ==================

// ====================== YOUR CODE GOES HERE ==================
