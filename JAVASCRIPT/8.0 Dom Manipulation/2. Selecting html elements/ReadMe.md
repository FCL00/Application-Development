## Selecting HTML elements with JavaScript

Accessing Elements
You can access HTML elements in the DOM using various methods such as:

- `getElementById`
- `getElementsByClassName`
- `getElementsByTagName`
- `querySelector`
- `querySelectorAll`

## Accessing elements by ID

```
const divElement = document.getElementById('root');
console.log(divElement);
```

## Accessing elements by tag name

```
const headingElements = document.getElementsByTagName('h1');
console.log(headingElements);
```

## Accessing elements by class name

```
const listElement = document.getElementsByClassName('list-item');
console.log(listElement);
```

## Accessing elements using querySelector

```
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);
```

## Accessing elements using querySelectorAll

```
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);
```

## Extra

HTMLCollection objects resemble arrays in some ways, such as allowing access to elements by index (`htmlCollection[index]`), but they do not have built-in array methods like `forEach()`, `map()`, or `filter()`. Hence, you cannot directly use array methods on HTMLCollection objects without converting them to arrays first using `Array.from()`.

```
//example
const headingElements = document.getElementsByTagName("li");
const headingArray = Array.from(headingElements);
```

`NodeList` on the other hand implements the `forEach()` method directly. This means you can use array methods directly on a NodeList without any conversion. On the other hand, HTMLCollection does not natively support array methods, so you need to convert it to an array first using methods like `Array.from()` or the spread operator `[...htmlCollection]`.

## Referrences:

<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection" target_="blank">HTML COLLECTION</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList">Node List</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target_="blank">Array.from()</a>
