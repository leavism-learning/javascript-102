const animal = {
  dna: 'ATCG',
};

const dog = {
  name: 'Spot',
};

const huy = {};

Object.setPrototypeOf(dog, animal);
console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(animal));

Object.setPrototypeOf(huy, animal);
console.log(huy.name);
console.log(huy.dna);
