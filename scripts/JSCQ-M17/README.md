## Given two values, implement a deepEqual(a, b) function that checks deep structural equality for objects/arrays.

```javascript
    console.log(deepEqual({ a: [1, 2], b: { c: 3 } }, { a: [1, 2], b: { c: 3 } }));
    console.log(deepEqual({ a: 1 }, { a: 2 }));
```

Expected output: ***true, false***