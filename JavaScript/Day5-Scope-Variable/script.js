// var a = 10;
// console.log(a);
// console.log(b);

// var b = 20;
// console.log(a);
// console.log(b);

// 1. Global Scope - Variable declared outside any function or block.

let test = "This is a Global Test Variable";

function classA() {
  console.log("ClassA", test);
}
function classB() {
  console.log("ClassB", test);
}
function classC() {
  let test2 = "This is a Local Variable";
  console.log("ClassC", test);
  console.log("ClassC", test2);
}

// 2. Local Scope (Function Scope) - Variable declared inside a function.

function classD() {
  let x = 20;
  console.log("ClassD", test);

  {
    let v = 10;
    console.log(v);
  }
  //   console.log(v);
}

let a = 5;                                     // Here a is local variable & globL variable
{
  function classE() {
    console.log("ClassE", test);
  }
  function classF() {
    console.log("ClassF", test);
  }
}
  function classG() {
    console.log("ClassG", test);
  }

classA();
classB();
classC();
classD();
classE();
classF();
classG();
