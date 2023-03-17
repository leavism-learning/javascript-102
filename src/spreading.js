const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};
const newObj = {
  foo: 4,
  ...obj,
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }
