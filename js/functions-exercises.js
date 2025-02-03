// Email validations

const user1Email = 'aaaa@ssss.com';
const user2Email = 'jbfhhh@example.com';
const user3Email = 'invalid-email.com';

// if (user1Email.includes('@')) {
//   console.log(`${user1Email} is a valid email.`);
// } else {
//   console.log(`${user1Email} is not a valid email.`);
// }

function validator(email, criteria) {
  if (email.includes(criteria)) {
    console.log(`${email} includes ${criteria}`);
  } else {
    console.log(`${email} does not includes ${criteria}`);
  }
}

const validatorSymbol = '#';
validator(user1Email, validatorSymbol);
validator(user2Email, validatorSymbol);
validator(user3Email, validatorSymbol);

const emails = ['aaaa@ssss.com', 'jbfhhh@example.com', 'invalid-email.com'];
for (let index = 0; index < emails.length; index++) {
  validator(emails[index], validatorSymbol);
}

// Sum of two numbers
let sum;
function add(a, b) {
  console.log('In add function');
  let sum = a + b;
  return sum;
  // console.log('After return'); --> Unreachable code after return
}

sum = add(10, 5); //15
console.log(sum);

// Check if number is even/odd

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(3));
console.log(isEven(2));

// Count number of a specific character in a string
const str = 'vvvvvydgfdyjsj';
let count = 0;
const charToBeCounted = 'v';

for (let char of str) {
  if (char === charToBeCounted) {
    count++;
  }
}
console.log(count);

function countCharInString(str, charToBeCounted) {
  let count = 0;
  for (let char of str) {
    if (char === charToBeCounted) {
      count++;
    }
  }
  return count;
}

console.log(countCharInString(str, charToBeCounted));

// Find Longest Word :Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. Example string : 'Web Development Tutorial' Expected Output : 'Development'
// let object = {
//   1: 3,
//   2: 8,
//   3: 11,
// };

const text = 'Web Tutorial Development AA';
let wordCount = 1;
let countChar = 0;
let wordsCounted = {};

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    countChar++;
  } else {
    wordsCounted[wordCount] = countChar;
    countChar = 0;
    wordCount++;
  }
}
wordsCounted[wordCount] = countChar;

let maxLengthOfWord = 0;
let keyOfMax;
for (const key in wordsCounted) {
  if (wordsCounted[key] > maxLengthOfWord) {
    maxLengthOfWord = wordsCounted[key];
    keyOfMax = key;
  }
}

let indexOfMax = 0;
for (const key in wordsCounted) {
  if (key !== keyOfMax) {
    indexOfMax = wordsCounted[key] + 1 + indexOfMax;
  }
}

console.log(wordsCounted[keyOfMax]);
console.log(indexOfMax);
let maxWord = '';
for (let index = 0; index < wordsCounted[keyOfMax]; index++) {
  console.log(text[index + indexOfMax]);
  maxWord = text[index + indexOfMax] + maxWord;
}
console.log(maxWord);

// Given an number array calculate the sum of all elements
const numbers = [12, 34, 56, 777, 888, 88, 44, 33];
let sumOfNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  sumOfNumber = sumOfNumber + numbers[i];
}

// n=5 => factorial :1*2*3*4*5

function factorial(number) {
  let prod = 1;

  for (let i = 5; i > 0; i--) {
    // prod *= i;
    prod = i * prod;
  }

  console.log(prod);
}

factorial(5);

// 5! ===> 5 * (5-1) *(5-1-1) *(5-1-1-1) *(5-1-1-1-1)
// n! ===> n * (n-1)* ((n-1)-1)* (((n-1)-1)-1)
function factorial2(n) {
  if (n === 1) return 1;
  console.log(`${n} * factorial2(${n - 1});`);
  return n * factorial2(n - 1);
}

console.log(factorial2(5));
