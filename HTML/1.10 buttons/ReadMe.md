# HTML Buttons
HTML buttons empower developers to create intuitive user interfaces by providing a means to trigger actions, submit forms, or navigate through web pages. Whether it's submitting a form, initiating a search, or executing a command, buttons serve as conduits for user interaction, driving engagement and interactivity.

## Syntax buttons
HTML buttons are created using the `<button>` element, which encapsulates the button's content and behavior. The basic syntax of an HTML button consists of the opening `<button>` tag, the button's content, and the closing `</button>` tag.
```
<button>Click Me</button>
```

## Attributes of HTML Buttons
HTML buttons support several attributes that enhance their functionality and appearance:
- `type`: Specifies the behavior of the button. Common values include "button" (default), "submit" (submits the form), and "reset" (resets the form).
- `name`: Assigns a name to the button, useful for form submissions.
- `value`: Specifies the value associated with the button, particularly useful for form submissions.
- `disabled`: Disables the button, preventing users from interacting with it.
```
<button type="submit" name="submitBtn" value="Submit">Submit Form</button>

<button disabled>Disabled Button</button>
```

## Styling HTML Buttons
HTML buttons can be styled using CSS to enhance their appearance and align with the overall design aesthetics of the webpage. Developers can apply CSS properties such as background color, text color, padding, border radius, and hover effects to customize the button's visual presentation.

Note: this is just an example later down the line youll see how we design our html elements.
```
<button class="custom-button">Click Me</button>

<style>
    .custom-button {
        background-color: #007bff;
        color: #ffffff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .custom-button:hover {
        background-color: #0056b3;
    }
</style>
```
