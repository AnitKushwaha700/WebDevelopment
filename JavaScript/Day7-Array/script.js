// Array function //

// Creation
let arr = [10, 12, 14, 16, 18, 20, 22];

// Reading
for (var i = 0; i < 7; i++) {
  console.log(arr[i]);
}
console.log(arr);

// Updation
arr[2] = arr[2] + 10;
console.log(arr);

// Deletion
arr = [];
console.log(arr);

// ---------------------------------------------------------------------- //

let arr1 = [10, 11, 12, 13, 14, 15, 16, 17];
console.log(arr1);
arr1.push(18);
console.log(arr1);
arr1.pop(10);
console.log(arr1);
arr1.unshift(20);
console.log(arr1);
arr1.shift();
console.log(arr1);

console.log("index 7 : " + arr1.at(7));
console.log("Value 17 : " + arr1.indexOf(17));

console.log("include : " + arr1.includes(10));

// -------------------------.find--------------------------- //

console.log(".find : " + arr1.find((ele) => ele === 1));

// ----------------------- sort, reverse ---------------------------------//

let arr2 = [18, 12, 43, 53, 5, 7, 45, 42];
console.log(arr2);

console.log("sort : " + arr2.sort());
console.log("reverse : " + arr2.reverse());

// -------------------length -------------------------- //
console.log("length : " + arr3.length);

// ----------------------For-each ------------------------------//

let arr3 = [18, 12, 43, 53, 5, 7, 45, 42, 10, 22];
console.log("ForEach-loop");

arr3.forEach((element) => {
  console.log(element);
});
