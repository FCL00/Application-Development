# Objects

In JavaScript, objects are versatile data structures that allow you to store and organize data using key-value pairs. Each key is a unique identifier associated with a value. Objects can represent real-world entities and are essential for building complex data structures.

## Creating Objects

You can create an object using curly braces {}:

```
    // Creating an empty object
    let person = {};

    // Predefined object
    let person = {name: "MajinBoo", age: 100}
```

## Adding Properties

Add properties to objects using the dot notation or square bracket notation:

```
    // Adding properties using dot notation
    person.name = 'John';
    person.age = 25;

    // Adding properties using square bracket notation
    person['occupation'] = 'Developer';
```

## Accessing Properties

Retrieve values from objects using the dot notation or square bracket notation:

```
    // Accessing properties using dot notation
    let personName = person.name; // personName is 'John'

    // Accessing properties using square bracket notation
    let personAge = person['age']; // personAge is 25
```

## Object Methods

Objects can also contain functions, known as methods:

```
    let car = {
    brand: 'Toyota',
    model: 'Camry',
    start: function() {
        console.log('Engine started!');
    },
    stop: function() {
        console.log('Engine stopped!');
    }
    };

    // Invoke or Calling methods
    car.start(); // Output: Engine started!
    car.stop();  // Output: Engine stopped!
```

## Nested Objects

Objects can be nested within other objects to represent hierarchical structures:

```
    let address = {
        city: 'New York',
        zipCode: '10001'
    };

    let person = {
        name: 'Alice',
        age: 30,
        contact: {
            email: 'alice@example.com',
            phone: '555-1234'
        },
        location: address
    };
```

## Object Destructuring

Object destructuring allows you to extract properties into variables:

```
    let { name, age } = person;
    console.log(name); // Output: Alice
    console.log(age);  // Output: 30
```

## Object.keys() and Object.values()

Object.keys() and Object.values() provide arrays of an object's keys and values, respectively:

```
    let keys = Object.keys(person);
    console.log(keys); // Output: ['name', 'age', 'contact', 'location']

    let values = Object.values(person);
    console.log(values); // Output: ['Alice', 30, { email: 'alice@example.com', phone: '555-1234' }, { city: 'New York', zipCode: '10001' }]
```

## Reference:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">Object.keys() and Object.values()</a>
