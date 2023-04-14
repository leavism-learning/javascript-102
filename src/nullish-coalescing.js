const foo = null ?? 'bar';
console.log(foo); // 'bar'

const bar = 0 ?? 'bar';
console.log(foo); // 0

// different from assigning a default value
let count = 0;
const quantity = count || 42;
console.log(quantity); // 42 not 0

const qty = count ?? 42;
console.log(qty); // 0 not 42
