const person = {};

const dude = person.name;
console.log(foo); // Uncaught TypeError: Cannot read property 'bar' of undefined

const huy = person?.name; // undefined
const huh = person?.['na' + 'me'];
