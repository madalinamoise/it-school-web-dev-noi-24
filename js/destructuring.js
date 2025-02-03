//Array and object destructuring - > extragerea elemetelor in variabile diferite

//ARRAY
const numbers = [1, 2, 3, 4, 5];
const [a, b, c] = numbers;
console.log(a); //1 -> as a number
console.log(b); //2 -> as a number
console.log(c); //3 -> as a number

const [first, , third] = numbers;
console.log(first);
console.log(third);

// Rest operator ... (spread operator)

const [x, y, ...rest] = numbers;
console.log(x);
console.log(y);
console.log(rest);

//OBJECT
const person = { surname: 'Nadia', age: 24, country: 'RO' };
const { surname, age, gender } = person;

console.log(surname);
console.log(age);
console.log(gender); //undefined

const { surname: name, ...r } = person;
console.log(name);
console.log(r);
