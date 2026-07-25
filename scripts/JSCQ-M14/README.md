## Implement a deep clone function that works on nested objects and arrays (no structuredClone, no JSON.parse/stringify).

```javascript
    const original = { a: 1, b: { c: [1, 2, { d: 3 }] } };
    const clone = deepClone(original);
    clone.b.c[2].d = 99;
    console.log(original.b.c[2].d, clone.b.c[2].d);
```

Expected output: ***3 99***