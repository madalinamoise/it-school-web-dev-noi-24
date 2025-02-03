// Email validation => '111dhbbf@cbfj.com" --> sa includa @
let email = 'ana@gmail.com';
console.log(email.search('x'));
function isValidEmail(email) {
  return email.includes('@');
}
console.log(isValidEmail(email));

//Filter and display valid emails, which includes @
let emails = [
  'test@mailinator.com',
  'ana@fmail.com',
  'aaaaaa.com',
  'pop@yahoo.com',
];
let validEmails = emails.filter((e) => isValidEmail(e));
//first iteration => let e= 'test@mailinator.com', isValidEmail(e)
//second iteration => e= 'ana@fmail.com',isValidEmail('ana@fmail.com')
console.log(validEmails);

//Replace [name] with a defined name
let sequence = '[name] is the middle sister in my family';
let personName = 'Ana';
let newSequence = sequence.replace('[name]', personName);
console.log(newSequence);

//Name formatting
let p1 = 'ana'; // Ana
let firstLetter = p1.charAt(0).toUpperCase();
console.log(firstLetter);
console.log(p1.slice(1));
console.log(firstLetter.concat(p1.slice(1)));
console.log(firstLetter + p1.slice(1));

function formatFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatName(str) {
  let names = str.split(' ');
  return names.map((n) => formatFirstLetter(n)).join(' ');
}

let p2 = 'ana maria';
console.log(formatName(p2));
