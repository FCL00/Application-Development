# CSS Positioning
Let's explore CSS positioning, which allows developers to precisely control the placement of elements within a web page. 
We'll cover different positioning techniques, including static, relative, absolute, fixed, and sticky positioning.

## Syntax
1. Static Positioning:
By default, elements are positioned statically, meaning they follow the normal flow of the document. This is the default behavior unless overridden.
```
.static-element {
  position: static;
}
```
2. Relative Positioning:
Relative positioning allows elements to be positioned relative to their normal position in the document flow.
It retains the original space occupied by the element.
```
.relative-element {
  position: relative;
  top: 20px; /* Move the element 20 pixels down from its normal position */
  left: 10px; /* Move the element 10 pixels to the right from its normal position */
}
```
3. Absolute Positioning:
Absolute positioning removes the element from the normal document flow and positions
it relative to its nearest positioned ancestor or the initial containing block if no ancestor is positioned.
```
.absolute-element {
  position: absolute;
  top: 0; /* Position the top of the element at 0 of the height of its containing block */
  left: 0; /* Position the left side of the element at 0 of the width of its containing block */
}
```
4. Fixed Positioning:
Fixed positioning positions the element relative to the browser window.
It remains in a fixed position even when the page is scrolled.
```
.fixed-element {
  position: fixed;
  top: 0; /* Position the element at the top of the viewport */
  right: 0; /* Position the element at the right side of the viewport */
}
```
5. Sticky Positioning:
Sticky positioning is a hybrid of relative and fixed positioning. It behaves like relative positioning
until the element reaches a specified scroll position, after which it becomes fixed.
```
.sticky-element {
  position: sticky;
}
```

## Directional properties
The directional properties (top, bottom, left, and right) are available for use in CSS for positioning elements within a layout.

## Codepen Example
[Codepen](https://codepen.io/Fernando-Lagahit/pen/oNOBRRw)
