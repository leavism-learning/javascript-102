const huy = {
  name: 'Huy',
  age: 32,
  city: 'Canada',
  country: 'USA',
};

const { name, age } = huy;

console.log(name);

const groceries = ['apple', 'peanut butter', 'knife'];

const [first, second, third] = groceries;
const [, , cut] = groceries; // might as well do const cut = groceries[2]
console.log(first);
console.log(cut);
