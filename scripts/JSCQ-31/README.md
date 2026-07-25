### **Implement a function that flattens a nested object.**

### Use Case - 1

```javascript
const obj = {
    a: {
        b: {
            c: 1
        },
        d: 2
    },
    e: 3
};
console.log(flattenObject(obj, ''));
```

Expected output: ***{ 'a.b.c': 1, 'a.d': 2, e: 3 }***