function flattenObject(obj, keyString = '') {
    const result = {};

    Object.entries(obj).forEach(([key, value]) => {
        const newKey = keyString ? `${keyString}.${key}` : key;

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            Object.assign(result, flattenObject(value, newKey));
        } else {
            result[newKey] = value;
        }
    });

    return result;
}

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