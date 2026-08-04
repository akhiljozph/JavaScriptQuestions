class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(listener);
    }

    off(eventName, listener) {
        if (!this.events[eventName]) return;

        this.events[eventName] = this.events[eventName].filter(
            (fn) => fn !== listener
        );

        // Optional cleanup
        if (this.events[eventName].length === 0) {
            delete this.events[eventName];
        }
    }

    emit(eventName, ...args) {
        if (!this.events[eventName]) return;

        this.events[eventName].forEach((listener) => {
            listener(...args);
        });
    }
}

const emitter = new EventEmitter();
const greet = (name) => console.log(`Hello, ${name}`);
emitter.on('greet', greet);
emitter.emit('greet', 'Akhil');
emitter.off('greet', greet);
emitter.emit('greet', 'Akhil');