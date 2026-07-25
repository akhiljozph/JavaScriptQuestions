## Given two values, implement a deepEqual(a, b) function that checks deep structural equality for objects/arrays.

```javascript
    let callCount = 0;
    function slowSquare(n) { callCount++; return n * n; }
    const memoSquare = memoize(slowSquare);
    memoSquare(4);
    memoSquare(4);
    console.log(memoSquare(4), callCount);
```

Expected output: ***true, false***