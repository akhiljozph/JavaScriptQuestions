function deepClone(obj) {

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
            copy[key] = deepClone(obj[key]);
        }
    }

    return copy;
}

const obj = {
    a: 1,
    b: {
        c: [1, 2, {
            d: 3
        }]
    }
};
const result = deepClone(obj);

result.b.c[1] = 7;

console.log("obj", obj);
console.log("result", result);