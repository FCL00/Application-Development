# Tables

Tables in HTML are indispensable tools for organizing and displaying data in a structured format. Let's dive into the world of HTML tables, exploring their elements and attributes to craft visually appealing and informative data presentations.

You can visit this link for code example live:
[Codepen](https://codepen.io/Fernando-Lagahit/pen/PogWexW?editors=1010)

![Tables](https://www.programiz.com/sites/tutorial2program/files/html-table.png)

# Understanding the Structure:
Here are the html elements we use to create a table in html:

`<table>`: Defines the table.

`<caption>`: Provides a title or description for the table.

`<thead>`: Defines the table header.

`<tr>`: Represents a row within the table.

`<th>`: Represents a header cell within a row.

`<tbody>`: Contains the main content of the table.

`<td>`: Represents a data cell within a row.

Tables in HTML are used to display data in rows and columns. Below is an example demonstrating the usage of the `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` elements to create a simple table:

### Important Note: you can adjust the each element design in css
```
<table border="1">
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Revenue</th>
      <th>Expenses</th>
      <th>Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
      <td>$6,000</td>
      <td>$4,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$12,000</td>
      <td>$7,000</td>
      <td>$5,000</td>
    </tr>
    <tr>
      <td>March</td>
      <td>$15,000</td>
      <td>$8,000</td>
      <td>$7,000</td>
    </tr>
  </tbody>
</table>
```

# Understanding Colspan and Rowspan
- Colspan: Used to span multiple columns, merging adjacent cells horizontally.
- Rowspan: Used to span multiple rows, merging cells vertically.
```
<table border="1">
  <caption>Meeting Schedule</caption>
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Morning</td>
      <td>Team Meeting</td>
      <td>Client Presentation</td>
      <td>Project Review</td>
    </tr>
    <tr>
      <td colspan="3">Breakfast Briefing</td>
    </tr>
    <tr>
      <td>Afternoon</td>
      <td colspan="3">Workshop</td>
    </tr>
  </tbody>
</table>
```



