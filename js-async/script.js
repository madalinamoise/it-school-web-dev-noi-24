// Exampple simple call stack
const number = 60;

function sum() {
  return 2 + 4;
}

function subtract() {
  return 4 - 2;
}

sum();
subtract();

//Example function call in function
function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const total = 8;
  return subtractTwo(total);
}

calculate();

//setTimeout
console.log(1);
setTimeout(() => {
  return console.log(2);
}, [3000]);
console.log(3);

// Ex 2

console.log('a');

setTimeout(function a() {
  console.log('b');
}, 3000);

setTimeout(function b() {
  console.log('c');
}, 1000);

console.log('d');

//Ex 3
for (var i = 1; i <= 5; i++) {
  setTimeout(function display() {
    console.log(i);
  }, i * 1000);
}

//Ex 4
for (let i = 1; i <= 5; i++) {
  setTimeout(function display() {
    console.log(i);
  }, i * 1000);
}

//EX 5

let count =0;

function delayedCounter(){
  console.log("I am in delayed");
  
  if(count<5){
    setTimeout(function exe(){
      count++;
      console.log(`Count: ${count}`);
      delayedCounter();
      
      console.log("Leave exe")
    },1000)
  }
  
}

delayedCounter();