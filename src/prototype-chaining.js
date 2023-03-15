const animal = {
  dna: 'ATCG',
  name: 'Should be undefined but this is a string to demonstrate inheritance',
  bark() {
    return 'bark';
  },
};

const dog = {
  name: 'Spot',
};

const huy = {
  __proto__: {
    age: 24,
  },
};

Object.setPrototypeOf(dog, animal);
console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(animal));

console.log(huy.age); // 24
Object.setPrototypeOf(huy, animal);
console.log(huy.name); // Should be undefined but this is a string to demonstrate inheritance
console.log(huy.age); // undefined -- because we set the new huy.prototype on line 21 with setPrototypeOf
console.log(huy.bark());
