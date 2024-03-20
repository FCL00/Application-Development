# Grid layout
CSS Grid Layout is a powerful layout system that allows designers and developers to create complex grid-based layouts with ease. 
Let's explore the basics of CSS Grid and some of its key properties:

## Codepen Examples
[]()

## Creating a Grid Container
To create a grid layout, you need to define a grid container. You can do this by setting the display property of the container to grid.
```
.container {
  display: grid;
}
```
Remember: the `.container` can be change by you! you can defined any class name of choice for your elements e.g., `<elements class="grid-container"> `.

##  Defining Rows and Columns
You can define the structure of your grid by specifying the number and size of rows and columns.
```
.container {
  display: grid;
  grid-template-rows: 100px 200px; /* Two rows with heights of 100px and 200px */
  grid-template-columns: 1fr 2fr; /* Two columns with widths in a 1:2 ratio */
}
```
## Grid Gap
You can add space between grid items using the grid-gap property.
```
.container {
  display: grid;
  grid-gap: 10px; /* Adds a 10px gap between grid items */
}
```
## Placing Items in the Grid.
You can place items in specific grid cells using the grid-row and grid-column properties.
```
.item {
  grid-row: 1 / 3; /* Item spans from row 1 to row 3 */
  grid-column: 2 / 4; /* Item spans from column 2 to column 4 */
}
```
## Creating Grid Areas:
You can define named grid areas and place items within these areas.
```
.container {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}
```
## Responsive Grids:
You can create responsive grid layouts using media queries to adjust the grid structure based on screen size.
```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```
