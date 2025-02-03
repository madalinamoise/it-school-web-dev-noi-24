//Diferenta in schimbarea unei valori prin index intre Array si String
let array = [10, 23, 32];
array[1] = 33; //23
console.log(array);

let person = 'Anabella';
console.log(person[1]);
person[1] = 'c'; //nu functioneaza
console.log(person);
console.log(person.length);

// string functions
let sequence = 'abscd,frerf,.fij594';
console.log(sequence.slice(0, 3));
console.log(sequence.slice(8));
console.log(sequence.slice(-4)); //j594
console.log(sequence.substring(-3, 3)); //abs
console.log(sequence.substr(4, 2)); // @deprected

console.log(sequence.toUpperCase());
console.log(sequence);

let sequence2 = 'AAAdddfudhXXX';
console.log(sequence2.toLowerCase());

console.log(sequence + ' ' + sequence2);
console.log(sequence.concat(sequence, ' ', 'sssss', '2333', ' ', sequence2));

let message = '   Start moving!  ';
console.log(message.trim());

console.log(message.replace('t', 'c'));

console.log(message.split(' '));
