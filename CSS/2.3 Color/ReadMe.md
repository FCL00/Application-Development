# Colors
CSS provides versatile options for color management, allowing developers to define colors for text, backgrounds, borders, and more. 
Understanding different color representation formats such as RGB (Red, Green, Blue), hexadecimal, and HSL (Hue, Saturation, Lightness) in CSS can greatly enhance your ability to manipulate colors effectively. 

## Predifine Colors 
So in CSS We have predefined colors that we can use:
```
h1{
color: red;
}
```
Note: this just an example on how we can use predefined, Here is the list of all predefined [Colors](https://www.w3schools.com/colors/colors_names.asp)

## RGB
RGB is an additive color model where colors are created by combining varying intensities of red, green, and blue light. Each color channel ranges from 0 to 255, with 0 indicating no intensity and 255 indicating full intensity.
```
h1 {
  color: rgb(255, 0, 0); /* Red */
}

p {
  color: rgb(0, 255, 0); /* Green */
}
```
In the example above, the `<h1>` element is styled with pure red (255 red, 0 green, 0 blue), while the `<p>` element is styled with pure green (0 red, 255 green, 0 blue).

##  Hexadecimal Color
Hexadecimal color codes represent colors using a six-digit combination of numbers and letters, specifying the intensity of red, green, and blue in a color. Each pair of digits represents the intensity of one of the color channels, ranging from 00 (no intensity) to FF (full intensity).
```
em {
  color: #00ff00; /* Green */
}

span {
  color: #ff0000; /* Red */
}
```
In this example, the `<em>` element is styled with pure green (#00FF00), while the `<span>` element is styled with pure red (#FF0000).

## HSL (Hue, Saturation, Lightness):

HSL is a color model that represents colors based on their hue, saturation, and lightness. Hue is the color itself, saturation refers to the intensity or purity of the color, and lightness determines how light or dark the color appears.
```
button {
  background-color: hsl(120, 100%, 50%); /* Pure green */
}

input {
  background-color: hsl(0, 100%, 50%); /* Pure red */
}
```
In this example, the `<button>` element is styled with pure green (hue: 120, saturation: 100%, lightness: 50%), while the <input> element is styled with pure red (hue: 0, saturation: 100%, lightness: 50%).


## Text Color
You can change to color of your text in your html document to that you will use the color property:
```
p {
  color: #333; /* Hexadecimal color */
}

h1 {
  color: rgb(255, 0, 0); /* RGB color */
}

em {
  color: hsl(120, 100%, 50%); /* HSL color */
}
```
In this example, different text elements (`<p>`,`<h1>`, `<em>`) are styled with varying colors using hexadecimal, RGB, and HSL color representations.

