# Introduction to CSS
In the ever-evolving landscape of web development, CSS (Cascading Style Sheets) stands as a cornerstone for transforming plain HTML structures into visually stunning and engaging web experiences. Let's embark on a journey to explore the boundless possibilities of CSS, uncovering its key features, techniques, and best practices to empower developers in crafting captivating and responsive designs.

## Basic Syntax
- Properties and Values: CSS properties define the visual appearance of elements, such as color, font size, padding, margin, and border. Properties are paired with values that specify the desired styling, allowing for precise control over element presentation.

- Cascade and Specificity: The "cascading" nature of CSS enables styles to be applied hierarchically, with styles from different sources (e.g., external stylesheets, internal styles, inline styles) cascading down and being overridden based on specificity and inheritance rules.

- Responsive Design: CSS features like media queries enable developers to create responsive layouts that adapt to different screen sizes and devices, ensuring optimal viewing experiences across desktops, tablets, and smartphones more.

![Basic](https://www.w3schools.com/css/img_selector.gif)

## Three Ways to attach your CSS 
There is 3 ways you to attach your CSS file to HTML file.

1. External CSS:
External CSS: involves linking an external CSS file to an HTML document using the <link> element. This method is ideal for maintaining a separation of concerns, making it easier to manage styles across multiple pages. Using External CSS is the best practices uses by many professional developers around the world.

Example of linking an external CSS file in the <head> section of an HTML document:
```
<!DOCTYPE html>
<html>
<head>
    <title>External CSS Example</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <!-- HTML content -->
</body>
</html>
```
2. Internal CSS: Internal CSS involves embedding CSS directly within the <style> element in the <head> section of an HTML document. This method is useful for applying styles specific to a single document.

Example of internal CSS within an HTML document:
```
<!DOCTYPE html>
<html>
<head>
    <title>Internal CSS Example</title>
    <style>
        /* Internal CSS rules */
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            color: blue;
        }
    </style>
</head>
<body>
    <!-- HTML content -->
</body>
</html>
```
3. Inline CSS: Inline CSS involves applying styles directly to individual HTML elements using the style attribute. This method is typically used for applying quick, specific styles to individual elements.

```
<!DOCTYPE html>
<html>
<head>
    <title>Inline CSS Example</title>
</head>
<body>
    <p style="color: red; font-size: 16px;">This is a paragraph with inline CSS.</p>
    <!-- More HTML content -->
</body>
</html>
```


## Key Features of CSS:

- Selectors: CSS selectors are used to target HTML elements and apply styles to them selectively. Selectors can target elements based on their type, class, ID, attributes, and hierarchical relationships within the document structure.

Element Selector: Selects elements based on their tag name.
```
p {
    color: blue;
}
```
Note: This rule will apply the color blue to all `<p>` elements in the document.

Class Selector: Selects elements based on their class attribute.
```
.highlight {
    background-color: yellow;
}
```
Note: This rule will apply a yellow background color to all elements with the class `highlight`.

ID Selector: Selects a single element based on its ID attribute.
```
#header {
    font-size: 24px;
}
```
Note: This rule will apply a font size of 24 pixels to the element with the ID "`header`".

## What is Specificity?
If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win",
and its style declaration will be applied to that HTML element.
Think of specificity as a score/rank that determines which style declaration is ultimately applied to an element.
Every CSS selector has its place in the specificity hierarchy.

There are four categories which define the specificity level of a selector:
- inline
- id
- classes
- elements
![Specificity](https://i.ibb.co/tK2jYKM/CSS-specificity.png)

## Cascade Rules
When multiple conflicting style rules are applied to an element, the cascade rules determine which style rule takes precedence. 
The cascade follows a specific hierarchy based on specificity:
```
/* Higher specificity */
#header .title {
  color: blue;
}

/* Lower specificity */
.title {
  color: red;
}
```
In this example, the color of `.title` elements within `#header` will be blue due to the higher specificity of the first rule.
