// ----------------- LOOP ------------------- //

// 1. FOR-LOOP

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// 2. FOR-OF

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks)
// {
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(sum);
// console.log(`the average marks of class = ${avg}`);

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//   offer = val / 10;
//   items[i] -= offer;
//   console.log(`value after offer = ${items[i]}`);
//   i++;
// }

// 3. FOR-IN

let student = {
  name: "Aniket",
  age: 21,
};

for (let key in student) {
  console.log(key, student[key]);
}

// --------------------- Function ------------------- //

// function sum(a, b){
//     c = a + b;
//     return c;
// }

// let val = sum(3,4);
// console.log(val);

function multi(a, b) {
  c = a * b;
  return c;
}

let val = multi(3, 4);
console.log(val);

// --------------------- Arrow-function ---------------- //

const arrowSum = (a, b) => {
  console.log(a + b);
};

const arrowMulti = (a, b) => {
  console.log(a * b);
};

const printHello = () => {
  console.log("Hello");
};


const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
    {
        count++;
    }
  }
  return count;
};


// ------------------ CALLBACK FUNCTION ----------------- //

function greet(name, callback) {
    console.log("Hello " + name);  // Step 1
    callback();                    // Step 2
}

function sayBye() {
    console.log("Bye!");
}

greet("Aniket", sayBye);


// greet("Aniket", sayBye) call hua
// "Hello Aniket" print hua
// callback() → matlab sayBye() call hua
// "Bye!" print hua

// 👉 Output:

// Hello Aniket
// Bye!


// ----------------------- Higher-Order Function (HOF) ------------------ //

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

calculate(2, 3, add);




// ------------------------------ DOM ------------------------ //

// let heading = document.getElementsByClassName("heading-class");
// console.dir(heading);
// console.log(heading);

// let div = document.querySelector("div");
// console.dir(div);


// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "From SRKCESM"



// for Adding //

let newBtn = document.createElement("button")
newBtn.innerText = "click me !"
console.log(newBtn);

let div = document.querySelector("div")
div.after(newBtn); 


// for delete //

let para = document.querySelector("p")
para.remove();