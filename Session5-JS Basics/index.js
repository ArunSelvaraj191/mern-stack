// Variable scope in JS

var name = "John john";
console.log(name);
let age = 20;
age = 21;
console.log(age);
const company = "Microsoft";
console.log(company);

function sayHello() {
  const name = "John";
  name = "Jane";
  console.log("Hello " + name);
}
console.log("Hello outside " + name);

sayHello();

// Data types in JS

function dataType() {
  let studentName = "John"; // String
  let age = 20; // Number
  let isEnrolled = true; // Boolean => true/false
  let address = null; // Null => empty value
  let phoneNumber; // Undefined => value not assigned
  let subjects = ["Math", "Science", "History"]; // Array
  let student = { name: "John", age: 20, isEnrolled: true }; // Object
  console.log(
    typeof studentName,
    typeof age,
    typeof isEnrolled,
    typeof address,
    typeof phoneNumber,
    typeof subjects,
    typeof student
  );
}

// dataType();

// Operators in JS  =>  + - * / % ++ -- == === != < > <= >= && ||  !

function operators() {
  let a = 10;
  let b = 5;
  console.log("a + b =", a + b);
  console.log("a - b =", a - b);
  console.log("a * b =", a * b);
  console.log("a / b =", a / b);
  console.log("a % b =", a % b);
  a++;
  b++;
  a--;
  b--;
  console.log("a++ =", a);
  console.log("++b =", b);
  console.log("a == b", a != b);
  console.log("a === b", a === b);
  console.log("a < b", a < b); // 10 < 10 => false
  console.log("a > b", a > b);
  console.log("a<=b", a <= b); // 10 <= 10 => true
  console.log("a>=b", a >= b); // 10 >= 10 => true
  const c = false && false;
  console.log(": ", c); // true && true => true
  const d = false || true;
  console.log("d: ", !d); // true || false => true
}

operators();

// Array in JS

function arrayFun() {
  let fruits = ["Apple", "Banana", "Orange"]; // [0,1,2]
  fruits.push("Grapes");
  fruits.unshift("Mango");
  fruits.pop();
  fruits.shift();
  console.log(fruits[2]);
}

arrayFun();

// TASK : slice and splice in array

// Object in JS
function objectFun() {
  let student = { name: "John", age: 20, isEnrolled: true };
  student.name = "Jane";
  student.address = "123 Main St";
  console.log(student);
}

objectFun();
