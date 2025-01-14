// IF conditional statement

const roomTemperature = 9;

if (roomTemperature > 23) {
  console.log('Thermostat OFF'); // mai mare de 23
} else if (roomTemperature > 17) {
  console.log('Thermostat ON'); // intre 22 si 18 grade
} else {
  console.log('Alert: Low temperature'); // de la 17 grade in jos
}

if (roomTemperature > 23) {
  console.log('Thermostat OFF'); // mai mare de 23
} else if (roomTemperature > 20 && roomTemperature <= 23) {
  console.log('Add one degree');
} else if (roomTemperature > 40 || roomTemperature < 10) {
  console.log('Extreme temperatures');
} else {
  console.log('Add two degrees');
}

// && // si si --- and and
// || // sau sau --- or or
// true && true --> true
// true && false --> false
// false && false --> false

// true || true --> true
// true || false --> true
// false || false -->false

const day = 'Venus';

switch (day) {
  case 'Monday':
    console.log('The hardest day of the entire week.');
    break;
  case 'Tuesday':
    console.log('Just the second day of the week...');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('WEEKEND');
    break;
  default:
    console.log('Not a valid day');
}

// if (day === 'Monday') {
//   console.log('The hardest day of the entire week.');
// }

const age = 20;
let message = age >= 18 ? 'You are an adult' : 'You are still a kid';
let message2 =
  age < 1
    ? 'Baby'
    : age <= 4
    ? 'Todler'
    : age <= 10
    ? 'Kid'
    : 'Something bigger than a kid';

console.log(message);
// ternary operator syntax --> condition ? true : false

const numberOfDays = undefined;
if (numberOfDays) {
  console.log('You have some number of days');
}
