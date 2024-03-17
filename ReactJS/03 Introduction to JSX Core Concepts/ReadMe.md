# Getting Started with JSX

React, is a JavaScript library for building user interfaces, has become a favorite amongst developers. A key aspect of React's appeal is `JSX (JavaScript Extension or some people called it JavaScript XML)` , a syntax extension that makes writing React components a breeze. But what exactly is JSX, and how does it fit into the world of React development?

## What is JSX?

JSX isn't a separate language; it's a syntactic sugar on top of JavaScript. It allows you to write HTML-like structures directly within your JavaScript code. This makes your code more readable and easier to maintain, as you can clearly see the relationship between the UI and the underlying logic.

Here's a basic example of JSX:

```
const element = <h1>Hello, world!</h1>;
```

This code defines a variable named element that holds a JSX element representing an HTML heading (h1) with the text "Hello, world!". While JSX resembles HTML, it's important to remember that it's ultimately converted into JavaScript function calls understood by React.

## Benefits of Using JSX

- Improved Readability: JSX keeps your UI structure and logic together, making your code easier to understand, especially for developers familiar with HTML.
- Declarative Style: JSX allows you to describe what you want the UI to look like, rather than how to achieve it through complex imperative manipulations.
- Component Composition: JSX is instrumental in building reusable React components, which are the fundamental building blocks of React applications.

## Understanding the Entry Point

In your React project directory, you'll typically find a file named `index.js` or `main.js` serving as the entry point for your React code. This file is where we'll be working extensively with JSX (Javascript Extension).

index.js or main.js:

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

So the code you see in the index.jsx and App.jsx files would not work in browsers. Instead, the code you write as a React developer
is transformed behind the scenes by the development server, in this case here, before it reaches the browser. It's transformed to code that does work in the browser.But as a developer, thanks to this JSX extension, you have this more convenient way of describing the user interface. But what's really important about this App.jsx file is that what we can see here is a React Component.

## Links

[Babel JavaScript](https://babeljs.io)
