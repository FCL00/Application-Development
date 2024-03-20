# Flexbox
Flexbox, or the Flexible Box Layout module, is a powerful CSS layout model that allows designers and developers to create flexible and responsive layouts with ease. 
Let's explore the various properties and capabilities of Flexbox, including its main properties and their practical applications.

## Place to practice 
[Flexbox Froggy](https://flexboxfroggy.com)

## Codepen Examples:
[Codepen Example 1](https://codepen.io/Fernando-Lagahit/pen/NWmdZOq)

## Flex Properties
Flexbox relies on properties applied to the parent container to control the layout and alignment of its child elements.

- display: Sets the container to use flex layout.
- flex-direction: Defines the main axis along which flex items are placed.
- flex-wrap: Specifies whether flex items are forced onto a single line or can wrap onto multiple lines.
- justify-content: Aligns flex items along the main axis of the container.
- align-items: Aligns flex items along the cross axis of the container.
- align-content: Aligns flex lines within the container when there is extra space on the cross axis.

Below are examples illustrating the usage of each of the Flexbox properties you mentioned:
1. display: Sets the container to use flex layout.
```
/* HTML */
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```
```
/* CSS */
.container {
  display: flex;
  /* Other styles */
}

.item {
  /* Styles for flex items */
}
```
In this example, the `.container` class sets the display property to flex, making it a flex container.

2. `flex-direction`: Defines the main axis along which flex items are placed.
```
.container {
  display: flex;
  flex-direction: row; /* or column, row-reverse, column-reverse */
  /* Other styles */
}
```
This example sets the main axis of the flex container to be horizontal (row).

3. `flex-wrap`: Specifies whether flex items are forced onto a single line or can wrap onto multiple lines.
```
.container {
  display: flex;
  flex-wrap: nowrap; /* or wrap, wrap-reverse */
  /* Other styles */
}
```
In this example, flex items are not allowed to wrap onto multiple lines.

4. `justify-content`: Aligns flex items along the main axis of the container.
```
.container {
  display: flex;
  justify-content: space-between; /* or flex-start, flex-end, center, space-around, space-evenly */
  /* Other styles */
}
```
This example evenly spaces flex items along the main axis.
5. `align-items`: Aligns flex items along the cross axis of the container.
```
.container {
  display: flex;
  align-items: center; /* or flex-start, flex-end, baseline, stretch */
  /* Other styles */
}
```
Here, flex items are vertically centered within the container.

6. `align-content`: Aligns flex lines within the container when there is extra space on the cross axis.
```
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between; /* or flex-start, flex-end, center, space-around, space-evenly, stretch */
  /* Other styles */
}
```
This example evenly spaces flex lines (rows or columns) within the container.

## Flex Item Properties
Flex items, the children of a flex container, can be individually styled and controlled using various properties.
1. order: Specifies the order in which a flex item appears within the flex container.
```
<div class="container">
  <div class="item" style="order: 2;">Item 1</div>
  <div class="item" style="order: 3;">Item 2</div>
  <div class="item" style="order: 1;">Item 3</div>
</div>
```
```
/* CSS Style */
.container {
  display: flex;
  /* Other styles */
}

.item {
  /* Styles for flex items */
}
```
In this example, the order property is used to specify the order in which flex items appear within the flex container.

2. flex-grow: Determines how much a flex item grows relative to the other flex items in the container.
```
.item {
  flex-grow: 1; /* or any positive number */
  /* Other styles */
}
```
This example specifies that flex items should grow equally to fill the available space within the flex container.

3. flex-shrink: Specifies the ability of a flex item to shrink relative to the other flex items in the container.
```
.item {
  flex-shrink: 1; /* or any positive number */
  /* Other styles */
}
```
Here, flex items are allowed to shrink equally when the available space is less than the combined size of all flex items.

4. flex-basis: Sets the initial size of a flex item before any available space is distributed.
```
.item {
  flex-basis: auto; /* or any valid length or percentage */
  /* Other styles */
}
```
This example specifies the initial size of flex items before they start to grow or shrink to fill the available space.

5.  flex: Shorthand for flex-grow, flex-shrink, and flex-basis.
```
.item {
  flex: 1 1 auto; /* flex-grow flex-shrink flex-basis */
  /* Other styles */
}
```
This shorthand property combines flex-grow, flex-shrink, and flex-basis into a single declaration.

6.  align-self: Overrides the align-items value for a specific flex item.
```
.item {
  align-self: flex-start; /* or flex-end, center, baseline, stretch */
  /* Other styles */
}
```
Here, the align-self property is used to override the alignment of a specific flex item within the cross axis of the flex container.

