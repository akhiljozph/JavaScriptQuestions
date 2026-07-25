function binarySearch(numbers, searchNumber) {
    return numbers.findIndex((el) => el === searchNumber);
}

const numbers = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(numbers, 9));