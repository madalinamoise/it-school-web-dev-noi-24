// Metode care modifica array-ul initial

// push & pop
let fruits = ['kiwi', 'avocado', 'strawberry', 'banana', 'apple'];
console.log('Initial array:', fruits);

fruits.push('orange');
console.log('Array after push:', fruits);

fruits.pop();
console.log('Array after pop:', fruits);

//reverse
fruits.reverse();
console.log('Array after reverse:', fruits);

// sort
fruits.sort();
console.log('Array after sort:', fruits);

// Callback function folosit ca argm in forEach ()-> metoda care nu modifica array-ul initial
let numbers = [2, 3, 5, 6];
let displayProductOfTwo = (x) => console.log(x * 2);
// numbers.forEach(displayProductOfTwo);
numbers.forEach((x) => console.log(x * 2));
console.log(numbers);

fruits.forEach((f) => console.log(`I have a ${f}`));

let array = [10, '222', true];
console.log(array);

// Metode care nu influenteaza array-ul initial
// map -> creaza un nou array cu elementele modificate
let doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//filter -> returneaza un array nou care are elementele ce indeplinesc o conditie data de noi
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

//find -> gaseste primul element care indeplineste o conditie !!! se opreste la primul element gasit
let firstEven = numbers.find((x) => x % 2 !== 0);

//reduce
numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((acc, curr) => acc + curr, 0));
// la prima iteratie cand index = 0 => acc=0;curr=1; acc= acc+curr = 0+1=1
// la a doua index=1 => acc =1;curr=2 ; acc=1+2=3
// la a treia index=2 => acc=3; curr=3;acc =6
