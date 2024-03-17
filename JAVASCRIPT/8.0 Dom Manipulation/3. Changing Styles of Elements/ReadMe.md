# Changing Styles of Elements

Now, as you saw earlier on, we were able to change the CSS style dynamically using JavaScript by tapping into the style property of an element object. So, for example, we could say

```
document.querySelector("h1").style.color = "red"
```

And that selects on the h1 element in our document, changes the style color to a red color.

Now every single CSS property can be changed in this way using JavaScript, but the property names might look a little bit different.

Javascript naming convention tends to be `camel cased`. So, for example `querySelector`, where the first word is lowercase and the second word begins with an uppercase letter. This is camel casing and this is standard for naming methods and properties in JavaScript.

So that means that when you're trying to change the CSS styles, you will find that the property names don't look quite the same as what you see in CSS. So, for example, we might have things like font size, which is `font-size` as the property name in CSS, but if you're trying to change it using JavaScript, then the property is going to be camel-cased like:

```
document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("h1").style.backgroundColor = "black";
document.querySelector("h1").style.padding = "20px 20px";
```

## Text Manipulation and Text Content Property

The `innerHTML` property sets or returns the HTML content (inner HTML) of an element.
The `textContent` property sets or returns the text content of the specified node, and all its descendants.

```
document.querySelector("h1").innerHTML = "Hello world";

document.querySelector("h1").textContent = "Hello world";
```

```
document.querySelector("h1").innerHTML = "<em>Hello world</em>";

document.querySelector("h1").textContent = "<em>Hello world</em>";
```

## Manipulating HTML Element Attributes

So now that we've seen how you can manipulate the style and the text of an HTML element, the last thing I want to show you is how to manipulate, are the attributes of any element. so for example, `class` is an attribute, or the `href` for an anchor tag is the attribute, or the `src` for an image. They’re all attributes. Everything that goes inside the tag, other than the tag name itself, are attributes.

```
<a href="www.google.com">Google</a>
<a class="nav-links" href="www.google.com" target="_blank">Google</a>
```

Now, what if we've gone crazy and we decided to point people towards Bing instead? Well, we can get a list of attributes that are attached to the element by saying document.querySelector(“a”), and that of course gets us our first anchor tag which points towards Google.

```
document.querySelector("a");
```

And now if we say `.attributes`, then that will give us a list of all the attributes that are currently attached to this HTML element.

```
document.querySelector("a").attributes;
```

So we can now retrieve the current value of that attribute by saying `.getAttribute`, and notice how this is singular and not plural, so we're only getting back the value of a single attribute, and we have to specify the name of the attribute that we want.

```
document.querySelector("a").getAttribute("href");
```

So in this case it's the href, and you can see that we get back that currently it's pointing towards `www.google.com` So now if we wanted to change this then instead of saying getAttribute, we can say setAttribute, but this method takes two parameters, two inputs essentially. One is which attribute do you want to change, and the second one after the comma is what do you want to change it to? And we're going to say `www.bing.com`.

```
document.querySelector("a").setAttribute("href", "https://www.bing.com");
```
