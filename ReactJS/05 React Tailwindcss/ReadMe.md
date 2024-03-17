# Tailwindcss With React

Tailwind CSS offers a refreshing approach to website styling. Its utility-based system makes it fast, flexible, and keeps your CSS clean. If you're looking for a way to streamline your development workflow and build responsive websites quickly.

Here is the link for the documentation on how to install tailwindcss using vite:
[Tailwindcss Vite](https://tailwindcss.com/docs/guides/vite)

## How to use colors in Tailwindcss

Tailwind ships with a default set of color classes, each representing a specific color shade. These classes follow a clear naming convention:

- Base Color: The color name like red, blue, green.
- Shade: A number representing the color's instensity (e.g., 50 for lightest, 900 for darkest)

here is this example we are going change the `background color` or in tailwind we use `bg-base_color-shade`

```
<div className="bg-red-500"></div>
<div className="bg-yellow-200"></div>
<div className="bg-green-900"></div>
<div className="bg-blue-400"></div>
```

You can also specify if the color you want to use by using square brackets `bg-[color]`

```
<div className="bg-[#121212]"></div>
<div className="bg-[#AF7FAF]"></div>
<div className="bg-[rgb(25,100,25)]"></div>
```

You can also use this on other classes like text color or `text-color-shade` property:

```
<p className="bg-black text-violet-500">Sample Text</p>
<p className="bg-black text-[#FFFFFF]">Sample Text</p>
<p className="bg-black text-[rgb(0,0,100)]">Sample Text</p>
```

you can also apply this with borders (e.g, `border-color-shade`):

```
<div className="border-red-500"></div>
<div className="border-[#AF7FAF]"></div>
<div className="border-[rgb(25,100,25)]"></div>
```

Links:
[Tailwindcss Colors](https://tailwindcss.com/docs/customizing-colors)

## How to use Margin And Padding

Margin: The space outside an element's border. It creates a gap between the element and its surrounding content.

Padding: The space inside an element's border but outside its content. It creates space between the element's border and its content.

Tailwind offers a range of classes with intuitive naming conventions for margins and padding.
Here's a breakdown:

- prefix : `m` for margin and `p` for padding
- value : represents the spacing size (e.g., 4 for 0.5rem)
- direction(optional): specify a direction (e.g., `t` for top, `r` for right, `b` for bottom, `l` for left, `x` for left and right, `y` for top and bottom)

```
<div className="m-2 p-1">Element 1</div>
<div className="m-2 p-2">Element 2</div>
<div className="ml-2 mr-1 p-1">Element 1</div>
<div className="m-2 pl-2 pt-1 pb-2">Element 2</div>
<div className="mx-1 py-2">Element 2</div>
```

Special Mention the `space-x-value` and `space-y-value` what is does is it gives spacing between group elements for example:

```
<ul class="space-y-2">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
```

Links:
[Tailwindcss Margin](https://tailwindcss.com/docs/margin)
[Tailwindcss Padding](https://tailwindcss.com/docs/padding)
[Tailwindcss Space Between](https://tailwindcss.com/docs/space)

## How to use Borders:

Borders are decorative lines or visual separators drawn around an element's content. They can enhance the visual hierarchy, separate content sections, and add a touch of style to your website.

Links:
[Tailwindcss Borders](https://tailwindcss.com/docs/border-radius)

## Tailwindcss Component Library

for the lazy coders out there that didnt want to create there own design and wants to just copy paste here are some helpful links:

[Flowbite](https://flowbite.com/docs/getting-started/introduction/)

[Daisy ui](https://daisyui.com/components/)

[Meraki ui](https://merakiui.com)

[Material ui](https://www.material-tailwind.com/docs/react/installation)
