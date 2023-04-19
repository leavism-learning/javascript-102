// functions
// remember that in js functions are just objects
// so you can pass functions into other functions
// and be stored as variables

// function declaration
// such functions are hoisted
function sayHi(message) {
  return 'Said...' + message;
}

// function expression
// such functions aren't hoisted
const sayHello = function (message) {
  return 'Says...' + message;
};

// So which should you use?
// generally no difference
// but think of it this way
// function declarations are global scoped
// function expressions are local scope

// higher order functions
function add(x, y) {
  return x + y;
}

function math(x, y, operator) {
  return operator(x, y);
}
