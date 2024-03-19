# Semantic HTML

Semantic HTML goes beyond the mere syntax of HTML tags and attributes, emphasizing the importance of conveying meaning and context within web documents. Rather than focusing solely on visual presentation, Semantic HTML aims to provide a structural hierarchy that accurately represents the content's semantics, enabling browsers, assistive technologies, and search engines to interpret and navigate web pages effectively.

## Why use semantic html?
Meaningful Structure: Semantic HTML elements, such as `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, and `<footer>`, provide a semantic structure that reflects the logical organization of content within a webpage. By using these elements appropriately, developers convey the purpose and relationship of different sections, enhancing code readability.

```
<html>
  <head>
    <title>Docuemnt</title>
  </head>
  <body>
    <header>
      <nav>This is a sample navbar you usually on top of the webpages</nav>
    </header>
    <main>
      <h1>This is a title</h1>
      <p>Paragraph tag</p>
    </main>
    <section>
      <h1>This is a new section of the webpage</h1>
    </section>
    <footer>
      <h1>This is what you usually see bottom of the webpages</h1>
    </footer>
  </body>
</html>
```
Note: there is more semantic HTML tags, what you see is just an examples of most common semantic html tag.

## Best Practices for Semantic HTML
Choose the Right Element: Select HTML elements that best represent the content's meaning and purpose. Use `<header>` for introductory content, `<nav>` for navigation menus, `<main>` for primary content, `<article>` for self-contained content, `<section>` for thematic grouping, and `<footer>` for concluding content.
