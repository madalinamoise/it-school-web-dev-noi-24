// const object = {
//   key1: value1,
//   key2: value2,
// };

const person = {
  name: 'Jack',
  email: 'jack@jack.com',
  phoneNumber: '0743552552',
  age: 20,
  hasKids: true,
  0: 'aaaa',
};

console.log(person);
console.log(person.name);
console.log(person['name']);

person.name = 'Mary';
console.log(person);

// add new key to object
person.surname = 'Popescu';
console.log(person);

if (person.name !== undefined) {
  console.log('Has a name');
}

for (const key in person) {
  console.log(`Key: ${key} , Value: ${person[key]}`);
}

// --------------
// Pass by value -> tipuri primitive: number, string, boolean,undefined etc
function multiply(num) {
  num = num * 2;
}
let number = 10;
multiply(number);
console.log(number); //10

//Pass by reference -> objects si arrays
function modifyName(obj) {
  obj.name = 'Alice';
}
modifyName(person);
console.log(person);

function reassignObject(obj) {
  obj = { name: 'Mona' };
  console.log('Inside: ', obj);
}
reassignObject(person);
console.log(person);

// Copy a primitive var
let number1 = 2;
let number2 = number1;
console.log('number1: ', number1); //2
console.log('number2: ', number2); //2

number2 = 7;
console.log('number1: ', number1); //2
console.log('number2: ', number2); //7

//Copy for an object or array
let movie1 = {
  name: 'Jumanji',
  min: 120,
  actors: {
    name: 'sss',
  },
};
let movie2 = movie1;
console.log('Movie 1:', movie1);
console.log('Movie 2', movie2);

movie2.min = 230;
console.log('Movie 1:', movie1); //230
console.log('Movie 2', movie2); //230

let movie3 = {};
Object.assign(movie3, movie2);
movie3.min = 60;
console.log('Movie 2:', movie2); //230
console.log('Movie 3', movie3); //60

// Freeze object
Object.freeze(movie3);
movie3.min = 90;
console.log('Movie 3', movie3);

console.log(Object.keys(movie3));

//Math
console.log(Math.PI);
console.log(Math.round(3.7)); /// 4.5->5
console.log(Math.random());

//Date
let now = new Date();
console.log(now);
