## Implement an EventEmitter class with on, off, and emit methods.

```javascript
    const emitter = new EventEmitter();
    const greet = (name) => console.log(`Hello, ${name}`);
    emitter.on('greet', greet);
    emitter.emit('greet', 'Akhil');
    emitter.off('greet', greet);
    emitter.emit('greet', 'Akhil');
```

Expected output: ***Hello, Akhil (printed once only)***