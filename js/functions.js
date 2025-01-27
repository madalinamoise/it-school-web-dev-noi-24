/**
 * Calculeaza discount-uri diferite pentru produse diferite pe care noi le declaram
 */
const product1 = 100;
const product2 = 30;
const product3 = 200;

const discount1 = 5;
const discount2 = 15;

const product1WithDiscount = product1 - (product1 * discount1) / 100;
const product2WithDiscount = product2 - (product2 * discount1) / 100;
const product3WithDiscount = product3 - (product3 * discount1) / 100;

let productWithDiscount; //global variable

console.log('Product 1 with discount', product1WithDiscount);

/**
 * Syntax: function nameOfTheFunction(arg..){...block code}
 */
function applyDiscount(product, discount) {
  productWithDiscount = product - (product * discount) / 100;
}

/**
 * Syntax: let nameOfTheFunction = function(arg..){...block code}
 */
// let applyDiscount = function (product, discount) {
//   const x = product - (product * discount) / 100;
//   console.log('Discount applied', x);
// };

/**
 * Syntax: let nameOfTheFunction = (arg..) => {...block code}
 */
// applyDiscountWithScopedVar(12, 2); --- > reference error check out hoisting
let applyDiscountWithScopedVar = (product, discount) => {
  const x = product - (product * discount) / 100;
  console.log('Discount applied', x);
};
applyDiscountWithScopedVar(product1, discount1);
// console.log(x);

applyDiscount(product1, discount1);
console.log(productWithDiscount);

applyDiscount(product2, discount1);
console.log(productWithDiscount);

applyDiscount(product3, discount2);
console.log(productWithDiscount);

// Predefined JS function

if (isNaN('sss')) {
  console.log('not a number');
}

console.log(parseInt('99'));

// Predefined browser function
alert("You've got mailed");

// Block & Function scope variables
const x = 10;
if (x >= 10) {
  let message = 'Greater or equal than 10';
}
// console.log(message); --->error

functionScopeExample();
function functionScopeExample() {
  if (true) {
    var message = 'Function scoped variable';
  }

  console.log(message);
}
functionScopeExample();
