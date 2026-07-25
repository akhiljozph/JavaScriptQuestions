function binarySearch(numbers, searchNumber) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === searchNumber) {
            return i;
        }
    }
    return -1;
}

const numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 90));