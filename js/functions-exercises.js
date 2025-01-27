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
