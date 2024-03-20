# Pseudo-classes and Pseudo-elements
pseudo-classes and pseudo-elements provide designers and developers with versatile tools to apply styles based on various states or specific parts of elements. 
Let's explore the capabilities of CSS pseudo-classes and pseudo-elements, and how they can be used to enhance the visual appeal and interactivity of web interfaces.

## Pseudo-classes
Pseudo-classes target elements based on their state or interaction, allowing designers to apply styles dynamically.
Some commonly used pseudo-classes include `:hover`, `:active`, `:focus`, and `:nth-child`.

## Pseudo-classes basic syntax
```
selector:pseudo-class {
  property: value;
}
```
Examples : 
```
/* Styles applied when the element is hovered over */
button:hover {
  background-color: #ff0000;
}

/* Styles applied when the element is in focus */
input:focus {
  border-color: #00ff00;
}

/* Styles applied to every second paragraph */
p:nth-child(even) {
  color: #0000ff;
}
```
Note: Pseudo-classes are powerful tools for adding interactivity and visual feedback to elements based on user actions or element states.

## Pseudo-elements
Pseudo-elements target specific parts of elements, allowing designers to style them independently. 
Commonly used pseudo-elements include `::before` and `::after`, which add content before and after an element, respectively.
```
/* Styles applied to generated content after each <p> element */
p::after {
  font-weight: bold;
}

/* Styles applied to generated content before each <p> element */
p::before {
  content: "🔹 ";
  color: #ff00ff;
}
```
Note: Pseudo-elements offer flexibility in styling elements and creating decorative or informative content dynamically.

## Codepen Example
[Codepen]()
