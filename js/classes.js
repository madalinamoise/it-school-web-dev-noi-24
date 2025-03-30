console.log(this); //Window
// this.alert('Alert from this');

function sayHello() {
  console.log(this); //Window - functia preia contextul din exterior / de unde este apelat
}
sayHello();

//Constructor functions
function PersonProfile(name, age) {
  this.name = name; //proprietati
  this.age = age;

  this.greet = function () {
    console.log(`Hello! My name is ${this.name}`);
  }; //metode

  this.isAdult = () => {
    return this.age > 18;
  };

  console.log(this);
}

const person1 = new PersonProfile('Ana', 10);
person1.greet();
const person2 = new PersonProfile('Mirel', 34);
console.log(person2.isAdult());

//Prototype
console.log(Array.prototype);
PersonProfile.prototype.displayNumbers = (number) => {
  for (let i = 5; i > 0; i--) {
    console.log(i);
  }
};
person1.displayNumbers(6);

//Classes
class PersonCompleteProfile {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    console.log(this);
    console.log(`Hello! My name is ${this.name}`);
  }
}
const person3 = new PersonCompleteProfile('Penelopa', 34, 'Timisoara');
person3.greet();
