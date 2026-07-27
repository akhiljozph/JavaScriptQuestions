## Implement a deep clone function that works on nested objects and arrays (no structuredClone, no JSON.parse/stringify).

```javascript
const originalObject = {
    a: 1,
    b: {
        c: [1, 2, {
            d: 3
        }]
    }
};
const copiedObject = deepClone(originalObject);

copiedObject.b.c[1] = 7;

console.log("originalObject", originalObject);
console.log("copiedObject", copiedObject);
```

Expected output:
```javascript
    originalObject { a: 1, b: { c: [ 1, 2, { d: 3} ] } }
    copiedObject { a: 1, b: { c: [ 1, 7, { d: 3 } ] } }
```