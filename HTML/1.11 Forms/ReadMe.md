# HTML Forms

HTML forms are constructed using the `<form>` element, which serves as the container for form controls and input fields. The basic structure of an HTML form consists of the opening `<form>` tag, followed by form controls such as text inputs, radio buttons, checkboxes, dropdown menus, and buttons, and concludes with the closing `</form>` tag.

## Syntax
```
<form action="/submit-form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>

    <button type="submit">Submit</button>
</form>
```
## Attributes of HTML Forms
HTML forms support several attributes that govern their behavior and functionality:

- `action`: Specifies the URL to which the form data should be submitted.
- `method`: Specifies the HTTP method to be used when submitting the form data (e.g., "get" or "post").
- `name`: Assigns a name to the form, useful for identifying and referencing the form in JavaScript or server-side processing.
- `enctype`: Specifies the encoding type for form data when submitting files (e.g., "multipart/form-data").
- `autocomplete`: Enables or disables automatic form filling by the browser based on previously entered data.

## Handling Form Submission

Upon submission, form data is typically sent to a server for processing. The server-side processing logic receives the form data, performs validation, processes the information, and generates a response. Depending on the application's requirements, the response may include feedback messages, redirect instructions, or data persistence operations.

