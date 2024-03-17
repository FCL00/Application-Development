# Seperation of Concerns

<figure align="center">
  <img src="../Assets/DOM4.png" alt="Basic Website structure" style="width:50%; border-radius: 4px; cursor: pointer;" />
  <!-- <figcaption align="center">
    <em>Figure 1: Seperation of files</em>
  </figcaption> -->
</figure>

<br/>

Now, when we're writing code for websites, in order to keep our code tidy and easy to debug, we have to keep in mind the idea of the separation of concerns at all times. And what this means is that your HTML is for content only, and your CSS is there to style your website, and your JavaScript is there for behavior.

So we've not been following this rule very closely because we've been trying to change the style of each element using JavaScript. We've been writing things like `document.querySelector().style.color = "red"`, and this is not good practice because we're changing the style of each element using JavaScript, whereas ideally, all of our styles should actually be inside our CSS. But the problem is that if we wanted our style to change on the fly, say if a user clicks on a button then the color of the background changes, then we kind of need to change that using JavaScript and the style property, right?

Well, as with all things programming, there's usually another way, and it's usually better. And so this is one of those cases. Now, one of the things that we can tap into is something called a `classList`, and it's a property of every DOM object.

```
document.querySelector("button").classList.add("invisible");

document.querySelector("button").classList.remove("invisible");

document.querySelector("button").classList.toggle("toggle");
```
