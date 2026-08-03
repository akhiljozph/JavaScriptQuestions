# JavaScriptCodingQuestions

## 🟢 Easy

### [JSCQ-E01](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E01)
**Calculate the total sum of elements from the provided array.**

```javascript
const numbers = [1, 5, 9, 10, 11, 4];
console.log(findSumOfNumbers(numbers));
```
Expected output: ***40***

### [JSCQ-E02](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E02)
**Implement a javascript function that takes an array of numbers and returns a new array with only the even numbers.**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(numbers));
```
Expected output: ***[2, 4, 6, 8, 10]***

### [JSCQ-E03](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E03)
**Find out whether the provided word is having only unique characters.**

```javascript
console.log(hasUniqueCharacters('Unique'));;
```
Expected output: ***true***

### [JSCQ-E04](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E04)
**Find out the count of each characters from the provided word.**

```javascript
console.log(countCharacters('abbcccdddd'));
```
Expected output: ***{ a: 1, b: 2, c: 3, d: 4 }***

### [JSCQ-E05](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E05)
**Find and return the unique numbers from a given array.**

```javascript
const numbers = [1, 2, 3, 2, 4, 5, 6, 8];
console.log(removeDupicates(numbers));
```
Expected output: ***[1, 2, 3, 4, 5, 6, 8]***

### [JSCQ-E06](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E06)
**Find the first non repeating character from the provided word.**

```javascript
findFirstNonRepeatingChar('swiss');
```
Expected output: ***w***

```javascript
findFirstNonRepeatingChar('Swiss');
```
Expected output: ***w***

### [JSCQ-E07](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E07)
**Verify whether the provided string is a palindrome or not.**

```javascript
console.log(console.log(isPalindrome("A man, a plan, a canal, Panama")););
```
Expected output: ***true***

### [JSCQ-E08](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E08)
**Given a word and two indexes of that word, swap the characters at those indexes and return the result.**

```javascript
const input = 'abcd';
console.log(swapLetters(input, 0, 3));
```
Expected output: ***dbca***

### [JSCQ-E09](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E09)
**Find out whether the number is a prime number or not.**

```javascript
console.log(isPrime(5));
```
Expected output: ***Number 5 is prime.***

### [JSCQ-E10](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E10)
**Find the factorial of the given number.**

```javascript
console.log(factorial(5));;
```
Expected output: ***120***

### [JSCQ-E11](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E11)
**Generate fibonacci series of the provided length.**

```javascript
console.log(generateFibonacciSeries(15));;
```
Expected output: ***[ 0,   1,   1,  2,  3,  5, 8,  13,  21, 34, 55, 89, 144, 233, 377 ]***

### [JSCQ-E12](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E12)
**Create an array from 1 to limit where elements divisible by num1 are replaced with 'Fizz', elements divisible by num2 are replaced with 'Buzz', and elements divisible by both are replaced with 'FizzBuzz'.**

```javascript
console.log(fizzBuzzVariations(10, 2, 3))
```
Expected output: ***[1, 'Fizz', 'Buzz', 'Fizz', 5, 'FizzBuzz', 7, 'Fizz', 'Buzz', 'Fizz']***

### [JSCQ-E13](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-E13)
**Implement binary search on a sorted array and return the index of the target, or -1 if not found.**

```javascript
    const numbers = [1, 3, 5, 7, 9, 11, 13];
    console.log(binarySearch(numbers, 9));
```

Expected output: ***4***

## 🟡 Medium

### [JSCQ-M01](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M01)
**Function to return the longest word from the provided sentence.**

```javascript
const sentence = 'This is a test sentence to find the largest word from this.';
console.log(findLargestWords(sentence));
```
Expected output: ***sentence***

### [JSCQ-M02](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M02)
**Function to find the common elements between two given arrays.**

```javascript
const firstArray = [1, 2, 1, 5, 6];
const secondArray = [1, 4, 8, 7, 6];
console.log(findCommon(firstArray, secondArray));
```
Expected output: ***[1, 6]***

### [JSCQ-M03](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M03)
**Find and return the second largest number from the provided list.**

```javascript
const numbers = [2, 6, 4, 5, 7, 8, 9, 1, 10, 11];
console.log(findSecondLargest(numbers));
```
Expected output: ***10***

### [JSCQ-M04](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M04)
**Find the largest number from the given array which contains mixed inputs.**

```javascript
const stringsNNumbers = [1, 'a', 10, 'r', '11'];
console.log(findLargest(stringsNNumbers));
```
Expected output: ***10***

### [JSCQ-M05](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M05)
**Given an array of numbers and find the maximum difference between the elements of the array.**

```javascript
const numbers = [1, 2, 6];
console.log(findMaxDifference(numbers));
```
Expected output: ***5***

### [JSCQ-M06](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M06)
**Given a string s, replace every numeric digit with a sequence of '|' characters equal to the value of that digit. Non-digit characters should remain unchanged. Return the resulting string.**

```javascript
const str = 'a1bc23d0';
console.log(replaceNumbersWithChar(str));
```
Expected output: ***a|bc||d|***

### [JSCQ-M07](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M07)
**Function to separate the odd number pairs with a hyphen.**

```javascript
const number = 354791;
console.log(separateOddPairsWithHyphens(number));
```
Expected output: ***3-547-9-1***

### [JSCQ-M08](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M08)
**Implement a function that groups array elements based on a callback.**

```javascript
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
```
Expected output: ***{ '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }***

### [JSCQ-M09](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M09)
**Implement a function that flattens a nested object.**

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

### [JSCQ-M10](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M10)
**Given an array with sub arrays, return an array by flattening the original one.**

```javascript
const subArray = [0,1,[3,5,[2],6],4,8];
console.log(flattenArray(subArray));
```
Expected output: ***[0, 1, 3, 5, 2, 6, 4, 8]***

### [JSCQ-M11](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M11)
**Given two arrays. Merge the arrays and return an with only unique elements.**

```javascript
const empOne = [
    {
        id: 1,
        name: "Akhil Joseph",
        department: "Delivery"
    }, {
        id: 2,
        name: "Abraham Joseph",
        department: "Delivery"
    }
];

const empTwo = [
    {
        id: 1,
        name: "Akhil Joseph",
        department: "Delivery"
    }, {
        id: 2,
        name: "Abraham Joseph",
        department: "Delivery"
    }, {
        id: 3,
        name: "Mariya James",
        department: "Delivery"
    }
];
```

Expected Output:
```javascript
[
  { id: 1, name: 'Akhil Joseph', department: 'Delivery' },
  { id: 2, name: 'Abraham Joseph', department: 'Delivery' },
  { id: 3, name: 'Mariya James', department: 'Delivery' }
]
```



### [JSCQ-M12](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M12)
**Find the missing numbers from the provided array. Array range will be provided.**

```javascript
const numbers = [0, 1, 3, 6, 5];
console.log(findMissingNumbers(numbers, 0, 7));
```
Expected output: ***[2, 4, 7]***

### [JSCQ-M13](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M13)
**Given a string, find the length of the longest substring without repeating characters.**

```javascript
console.log(longestUniqueSubstring('abcabcbb'));
```

Expected output: ***abc***

### [JSCQ-M14](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-M14)
**Implement a deep clone function that works on nested objects and arrays (no structuredClone, no JSON.parse/stringify).**

```javascript
const originalObject = {
    a: 1,
    b: {
        c: [1, 2, {
            d: 3
        }]
    }
};
const copiedObject = deepClone(originalObject);

copiedObject.b.c[1] = 7;

console.log("originalObject", originalObject);
console.log("copiedObject", copiedObject);
```

Expected output:
```javascript
    originalObject { a: 1, b: { c: [ 1, 2, { d: 3} ] } }
    copiedObject { a: 1, b: { c: [ 1, 7, { d: 3 } ] } }
```

## 🔴 Hard

### [JSCQ-H01](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-H01)
**Function that repeatedly reduces an array by taking absolute differences of adjacent elements until one number remains.**

```javascript
const numbers = [ 8,  5,  2,  9 ];
console.log(reduceByAdjacentDifferences(numbers));
```
Expected output: ***4***

### [JSCQ-H02](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-H02)
**Given an array of strings. Return an array with the angrams as sub arrays.**

```javascript
const words = ['Ate','Eat','Hello','Integral','Listen','Silent','Tea','Triangle','World'];
console.log(groupAnagrams(words));
```
Expected output: ***[['Ate', 'Eat', 'Tea'],['Integral','Triangle'],['Listen', 'Silent'],['Hello'],['World']]***

### [JSCQ-H03](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-H03)
**Given an array with integers. Find the length of the longest consecutive sequence from the array.**

```javascript
const sequence = [0,1,3,5,2,6,4,8];
console.log(findLengthOfLongestConsecutiveSequence(sequence));
```
Expected output: ***7***

### [JSCQ-H04](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-H04)
**Function that performs a diagonal zigzag traversal of a matrix in JavaScript.**

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(traverseMatrix(matrix));
```
Expected output: ***[1, 2, 3, 4, 5, 6, 7, 8, 9]***

### [JSCQ-H05](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-H05)
**Given an array of sentences, sort it by word and return the sorted sentences.**

```javascript
const sentences = ['The Road To Learn React', 'The road to learn angular', 'Learning React', 'Learning Angular15', 'Learning angular12', 'React In Action'];
console.log(sortSentences(sentences));
```
Expected output: ***['Learning angular12', 'Learning Angular15', 'Learning React', 'React In Action', 'The road to learn angular', 'The Road To Learn React']***

### [JSCQ-H06](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-H06)
**Find and alphabetically sort all non-empty combinations of characters from a given string, preserving their relative order.**

```javascript
const str = 'abc';
console.log(generateUniqueSubStrings(str))
```
Expected output: ***[ 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c' ]***

### [JSCQ-H07](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-H07)
**Function to find the maximum sum of a subsequence such that no two elements are adjacent in the array.**

```javascript
const numbers = [8, 1, 4, 9, 3, 2, 7];
console.log(findMaximumSumOfNonAdjacentElements(numbers));
```
Expected output: ***24***