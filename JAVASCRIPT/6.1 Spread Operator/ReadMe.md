The spread operator (...) is used to spread the elements of an iterable (like an array or object) into another. It provides a concise and expressive way to work with collections of data.

## Spreading Elements in Arrays

Concatenating Arrays

```
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    let combinedArray = [...arr1, ...arr2];
    // combinedArray is [1, 2, 3, 4, 5, 6]
```

The spread operator can be used to concatenate arrays more efficiently than traditional methods.

## Copying Arrays

```
    let originalArray = [1, 2, 3];
    let copiedArray = [...originalArray];
    // copiedArray is a new array with the same elements as originalArray
```

## Spreading Elements in Objects

Merging Objects

```
    let obj1 = { num1: 1, num: 2 };
    let obj2 = { num3: 3, num4: 4 };

    let mergedObject = { ...obj1, ...obj2 };
    // mergedObject is { num1: 1, num1: 2, num1: 3, num1: 4 }
```
