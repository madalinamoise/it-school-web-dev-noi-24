let numberOfDays = 12;
numberOfDays = 13;

const numberOfYears = 3;

console.log(numberOfDays);
console.log(typeof numberOfDays);

// object with key as number
const months = {
  1: 'January', // key:value
  2: 'February',
};
console.log(months[1]);

const days = ['Monday', 'Tuesday']; //array
console.log(typeof days);
console.log(days[0]); //Monday

// object with key as string
const monthsInASeason = {
  Summer: ['June'], // key : object
  Winter: {
    first: 'December',
    second: 'January',
  },
  Spring: false,
}; // object = {key : object}
console.log(monthsInASeason['Summer']);
console.log(monthsInASeason.Summer);
console.log(monthsInASeason['Summer'][0]);

console.log('-----------------');

// Operators
console.log(5 - 3);

let a = 15;
let b = 5;
let c = '5';

console.log(a > 10);
console.log(a % b); //modulo --> restul impartirii lui a la b
console.log(a / b); //divide--->catul impartirii lui a la b
console.log(a / b + ((a % b) + 3)); //6
console.log(b ** 3); // 5*5*5=125

a = a + 1;
// console.log(a++); //16 ---> a++ => a = a+1 --> afiseasa a, apoi incrementeaza cu 1
// console.log(++a); //18 ---> deja a e 17, apoi incrementeaza cu 1 si afiseaza
console.log(++a); //17
console.log(a++); //17
console.log(a); //18

console.log('-----------------');

//  Comparison operators
console.log(a == b);
console.log(a != b);
console.log(b == c);
console.log(5 == '5');

console.log('1' + 2); //12 ---> "1"+"2"  = "12"
console.log(1 + '2'); //12

console.log('1' - 2); //-1
console.log('Ana' - 'An'); //NaN

console.log(b === c); //false ---> === verifica si tipul de date
console.log(b !== c); //true

console.log('-----------------');

console.log(false == 0); // true ---> false=0
console.log(false === 0);

console.log(true < 3); //true
console.log([] == 0);
console.log(true + true); //2
console.log(true + '2'); //true2

console.log(0.1 + 0.2 == 0.3);


