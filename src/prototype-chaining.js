const animal = {
  dna: 'ATCG',
};

const dog = {
  name: 'Spot',
};

Object.setPrototypeOf(dog, animal);
console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(animal));
