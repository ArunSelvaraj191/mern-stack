function greet(name, age) {
  return "Hello " + name + "your age is " + age;
}

console.log(greet("Vignesh", 25));

const greetArrow = (name, age) => {
  return "Hello " + name + "your age is " + age;
};

console.log(greetArrow("Dinesh", 25));

const person = {
  name: "Vignesh",
  age: 25,
  city: "Chennai",
  greet: function () {
    return (
      "Hello " +
      this.name +
      " your age is " +
      this.age +
      " and you live in " +
      this.city
    );
  },
};

console.log(person.name); // Vignesh
console.log(person.greet()); // Hello Vignesh your age is 25 and you live in Chennai

const student = {
  name: "Ravi",
  marks: {
    math: 80,
    science: 90,
  },
};

// Normal way
console.log(student.marks.math); // 80

// Destructuring way

const {
  name,
  marks: { science, math },
} = student;

console.log(name, science, math); // Ravi 90

// ES6 Features

// let and const

let city = "Chennai";
const pi = 3.14;
city = "Bangalore";
// pi = 3.15; // Error: Assignment to constant variable.

console.log(city, pi);

// Template Literals

let loc = "Pune";
let message = `Welcome to ${loc}`;

console.log(message);

// Default Parameters

function greetDefault(name = "Vignesh", age = 25) {
  return "Hello " + name + " your age is " + age;
}

console.log(greetDefault("Arun", 26));

// Spread and Rest Operators

const numbers = [1, 2, 3];
const newNumber = [0, ...numbers, 4, 5];

console.log(newNumber); // Spread Operator

function sum(...arg) {
  return arg[1];
}

console.log(sum(1, 2, 3, 4, 5)); // Rest Operator

// Promises & Async/Await

function getData() {
  return new Promise((resolve, reject) => {
    const x = 1;
    if (x) {
      setTimeout(() => resolve("Data received"), 2000);
    } else {
      reject("No data found");
    }
  });
}

async function showData() {
  const data = await getData();
  console.log(data);
}

showData();
