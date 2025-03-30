localStorage.setItem('name', 'Andrei');
const user = {
  name: 'Andrei',
  age: 20,
  student: true,
};

localStorage.setItem('user', JSON.stringify(user)); //transform to string

console.log(localStorage.getItem('user'));
console.log(user); //string
console.log(JSON.parse(localStorage.getItem('user'))); //back to object
