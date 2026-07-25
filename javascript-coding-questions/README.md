# JavaScriptCodingQuestions

## 🟢 Easy

### [JSCQ-13](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-13)
**Calculate the total sum of elements from the provided array.**

```javascript
const numbers = [1, 5, 9, 10, 11, 4];
console.log(findSumOfNumbers(numbers));
```
Expected output: ***40***

### [JSCQ-22](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-22)
**Implement a javascript function that takes an array of numbers and returns a new array with only the even numbers.**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findEvenNumbers(numbers));
```
Expected output: ***[2, 4, 6, 8, 10]***

### [JSCQ-05](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-05)
**Find out whether the provided word is having only unique characters.**

```javascript
console.log(hasUniqueCharacters('Unique'));;
```
Expected output: ***true***

### [JSCQ-06](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-06)
**Find out the count of each characters from the provided word.**

```javascript
console.log(countCharacters('abbcccdddd'));
```
Expected output: ***{ a: 1, b: 2, c: 3, d: 4 }***

### [JSCQ-10](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-10)
**Find and return the unique numbers from a given array.**

```javascript
const numbers = [1, 2, 3, 2, 4, 5, 6, 8];
console.log(removeDupicates(numbers));
```
Expected output: ***[1, 2, 3, 4, 5, 6, 8]***

### [JSCQ-01](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-01)
**Find the first non repeating character from the provided word.**

```javascript
findFirstNonRepeatingChar('swiss');
```
Expected output: ***w***

```javascript
findFirstNonRepeatingChar('Swiss');
```
Expected output: ***w***

### [JSCQ-11](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-11)
**Verify whether the provided string is a palindrome or not.**

```javascript
console.log(console.log(isPalindrome("A man, a plan, a canal, Panama")););
```
Expected output: ***true***

### [JSCQ-12](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-12)
**Given a word and two indexes of that word, swap the characters at those indexes and return the result.**

```javascript
const input = 'abcd';
console.log(swapLetters(input, 0, 3));
```
Expected output: ***dbca***

### [JSCQ-18](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-18)
**Find out whether the number is a prime number or not.**

```javascript
console.log(isPrime(5));
```
Expected output: ***Number 5 is prime.***

### [JSCQ-19](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-19)
**Find the factorial of the given number.**

```javascript
console.log(factorial(5));;
```
Expected output: ***120***

### [JSCQ-20](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-20)
**Generate fibonacci series of the provided length.**

```javascript
console.log(generateFibonacciSeries(15));;
```
Expected output: ***[ 0,   1,   1,  2,  3,  5, 8,  13,  21, 34, 55, 89, 144, 233, 377 ]***

### [JSCQ-16](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-16)
**Create an array from 1 to limit where elements divisible by num1 are replaced with 'Fizz', elements divisible by num2 are replaced with 'Buzz', and elements divisible by both are replaced with 'FizzBuzz'.**

```javascript
console.log(fizzBuzzVariations(10, 2, 3))
```
Expected output: ***[1, 'Fizz', 'Buzz', 'Fizz', 5, 'FizzBuzz', 7, 'Fizz', 'Buzz', 'Fizz']***

## 🟡 Medium

### [JSCQ-07](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-07)
**Function to return the longest word from the provided sentence.**

```javascript
const sentence = 'This is a test sentence to find the largest word from this.';
console.log(findLargestWords(sentence));
```
Expected output: ***sentence***

### [JSCQ-08](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-08)
**Find and return the second largest number from the provided list.**

```javascript
const numbers = [2, 6, 4, 5, 7, 8, 9, 1, 10, 11];
console.log(findSecondLargest(numbers));
```
Expected output: ***10***

### [JSCQ-26](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-26)
**Function to find the common elements between two given arrays.**

```javascript
const firstArray = [1, 2, 1, 5, 6];
const secondArray = [1, 4, 8, 7, 6];
console.log(findCommon(firstArray, secondArray));
```
Expected output: ***[1, 6]***

### [JSCQ-02](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-02)
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

### [JSCQ-04](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-04)
**Given an array with subarrays, return an array by flattening the original one.**

```javascript
const subArray = [0,1,[3,5,[2],6],4,8];
console.log(flattenArray(subArray));
```
Expected output: ***[0, 1, 3, 5, 2, 6, 4, 8]***

### [JSCQ-21](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-21)
**Find the largest number from the given array which contains mixed inputs.**

```javascript
const stringsNNumbers = [1, 'a', 10, 'r', '11'];
console.log(findLargest(stringsNNumbers));
```
Expected output: ***10***

### [JSCQ-14](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-14)
**Given an array of numbers and find the maximum difference between the elements of the array.**

```javascript
const numbers = [1, 2, 6];
console.log(findMaxDifference(numbers));
```
Expected output: ***5***

### [JSCQ-09](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-09)
**Find the missing numbers from the provided array. Array range will be provided.**

```javascript
const numbers = [0, 1, 3, 6, 5];
console.log(findMissingNumbers(numbers, 0, 7));
```
Expected output: ***[2, 4, 7]***

### [JSCQ-24](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-24)
**Given a string s, replace every numeric digit with a sequence of '|' characters equal to the value of that digit. Non-digit characters should remain unchanged. Return the resulting string.**

```javascript
const str = 'a1bc23d0';
console.log(replaceNumbersWithChar(str));
```
Expected output: ***a|bc||d|***

### [JSCQ-28](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-28)
**Function to seperate the odd number pairs with a hyphen.**

```javascript
const number = 354791;
console.log(seperateOddPairsWithHyphens(number));
```
Expected output: ***3-547-9-1***

### [JSCQ-30](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-30)
**Implement a function that groups array elements based on a callback.**

```javascript
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
```
Expected output: ***{ '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }***

### [JSCQ-31](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-31)
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

## 🔴 Hard

### [JSCQ-29](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-29)
**Function that repeatedly reduces an array by taking absolute differences of adjacent elements until one number remains.**

```javascript
const numbers = [ 8,  5,  2,  9 ];
console.log(reduceByAdjacentDifferences(numbers));
```
Expected output: ***4***

### [JSCQ-15](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-15)
**Given an array of strings. Return an array with the angrams as sub arrays.**

```javascript
const words = ['Ate','Eat','Hello','Integral','Listen','Silent','Tea','Triangle','World'];
console.log(groupAnagrams(words));
```
Expected output: ***[['Ate', 'Eat', 'Tea'],['Integral','Triangle'],['Listen', 'Silent'],['Hello'],['World']]***

### [JSCQ-03](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-03)
**Given an array with integers. Find the length of the longest consecutive sequence from the array.**

```javascript
const sequence = [0,1,3,5,2,6,4,8];
console.log(findLengthOfLongestConsecutiveSequence(sequence));
```
Expected output: ***7***

### [JSCQ-25](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-25)
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

### [JSCQ-17](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-17)
**Given an array of sentences, sort it by word and return the sorted sentences.**

```javascript
const sentences = ['The Road To Learn React', 'The road to learn angular', 'Learning React', 'Learning Angular15', 'Learning angular12', 'React In Action'];
console.log(sortSentences(sentences));
```
Expected output: ***['Learning angular12', 'Learning Angular15', 'Learning React', 'React In Action', 'The road to learn angular', 'The Road To Learn React']***

### [JSCQ-23](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-23)
**Find and alphabetically sort all non-empty combinations of characters from a given string, preserving their relative order.**

```javascript
const str = 'abc';
console.log(generateUniqueSubStrings(str))
```
Expected output: ***[ 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c' ]***

### [JSCQ-27](https://github.com/akhiljozph/JavaScriptCodingQuestions/tree/master/scripts/JSCQ-27)
**Function to find the maximum sum of a subsequence such that no two elements are adjacent in the array.**

```javascript
const numbers = [8, 1, 4, 9, 3, 2, 7];
console.log(findMaximumSumOfNonAdjacentElements(numbers));
```
Expected output: ***24***