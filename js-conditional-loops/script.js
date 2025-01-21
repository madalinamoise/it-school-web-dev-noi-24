let fruits = ['Apple', 'Banana', 'Orange'];
// typeof fruits === Array
console.log(fruits);
console.log(fruits.length); // number --- 3
console.log(fruits[1]); // nameOfArray[index]
// index <= array.length - 1

let number = 8;
while (number > 2) {
  console.log('Number:', number);
  number = number - 1; // number--
}

number = 8;
let baseNumber = 2;
let step = 0;
while (baseNumber * step <= number) {
  console.log('Product: ', baseNumber * step);
  step++;
}

let numberOfWeekDays = 1;
do {
  console.log('Number of week days: ', numberOfWeekDays);
  numberOfWeekDays++;
} while (numberOfWeekDays < 8);

for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

let str = 'madam';
function isPalindrome(str) {
  let reversedStr = str; 
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(str));

let str1 = 'anabella';
console.log(isPalindrome(str1));