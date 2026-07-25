## Implement a curry function that converts a function of N arguments into a sequence of unary/partial calls.

```javascript
function sum(a, b, c) { return a + b + c; }
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1, 2, 3));
```

Expected output: ***6, 6, 6***