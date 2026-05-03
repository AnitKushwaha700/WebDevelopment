// =======================
// GLOBAL SCOPE
// =======================
var globalVar = "I am global";

function scopeDemo() {
  console.log("Global access:", globalVar);

  // =======================
  // FUNCTION SCOPE
  // =======================
  var functionVar = "I am function scoped";
  console.log("Function scope:", functionVar);

  // =======================
  // BLOCK SCOPE
  // =======================
  if (true) {
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am block scoped (const)";
    var blockVar = "I ignore block (var 😅)";

    console.log(blockLet);
    console.log(blockConst);
  }

  // console.log(blockLet); ❌ Error
  // console.log(blockConst); ❌ Error
  console.log(blockVar); // Works 😬

  // =======================
  // HOISTING WITH var
  // =======================
  console.log("Before var:", hoistVar); // undefined
  var hoistVar = "Now defined";
  console.log("After var:", hoistVar);

  // =======================
  // HOISTING WITH let/const
  // =======================
  // console.log(hoistLet); ❌ ReferenceError
  let hoistLet = "Let value";
  console.log("Let:", hoistLet);

  // =======================
  // FUNCTION HOISTING
  // =======================
  hoistedFunction(); // Works

  function hoistedFunction() {
    console.log("Function hoisted successfully");
  }

  // =======================
  // FUNCTION EXPRESSION HOISTING
  // =======================
  // notHoisted(); ❌ Error

  var notHoisted = function () {
    console.log("Function expression");
  };

  notHoisted(); // Works after assignment
}

scopeDemo();


// =======================
// EXTRA TRICKY CASE (INTERVIEW FAVORITE)
// =======================
console.log("\n--- Tricky Example ---");

var x = 10;

function tricky() {
  console.log(x); // undefined 😈
  var x = 20;
  console.log(x); // 20
}

tricky();