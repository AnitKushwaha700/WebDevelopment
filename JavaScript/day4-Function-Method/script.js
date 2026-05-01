let a = 20;
b = 30;

function sum(x, y) {
  let z = x + y;
  return z;
}
let c = sum(a, b);
console.log(c);







// ------------------ FUNCTION EXPRESSION ---------------- //
// A function expression is a function that is created inside an expression and assigned to a variable.

// 1 //
const abc = function () {
  console.log("Hello Anikett!");
};
console.log(abc); // ---------> callback function
abc(); // --------->  Noraml function call

// 2 //
const add = function (a, b) {
  return a + b;
};
console.log(add);
console.log(add(4, 6));
console.log(add());







// ------------------ ARROW-FUNCTION ---------------- //
// An arrow function is a shorter way to write function expressions using the => (arrow) syntax, introduced in ES6 (ECMAScript 2015).

const arrowfun = () => {
  console.log("I am Arrow Fuction");
};
arrowfun();


const addArrow = (a, b) => a + b;


console.log(addArrow(5, 6));
