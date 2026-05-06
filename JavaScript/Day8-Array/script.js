let fd = [
  ["Aniket", "01-01-2026", 8989791426, "Satna", "Student"],
  ["Suraj", "01-01-2026", 8989791426, "Satna", "Student"],
  ["Ashish", "01-01-2026", 8989791426, "Satna", "Student"],
  ["Prasoon", "01-01-2026", 8989791426, "Satna", "Student"],
];

fd.forEach((Element) => {
  console.log(Element[0]);
});
fd.map((Element, idx) => {
  console.log(idx);
});

// -------------------------------------------------------------------//

let fDAta = [
  {
    id: 1,
    name: "Aniket Sharma",
    age: 21,
    course: "Computer Science",
    city: "Bhopal",
    skills: ["React", "JavaScript", "Tailwind"],
    isActive: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 22,
    course: "Information Technology",
    city: "Indore",
    skills: ["Python", "Django", "SQL"],
    isActive: false,
  },
  {
    id: 3,
    name: "Rahul Singh",
    age: 20,
    course: "Electronics",
    city: "Delhi",
    skills: ["C++", "Arduino", "Embedded C"],
    isActive: true,
  },
  {
    id: 4,
    name: "Sneha Patel",
    age: 23,
    course: "Mechanical",
    city: "Pune",
    skills: ["AutoCAD", "SolidWorks"],
    isActive: true,
  },
  {
    id: 5,
    name: "Aman Khan",
    age: 24,
    course: "Computer Science",
    city: "Mumbai",
    skills: ["Node.js", "MongoDB", "Express"],
    isActive: false,
  },
];

fDAta.forEach((item) => {
  console.log(item["name"]);
});
fDAta.forEach((item) => {
  console.log(item["age"]);
});

console.log(fDAta);

// ------------------------------- Bracket Notation -------------------- //  works on JSON and Array
console.log(fDAta[1]["name"]);
console.log(fDAta[2]["age"]);
console.log(fDAta[3]["course"]);

// ---------------------------- dot Notation -------------------------//      it only works on JSON

console.log(fDAta[3].name);
console.log(fDAta[3].age);
console.log(fDAta[3].course);

// -------------------------------------------------------------------//

const studentData = 
  {
    name: "Aniket Sharma",
    age: 21,

    marks: {
      english: 10,
      hindi: 90,
      physics: 80,
      chemistry: 75,
      mathematics: 95,
    },
    city: "Bhopal",
    course: "Computer Science",
  };

console.log("---------------------------------"+studentData["marks"]["english"]);

// ------------------------------------------------------------------ //

let Aniket = {
  name: "Aniket Kushwaha",
  dob: "04-04-2004",
  phone: "8989791426",
  city: "Satna",
};
console.log(Object.keys(Aniket));
console.log(Object.values(Aniket));
console.log(Object.entries(Aniket));

// --------------------------------------------------------------------- //

let ar = [20, , 20, 22, 33, 44, 53, 43, 4, 67];
ar.sort((a, b) => a - b);
console.log(ar);
console.log(ar.find((val) => val === 20));
console.log(ar.findIndex((val) => val === 67));
console.log(ar.findLastIndex((val) => val === 20));



// ---------------------------------------------------------------------------- //

let ar2 = [22, 33, 44, 32, 45, 54, 56, 66, 52, 47, 88];
console.log(ar2.filter((val) => val > 50));
console.log(ar2.find((val) => val > 30));

console.log(ar2.slice(0, 4));

let ar3 = "this is a  vs code for web-development";

console.log(ar3);
console.log(ar3.split(" "));
console.log(ar3.split("-"));
