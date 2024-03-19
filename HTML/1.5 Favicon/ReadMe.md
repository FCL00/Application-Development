# Favicons
Favicons, short for "favorites icons," are small, square-shaped icons displayed in web browser tabs, bookmarks, and address bars. Despite their diminutive size, favicons serve as visual identifiers that reinforce brand recognition, establish website credibility, and enhance user engagement.
![Favicon](https://upload.wikimedia.org/wikipedia/commons/2/22/Wikipedia_favicon_in_Firefox_on_KDE_%282023%29.png)
## Creating a Favicon
- Size and Format: Favicons are typically square and come in various sizes, including 16x16 pixels, 32x32 pixels, and 48x48 pixels. The preferred file format for favicons is ICO (Windows Icon), but other common formats such as PNG and GIF are also supported.
- Design Considerations: Keep the favicon design simple, distinctive, and visually appealing. Focus on using recognizable brand elements, such as logos, initials, or symbols, to ensure instant recognition across different contexts and screen resolutions.
- Tools and Software: Several online favicon generators and graphic design software, such as Adobe Photoshop, Illustrator, and Canva, can help create and optimize favicons. These tools offer features for resizing, cropping, and exporting favicons in various formats.

## Implementing Favicons
- File Naming: Save the favicon file with the filename "favicon.ico" to ensure compatibility across different web browsers and server configurations.
- HTML Markup: Add the following HTML markup within the <head> section of your webpage to link to the favicon file:
```
<link rel="icon" type="image/x-icon" href="favicon.ico">
```
- Additional Sizes: To support different display resolutions and devices, include multiple <link> elements with different sizes:
```
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
```
Note: favicon element should always be put on the `head` element.
## Example
```
<html>
  <head>
    <title>Google</title>
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  </head>
  <body>
    <!-- Your code goes here :D -->
  </body>
</html>
```
