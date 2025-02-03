// You have a list of customer ages. Use arrays to:
// 1.Filter customers who are over 18.
// 2.Sort the initial list of ages in ascending order.
//  ---> descending order
// 3.Find the first customer who is 65 or older (senior citizen).
// 4.Calculate the average age of all customers.

let customerAges = [15, 25, 34, 42, 65, 17, 80];
let adults = customerAges.filter((age) => age > 18);
console.log(adults);

let customerAgesSorted = customerAges.sort();
console.log(customerAgesSorted);
let customerAgesDesc = customerAges.sort((a, b) => b - a);
console.log(customerAgesDesc);

let firstOlder = customerAges.find((age) => age >= 65);

//Tema : sa incerce si sa explice acelasi rezultat cu functia reduce din Array
function average() {
  let sum = 0;
  customerAges.forEach((age) => (sum = sum + age));
  return sum / customerAges.length;
}
console.log(average());

//Find the product with the highest price.
//Filter products that have more than 5 units in stock.
//Add a new product to the inventory using push.

let inventory = [
  { name: 'Laptop', price: 1200, quantity: 5 },
  { name: 'Phone', price: 800, quantity: 10 },
  { name: 'Tablet', price: 600, quantity: 7 },
];

let maxPrice = 0;
inventory.forEach((product) => {
  if (product.price > maxPrice) {
    maxPrice = product.price;
  }
});
console.log(inventory.find((p) => p.price === maxPrice));

let filterProducts = inventory.filter((product) => product.quantity > 5);
console.log(filterProducts);

let pushProduct = { name: 'Mouse', price: 120, quantity: 6 };
inventory.push(pushProduct);

console.log(inventory);
