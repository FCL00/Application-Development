# Hyperlinks

Hyperlinks enable users to navigate between different web pages, resources, and sections within a document.
Whether it's traversing between articles, accessing external websites, or jumping to specific sections within a webpage, links empower users to explore the boundless realms of the internet.

## Syntax

In HTML we use `<a></a>` also know as anchor tag element, which stands at the core of hyperlink creation. 
The basic syntax of an HTML link consists of the opening `<a>` tag, the `href` attribute specifying the destination URL, the link text, and the closing `</a>` tag.

```
<a href="https://example.com">Visit Example</a>
```

## Attributes of HTML links

HTML links support several attributes that enhance their functionality and accessibility:

- `href`: Specifies the URL (Uniform Resource Locator) of the destination webpage or resource.
- `target`: Specifies where to open the linked document. Values include `_blank` (opens in a new tab/window), `_self` (opens in the same frame), `_parent` (opens in the parent frame), and `_top` (opens in the full body of the window).
- `title`: Provides additional information about the link, typically displayed as a tooltip when hovering over the link.

## Types of HTML links

HTML links come in various forms, catering to different navigation needs and user interactions:

1. External Links: Links that navigate to webpages or resources outside the current website/domain.
```
<a href="https://example.com" target="_blank">Visit Example</a>
```
2. Internal Links: Links that navigate to different sections within the same webpage/document using anchor tags (`<a>`).
```
<a href="#section2">Jump to Section 2</a>
```
3. Email Links: Links that trigger the user's email client to compose a new email when clicked.
```
<a href="mailto:example@example.com">Send Email</a>
```
4. File Links: Links that download files when clicked, specifying the file path in the `href` attribute.
```
<a href="documents/document.pdf" download>Download PDF</a>
```



