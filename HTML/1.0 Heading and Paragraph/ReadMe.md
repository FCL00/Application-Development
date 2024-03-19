# Introduction to HTML

HTML also know as `Hypertext Markup Language` is the backbone of every web page we encounter. It provides the structure and content, allowing browsers to interpret and display information in a visually appealing and organized manner. At its core, HTML comprises a collection of tags, each serving a unique purpose in defining different parts of a webpage.

```
<!DOCTYPE html> <!-- Tells the broswer that this is an HTML file -->
<html>
    <head>
        <!-- Metadata, links, and scripts go here -->
    </head>
    <body>
        <!-- Content visible to users goes here -->
    </body>
</html>
```

- The `DOCTYPE` declaration is an instruction to the web browser about what version of HTML the page is written in.
- The `<html>` tag represents the root of an HTML document. The <html> tag is the container for all other HTML elements (except for the `<!DOCTYPE>` tag).
- The `<head>` HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.
- The `<body>` tag defines the document's body. The <body> element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

## HTML tag structure
HTML elements typically consist of three main parts: the `opening tag`, the `content`, the `closing tag` and the `attributes`.

Example: 
```
<opening tag attributes> content </closing tag>

<element attribute> content </element>
```
Note: from the `opening tag` to `closing tag` is called an html element and inside the `opening tag` where the `attributes` reside and keep it mind that the `attributes` can varied on different elements.

## HTML tag rules: 
1. Most HTML elements require both an opening and a closing tag.
2. For self-closing elements (e.g., `<img>`, `<br>`, `<input>`), a forward slash before the closing angle bracket indicates that the tag doesn't contain any content and is self-contained.

Example of self-closing tag:
```
<img src="image.jpg" alt="Description" />
```
3. Lowercase! HTML is case-insensitive, but it's a best practice to write all HTML tags in lowercase for consistency and readability.
```
<!-- Good practice -->
<h1>This is a heading</h1>

<!-- Avoid using uppercase -->
<H1>This is a heading</H1>
```
4. Attribute Values: Attribute values should always be enclosed in double quotes. While single quotes are also allowed, it's a common convention to use double quotes for consistency.
```
<a href="https://example.com">Link</a>
```


## Heading Tags

Heading tags, denoted by `<h1>` through `<h6>`, play a crucial role in organizing and structuring content. These tags denote the importance and hierarchy of text within a document, with `<h1>` representing the highest level of importance and `<h6>` the lowest. Think of heading tags as signposts guiding readers through the thematic landscape of your webpage.

For instance, `<h1>` is typically reserved for the main title or heading of the page, conveying the primary message or topic. Subsequent headings, from `<h2>` to `<h6>`, provide further granularity, delineating sections and subsections within the content.

## Example 1
```
<h1>This is a title</h1>
<h2>This is a sub-title</h2>
<h3>This is a sub-title</h3>
<h4>This is a sub-title</h4>
<h5>This is a sub-title</h5>
<h6>This is a sub-title</h6>
```
## Example 2
```
<!DOCTYPE html> <!-- Tells the broswer that this is an HTML file -->
<html>
    <head>
       <title>Document</title> 
    </head>
    <body>
       <h1>This is the title</h1>
       <h2>This is the sub-title</h2>
    </body>
</html>
```
Note: `<title>` The title tag is an HTML code tag that allows you to give a web page a title.

![title tag](https://seo-gold.com/images/title-tag-html.jpg)

## Paragraph tag
The `<p>` tag, short for "`paragraph`" serves as a container for blocks of text. paragrahp tag providing a means to structure and organize textual content. Whether you're sharing stories, conveying information, or presenting ideas, the <p> tag offers a flexible canvas for textual expression.

## Example 1
```
<!DOCTYPE html>
<html>
    <head>
        <!-- Metadata, links, and scripts go here -->
    </head>
    <body>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
        <!-- Additional paragraphs can be added as needed -->
    </body>
</html>
```



