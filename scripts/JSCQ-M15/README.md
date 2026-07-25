## Implement a debounce(fn, delay) function that delays invoking fn until delay ms have passed since the last call.

```javascript
    const log = debounce(() => console.log('called'), 300);
    log();
    log();
    log();
```

Expected output: ******