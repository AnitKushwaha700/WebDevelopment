// 1 //
let n = 0;
if (n >= 0) {
  console.log("Positive Integer");
} else {
  console.log("Negative Integer");
}

// 2 //
let age = 20;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

// 3 //
let x = 6;
if (x % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 4 //
let marks = 99;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("fail");
}

// 5 //
let user = "Aniket";
let password = "12345";

if (user === "Aniket" && password === "12345") {
  console.log("login Success");
} else {
  console.log("login Failed");
}

// --- Turnery Operator ----- //

user === "Aniket" && password === "12345"
  ? console.log("login Success")
  : console.log("login Failed");

// 6 //
let data;
let name = "Aniket";

data = name || "N/A";

// if (name) {
//   data = name;
// } else {
//   data = "N/A";
// }

console.log(data);




// -------------------------------- Continue -------------------------- //

for (let y = 0; y < 5; y++) {
  if (y === 2) {
    continue;
  }
  console.log(y);
}

// -------------------------------- break -------------------------- //

for (let z = 0; z < 5; z++) {
  if (z === 3) {
    break;
  }
  console.log(z);
}

// -------------------------------- Switch -------------------------- //

let choice = 20;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffe");
    break;
  }
  case 3: {
    console.log("Lassi");
    break;
  }
  case 4: {
    console.log("Milk");
    break;
  }
  case 5: {
    console.log("Water");
    break;
  }
  default: {
    console.log("Nothing");
  }
}
