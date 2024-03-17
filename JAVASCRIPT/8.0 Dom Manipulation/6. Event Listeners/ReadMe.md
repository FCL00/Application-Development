# Event Listeners

Event listeners in JavaScript allow you to respond to various user interactions and browser events, such as `clicks`, `key presses`, `mouse movements`, `form submissions`, and more. By attaching event listeners to HTML elements, you can execute specific actions or functions when these events occur. Let's explore how to use event listeners in JavaScript:

## Basic Syntax

```
target.addEventListener(type, listener);
```

HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events.

# Adding Event Listeners

You can add event listeners to HTML elements using the `addEventListener` method. This method takes two arguments: the `event type` and the `event handler function`.

```
const button = document.querySelector("button");

button.addEventListener("click", function(){
    alert("You click this button");
});

```

Alternatively, you can define the event handler function separately:

```
function handleButtonClick() {
  alert('Button clicked!');
}

button.addEventListener('click', handleButtonClick);
```

You can also do it like this:

```
// in your index.html

<button onclick="btnHandler">Play me</button>

// in your index.js
function btnHandler(){
  alert("button is clicked");
}

```

## Event Object

When an event occurs, an event object is passed to the event handler function. This object contains information about the event, such as the type of event, the target element, and any additional data related to the event.

```
document.addEventListener("keydown", function(event){
  const { key } = event;
  console.log(key);
});
```

## References

<a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" target="_blank">Adding Event Listeners</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/Events" target="_blank"> Event Listeners</a>

<a href="https://www.w3schools.com/tags/ref_eventattributes.asp" target="_blank">Lists of Event Listeners</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement" target="_blank">HTML audio element </a>

<a href="https://stackoverflow.com/questions/9419263/how-to-play-audio" target="_blank">How to play audio</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event" target="_blank">Keydown docs</a>
