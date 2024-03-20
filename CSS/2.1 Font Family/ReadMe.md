# Font
In the realm of web design, typography plays a pivotal role in shaping user experiences and conveying information effectively. With CSS (Cascading Style Sheets), developers wield a powerful arsenal of font styling properties to elevate text presentation to new heights of sophistication. Let's delve into the art of font styling with CSS, exploring key properties, techniques, and best practices to create captivating and readable text content.

## Codepen
Here you can view the full html and css example: [Codepen](https://codepen.io/Fernando-Lagahit/pen/ZEZLqeN?editors=1100)


## Setting Font Family:
The choice of font family sets the tone for the entire design, influencing readability and aesthetic appeal. CSS allows developers to specify preferred font families for text elements, providing fallback options for increased compatibility.
```
body {
    font-family: 'Arial', sans-serif;
}
```
Note: in the example above we have use font "Arial" as our default font however when that font is not available on specific broswer then it will use the fallback font which is the sans-serif.
## Adjusting Font Size:
Controlling the size of text enhances readability and visual hierarchy within the content. CSS provides a straightforward way to define font sizes for various elements.
```
h1 {
    font-size: 36px;
}
```
Note: This rule sets the font size of `<h1>` headings to 36 pixels, ensuring prominence and emphasis.

## Emphasizing Font Weight:
Font weight influences the prominence and visual weight of text elements. CSS enables developers to adjust font weight to convey importance and hierarchy.
```
strong {
    font-weight: bold;
}
```
By setting the font weight to bold for `<strong>` elements, developers emphasize critical information within the content.

##  Adding Font Style:
Font style variations, such as italic or oblique, add flair and personality to text content. CSS empowers developers to apply diverse font styles to suit design aesthetics.
```
.text-style {
    font-style: italic;
}
```
This CSS rule applies italic styling to `<em>` elements, highlighting emphasized text within the content.

## Enhancing Line Spacing:
Proper line spacing, or line height, improves readability and visual appeal by providing adequate separation between lines of text. CSS offers control over line spacing to optimize text presentation.
```
p {
    line-height: 1.5;
}
```
By setting the line height to 1.5 times the font size for paragraphs (`<p>`), developers enhance readability and legibility.

## Custom Fonts
you can get custom fonts if the font you want is not available on css. In the example below we are going to use google fonts and the font `Poppins`.
firstly we need to import our custom font, theres is two ways to do it:

1. Embed code in the `<head>` of your html:
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
```
2. embed code in the css file:
```
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
```
Note: make sure you put this line of code on the very top or the first line on your code in css file.




