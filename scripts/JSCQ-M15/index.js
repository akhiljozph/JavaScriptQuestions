function debounce(func, delay) {

    let timeout;

    return function (...args) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout((args) => {
            func.apply(this, args);
        }, delay);

    }

}

const log = debounce(() => console.log('called'), 300);
log();
log();
log();